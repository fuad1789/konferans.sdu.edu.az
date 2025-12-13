import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { conferences, announcements, materials } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, FileText, Calendar, Megaphone } from "lucide-react";

export default function Home() {
  const latestConferences = conferences.slice(0, 3);
  const latestAnnouncements = announcements.slice(0, 3);
  const latestMaterials = materials.slice(0, 3);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-blue-900 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Konfrans Materialları Mərkəzi
          </h1>
          <p className="mt-6 text-lg leading-8 text-blue-100 max-w-2xl mx-auto">
            Sumqayıt Dövlət Universitetində keçirilən bütün konfransların tezislərinə, 
            materiallarına və əlaqəli elanlara vahid çıxış nöqtəsi.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/konfrans-ve-tezisler">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Konfranslara baxın
              </Button>
            </Link>
            <Link href="/konfrans-materiallari">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10 hover:text-white bg-transparent">
                Materiallar <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Sections Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Latest Conferences */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 flex items-center gap-2">
                <FileText className="h-6 w-6 text-blue-600" />
                Son Konfranslar
              </h2>
              <Link href="/konfrans-ve-tezisler" className="text-sm font-semibold text-blue-600 hover:text-blue-500">
                Hamısına bax &rarr;
              </Link>
            </div>
            <div className="grid gap-6">
              {latestConferences.map((conf) => (
                <Card key={conf.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-start">
                      <div className="space-y-2">
                        <div className="flex gap-2 mb-2">
                          <Badge>{conf.year}</Badge>
                          <Badge variant="secondary">{conf.field}</Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                          <Link href={`/konfrans-ve-tezisler/${conf.id}`}>
                            {conf.title}
                          </Link>
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{conf.description}</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                          <Calendar className="h-3 w-3" />
                          {conf.dateRange}
                        </div>
                      </div>
                      <Link href={`/konfrans-ve-tezisler/${conf.id}`} className="shrink-0">
                         <Button variant="outline" size="sm">Ətraflı</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Announcements Sidebar */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 flex items-center gap-2">
                <Megaphone className="h-6 w-6 text-orange-500" />
                Elanlar
              </h2>
              <Link href="/elanlar" className="text-sm font-semibold text-blue-600 hover:text-blue-500">
                Hamısına bax &rarr;
              </Link>
            </div>
            <div className="space-y-4">
              {latestAnnouncements.map((ann) => (
                <Card key={ann.id} className="border-l-4 border-l-orange-500">
                  <CardHeader className="p-4 pb-2">
                    <div className="flex gap-2 mb-1">
                      {ann.tags.map(tag => <Badge key={tag} variant="secondary" className="text-[10px]">{tag}</Badge>)}
                    </div>
                    <Link href={`/elanlar/${ann.id}`} className="font-medium text-gray-900 hover:underline line-clamp-2 block">
                      {ann.title}
                    </Link>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-xs text-gray-500 mb-2">{ann.date}</p>
                    <p className="text-sm text-gray-600 line-clamp-3">{ann.excerpt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Links / Materials Preview */}
            <div className="pt-8 border-t border-gray-200">
               <h3 className="text-lg font-semibold mb-4">Yeni Materiallar</h3>
               <ul className="space-y-3">
                 {latestMaterials.map(mat => (
                   <li key={mat.id}>
                     <a href={mat.pdfUrl} className="group flex items-start gap-3 text-sm text-gray-600 hover:text-blue-600">
                        <FileText className="h-5 w-5 text-gray-400 group-hover:text-blue-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{mat.title}</span>
                     </a>
                   </li>
                 ))}
               </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
