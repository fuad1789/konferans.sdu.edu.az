
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { conferences, announcements, materials } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, FileText, Calendar, Megaphone } from "lucide-react"; // Keep Lucide for UI usage
import { 
  FaBook, FaGlobe, FaFileLines, FaUsers, FaCertificate, FaBullhorn,
  FaMicroscope, FaAtom, FaDna, FaLaptopCode, FaGraduationCap, FaLightbulb
} from "react-icons/fa6"; // FontAwesome for Hero Background

export default function Home() {
  const latestConferences = conferences.slice(0, 3);
  const latestAnnouncements = announcements.slice(0, 3);
  const latestMaterials = materials.slice(0, 3);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-blue-900 py-16 sm:py-20 lg:py-24 overflow-hidden isolate">
        {/* Background Gradients & Patterns */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-blue-950">
           <div className="absolute inset-0 bg-gradient-to-tr from-blue-950 via-blue-900 to-indigo-950 opacity-90"></div>
           {/* Grid Pattern */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
           {/* Radial Gradient overlay */}
           <div className="absolute left-0 top-0 right-0 h-full bg-[radial-gradient(circle_800px_at_100%_200px,#ffffff0c,transparent)]"></div>
        </div>

        {/* Decorative Vectors - High Quality Filled Icons with Responsive Sizing */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 text-white/5">
           {/* Left Side Group */}
           <div className="absolute top-4 left-4 sm:top-10 sm:left-10 transform -rotate-12">
               <FaBook className="w-16 h-16 sm:w-24 sm:h-24 opacity-80" />
           </div>
           <div className="absolute top-1/3 left-[-10px] sm:left-20 transform rotate-6">
               <FaGlobe className="w-24 h-24 sm:w-36 sm:h-36 opacity-60" />
           </div>
           <div className="absolute bottom-20 left-4 sm:left-12 transform rotate-12">
               <FaMicroscope className="w-14 h-14 sm:w-20 sm:h-20" />
           </div>
           <div className="absolute bottom-4 left-1/4 transform -rotate-6">
               <FaAtom className="w-16 h-16 sm:w-24 sm:h-24 opacity-70" />
           </div>

           {/* Right Side Group */}
            <div className="absolute top-8 right-6 sm:top-20 sm:right-10 transform rotate-12">
               <FaCertificate className="w-20 h-20 sm:w-28 sm:h-28 opacity-70" />
           </div>
           <div className="absolute top-1/2 right-[-20px] sm:right-24 transform -rotate-6">
               <FaUsers className="w-24 h-24 sm:w-32 sm:h-32 opacity-60" />
           </div>
           <div className="absolute bottom-16 right-8 sm:right-16 transform -rotate-12">
               <FaBullhorn className="w-16 h-16 sm:w-20 sm:h-20" />
           </div>
           <div className="absolute bottom-6 right-1/3 transform rotate-45">
               <FaDna className="w-12 h-12 sm:w-16 sm:h-16 opacity-80" />
           </div>

           {/* Additional Scattered Icons for Density */}
           <div className="absolute top-4 left-1/3 sm:left-1/4 transform -rotate-12 hidden sm:block">
               <FaLaptopCode className="w-12 h-12 sm:w-16 sm:h-16 opacity-50" />
           </div>
           <div className="absolute top-10 right-1/3 transform rotate-12 hidden sm:block">
               <FaGraduationCap className="w-14 h-14 sm:w-20 sm:h-20 opacity-50" />
           </div>
           <div className="absolute bottom-12 left-2/3 transform rotate-6 hidden sm:block">
               <FaLightbulb className="w-10 h-10 sm:w-14 sm:h-14 opacity-50" />
           </div>
           <div className="absolute top-1/2 left-4 transform -rotate-45 sm:hidden">
               <FaFileLines className="w-12 h-12 opacity-40" />
           </div>
           
           {/* Center ambient blurs */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full max-h-[500px] bg-blue-500/20 blur-[100px] rounded-full opacity-50"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-blue-200 bg-blue-900/50 ring-1 ring-inset ring-blue-700/50 mb-6 backdrop-blur-sm shadow-sm">
              <FaCertificate className="mr-2 h-4 w-4 text-blue-400" />
              Elmi Tədqiqatlar və İnnovasiyalar
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 drop-shadow-lg">
            Konfrans və Elmi <br className="hidden sm:block" /> <span className="text-blue-300">Materiallar</span>
          </h1>
          <p className="mt-4 text-lg leading-8 text-blue-100 max-w-2xl mx-auto font-light opacity-90">
            Sumqayıt Dövlət Universitetinin elmi bazası. Bütün konfrans tezisləri, 
            məqalələr və akademik resurslar üçün vahid elektron platforma.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-8">
            <Link href="/konfrans-ve-tezisler" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20 border-0 ring-1 ring-white/10">
                Konfranslara baxın
              </Button>
            </Link>
            <Link href="/konfrans-materiallari" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 px-8 text-base text-white border-white/20 hover:bg-white/10 hover:text-white bg-white/5 backdrop-blur-sm">
                Materiallar <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Sections Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
