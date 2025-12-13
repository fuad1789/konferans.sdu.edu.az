'use client';

import { useState, useMemo } from 'react';
import { conferences } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import Link from 'next/link';
import { Calendar, Search } from 'lucide-react';

export default function ConferenceListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedField, setSelectedField] = useState('all');

  // Derive unique years and fields for filter options
  const years = useMemo(() => Array.from(new Set(conferences.map(c => c.year))).sort((a, b) => b.localeCompare(a)), []);
  const fields = useMemo(() => Array.from(new Set(conferences.map(c => c.field))).sort(), []);

  // Filter conferences
  const filteredConferences = conferences.filter(conf => {
    const matchesSearch = conf.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === 'all' || conf.year.toString() === selectedYear;
    const matchesField = selectedField === 'all' || conf.field === selectedField;
    return matchesSearch && matchesYear && matchesField;
  });

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
          Konfranslar və Tezislər
        </h1>
        <p className="text-lg text-gray-600">
          SDU-da keçirilən bütün elmi konfransların arxivi.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 relative">
             <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
             <Input 
               placeholder="Konfrans adı üzrə axtarış..." 
               className="pl-9"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
             />
          </div>
          <div>
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
          <div>
            <Select
               value={selectedField}
               onChange={(e) => setSelectedField(e.target.value)}
            >
              <option value="all">Bütün sahələr</option>
              {fields.map(field => (
                <option key={field} value={field}>{field}</option>
              ))}
            </Select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid gap-6">
        {filteredConferences.length > 0 ? (
          filteredConferences.map((conf) => (
            <Card key={conf.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Optional: if we had images, we'd put one here */}
                  <div className="hidden md:block w-32 h-32 bg-blue-50 rounded-lg flex-shrink-0 flex items-center justify-center text-blue-200 font-bold text-4xl">
                    {conf.year}
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex gap-2">
                       <Badge>{conf.year}</Badge>
                       <Badge variant="secondary">{conf.field}</Badge>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">
                      <Link href={`/konfrans-ve-tezisler/${conf.id}`} className="hover:text-blue-600 transition-colors">
                        {conf.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 text-sm">{conf.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="h-4 w-4" />
                      {conf.dateRange}
                    </div>
                  </div>

                  <div className="flex items-center md:self-center">
                    <Link href={`/konfrans-ve-tezisler/${conf.id}`} className="w-full md:w-auto">
                       <Button className="w-full">Tezislərə bax</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-300">
             <div className="mx-auto h-12 w-12 text-gray-400 mb-4 bg-gray-100 rounded-full flex items-center justify-center">?</div>
             <h3 className="mt-2 text-sm font-semibold text-gray-900">Nəticə tapılmadı</h3>
             <p className="mt-1 text-sm text-gray-500">Axtarış kriteriyalarını dəyişərək yenidən yoxlayın.</p>
             <Button 
               variant="outline" 
               className="mt-6"
               onClick={() => {
                 setSearchTerm('');
                 setSelectedYear('all');
                 setSelectedField('all');
               }}
             >
               Filtrləri təmizlə
             </Button>
          </div>
        )}
      </div>
    </div>
  );
}
