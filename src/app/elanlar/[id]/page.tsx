import { announcements } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/Badge';
import { Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  return announcements.map((ann) => ({
    id: ann.id,
  }));
}

export default async function AnnouncementDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const announcement = announcements.find((a) => a.id === id);

  if (!announcement) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
      <Link href="/elanlar" className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Elanlara qayıt
      </Link>

      <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 overflow-hidden">
        <div className="flex gap-2 mb-6">
          {announcement.tags.map(tag => (
            <Badge key={tag} variant="secondary" className="px-3 py-1 text-sm bg-orange-50 text-orange-700">
              {tag}
            </Badge>
          ))}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          {announcement.title}
        </h1>

        <div className="flex items-center text-gray-500 mb-8 pb-8 border-b border-gray-100">
          <Calendar className="h-5 w-5 mr-2" />
          <span className="font-medium">{announcement.date}</span>
        </div>

        <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed">
          <p className="text-lg text-gray-900 font-medium mb-6">
            {announcement.excerpt}
          </p>
          <div className="whitespace-pre-wrap">
            {announcement.content}
          </div>
        </div>
      </article>
    </div>
  );
}
