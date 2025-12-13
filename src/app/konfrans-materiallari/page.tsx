'use client';

import { useState, useMemo } from 'react';
import { materials, conferences } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Select } from '@/components/ui/Select';
import { Input } from '@/components/ui/Input';
import { FileText, Download, Search, Book, File } from 'lucide-react';


export default function MaterialsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedConference, setSelectedConference] = useState('all');

  // Derived options
  const years = useMemo(() => Array.from(new Set(materials.map(m => m.year))).sort((a, b) => b - a), []);
  const types = useMemo(() => Array.from(new Set(materials.map(m => m.type))).sort(), []);
  
  // Filter logic
  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === 'all' || material.year.toString() === selectedYear;
    const matchesType = selectedType === 'all' || material.type === selectedType;
    const matchesConference = selectedConference === 'all' || material.conferenceId === selectedConference;
    return matchesSearch && matchesYear && matchesType && matchesConference;
  });

  // Helper to get conference title
  const getConferenceTitle = (id?: string) => {
    if (!id) return null;
    return conferences.find(c => c.id === id)?.title;
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Program': return <FileText className="h-5 w-5" />;
      case 'Book': return <Book className="h-5 w-5" />;
      default: return <File className="h-5 w-5" />;
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
          Konfrans Materialları
        </h1>
        <p className="text-lg text-gray-600">
          Konfrans proqramları, tezis kitabları və digər rəsmi sənədlər.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8 space-y-4">
        <div className="relative">
             <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
             <Input 
               placeholder="Sənəd adı üzrə axtarış..." 
               className="pl-9"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
             />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Select 
            value={selectedConference} 
            onChange={(e) => setSelectedConference(e.target.value)}
          >
            <option value="all">Bütün Konfranslar</option>
            {conferences.map(conf => (
              <option key={conf.id} value={conf.id}>{conf.title}</option>
            ))}
          </Select>

          <Select 
            value={selectedType} 
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="all">Bütün sənəd tipləri</option>
            {types.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </Select>

          <Select 
            value={selectedYear} 
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="all">Bütün illər</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </Select>
        </div>
      </div>

      {/* Material List */}
      <div className="grid gap-4">
        {filteredMaterials.length > 0 ? (
          filteredMaterials.map((material) => (
            <Card key={material.id} className="hover:border-blue-300 transition-colors">
              <CardContent className="p-6 flex flex-col sm:flex-row items-center gap-6">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                  {getTypeIcon(material.type)}
                </div>
                
                <div className="flex-1 space-y-1 text-center sm:text-left">
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">{material.type}</Badge>
                    <Badge variant="secondary" className="text-xs">{material.year}</Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{material.title}</h3>
                  {material.conferenceId && (
                    <p className="text-sm text-gray-500 line-clamp-1">
                      {getConferenceTitle(material.conferenceId)}
                    </p>
                  )}
                  {material.note && (
                    <p className="text-xs text-gray-400 italic">
                      {material.note}
                    </p>
                  )}
                </div>

                <a href={material.pdfUrl} className="shrink-0 w-full sm:w-auto">
                  <Button className="w-full gap-2 bg-blue-600 hover:bg-blue-700">
                    <Download className="h-4 w-4" />
                    Yüklə
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-300">
            <p className="text-gray-500">Heç bir material tapılmadı.</p>
          </div>
        )}
      </div>
    </div>
  );
}
