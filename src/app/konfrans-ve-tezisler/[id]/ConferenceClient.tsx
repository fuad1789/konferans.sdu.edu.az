'use client';

import { useState } from 'react';
import { Conference, Thesis } from '@/types';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Search, FileText, Download, User } from 'lucide-react';
import Link from 'next/link';

interface ConferenceClientProps {
  conference: Conference;
  theses: Thesis[];
}

export default function ConferenceClient({ conference, theses }: ConferenceClientProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTheses = theses.filter(thesis => {
    const searchLower = searchTerm.toLowerCase();
    return (
      thesis.title.toLowerCase().includes(searchLower) ||
      thesis.authors.some(author => author.toLowerCase().includes(searchLower)) ||
      thesis.keywords.some(kw => kw.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-blue-600">Ana səhifə</Link>
        <span className="mx-2">/</span>
        <Link href="/konfrans-ve-tezisler" className="hover:text-blue-600">Konfranslar</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900 truncate max-w-xs">{conference.title}</span>
      </nav>

      {/* Conference Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="h-40 w-40 bg-blue-600 rounded-xl flex-shrink-0 flex items-center justify-center text-white font-bold text-5xl shadow-lg">
            {conference.year}
          </div>
          <div className="flex-1 space-y-4">
            <div className="flex gap-2">
               <Badge className="bg-blue-100 text-blue-700">{conference.field}</Badge>
               <Badge variant="outline">{conference.dateRange}</Badge>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">
              {conference.title}
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              {conference.description}
            </p>
          </div>
        </div>
      </div>

      {/* Theses Section */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b border-gray-200 pb-5">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <FileText className="h-6 w-6 text-blue-600" />
            Tezislər və Məqalələr
            <span className="text-sm font-normal text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
              {filteredTheses.length}
            </span>
          </h2>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Başlıq və ya müəllif axtar..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-4">
          {filteredTheses.length > 0 ? (
            filteredTheses.map((thesis) => (
              <Card key={thesis.id} className="hover:border-blue-200 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="space-y-3 flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {thesis.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-gray-400" />
                          <span>{thesis.authors.join(', ')}</span>
                        </div>
                      </div>

                      {thesis.abstract && (
                        <p className="text-sm text-gray-500 line-clamp-2 italic border-l-2 border-gray-200 pl-3">
                          {thesis.abstract}
                        </p>
                      )}

                      <div className="flex flex-wrap gap-2 pt-1">
                        {thesis.keywords.map((kw: string) => (
                          <span key={kw} className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                            #{kw}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start">
                      <a href={thesis.pdfUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="gap-2 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-100">
                          <Download className="h-4 w-4" />
                          PDF
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">
              Axtarışınıza uyğun tezis tapılmadı.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
