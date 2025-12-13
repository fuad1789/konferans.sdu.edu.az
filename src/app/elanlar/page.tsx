import { announcements } from '@/lib/data';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';
import { Calendar, Tag } from 'lucide-react';

export default function AnnouncementsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
          Elanlar və Xəbərlər
        </h1>
        <p className="text-lg text-gray-600">
          Konfrans qəbulları, son tarixlər və digər vacib məlumatlar.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {announcements.map((ann) => (
          <Card key={ann.id} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
            <CardHeader className="p-6 pb-3">
              <div className="flex gap-2 mb-3">
                {ann.tags.map(tag => (
                   <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                     <Tag className="h-3 w-3" /> {tag}
                   </Badge>
                ))}
              </div>
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 mb-2">
                <Link href={`/elanlar/${ann.id}`} className="hover:underline">
                  {ann.title}
                </Link>
              </h2>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                {ann.date}
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-0">
               <p className="text-gray-600 line-clamp-3 mb-4">
                 {ann.excerpt}
               </p>
               <Link href={`/elanlar/${ann.id}`} className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                 Ətraflı oxu &rarr;
               </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
