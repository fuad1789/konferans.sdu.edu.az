import { Conference, Announcement, Material, Thesis } from '@/types';

export const conferences: Conference[] = [
  {
    id: '1',
    title: 'Riyaziyyat və Mexanikanın Müasir Problemləri',
    date: '15-16 Dekabr 2023',
    location: 'Bakı, Azərbaycan',
    description: 'Beynəlxalq elmi konfrans riyaziyyat və mexanika sahəsindəki son nailiyyətlərə həsr olunub.',
    image: '/images/conference-1.jpg',
    year: '2023',
    field: 'Riyaziyyat',
    dateRange: '15-16 Dek'
  },
  {
    id: '2',
    title: 'Davamlı İnkişaf və Yaşıl Enerji',
    date: '20-21 Yanvar 2024',
    location: 'Sumqayıt, Azərbaycan',
    description: 'Enerji səmərəliliyi və ekoloji problemlərin həllinə yönəlmiş respublika konfransı.',
    image: '/images/conference-2.jpg',
    year: '2024',
    field: 'Ekologiya',
    dateRange: '20-21 Yan'
  },
  {
    id: '3',
    title: 'Rəqəmsal İqtisadiyyat: Çağırışlar və Perspektivlər',
    date: '10 Fevral 2024',
    location: 'Online / Zoom',
    description: 'Müasir iqtisadiyyatda rəqəmsal transformasiyanın rolu haqqında elmi seminar.',
    year: '2024',
    field: 'İqtisadiyyat',
    dateRange: '10 Fev'
  }
];

export const announcements: Announcement[] = [
  {
    id: '1',
    title: 'Tezislərin qəbulu uzadıldı',
    date: '10 Dekabr 2023',
    content: '"Davamlı İnkişaf" konfransı üçün tezislərin son qəbul tarixi 30 Dekabra qədər uzadılmışdır.',
    tags: ['Xəbər', 'Mühüm'],
    excerpt: 'Tezislərin qəbul tarixi uzadıldı',
    slug: 'tezislerin-qebulu-uzadildi'
  },
  {
    id: '2',
    title: 'Konfrans proqramı təsdiqləndi',
    date: '05 Dekabr 2023',
    content: '15 Dekabrda keçiriləcək konfransın tam proqramı sayta yerləşdirilmişdir. "Proqram" bölməsindən tanış ola bilərsiniz.',
    tags: ['Proqram', 'Yenilik'],
    excerpt: 'Tam proqram artıq saytdadır',
    slug: 'konfrans-proqrami-tesdiqlendi'
  },
  {
    id: '3',
    title: 'Gənc Tədqiqatçılar üçün Qrant Müsabiqəsi',
    date: '01 Dekabr 2023',
    content: 'SDU Elmi Şurası gənc tədqiqatçılar üçün yeni qrant müsabiqəsi elan edir. Ətraflı məlumat üçün elmi hissəyə müraciət edin.',
    tags: ['Müsabiqə', 'Qrant'],
    excerpt: 'Yeni qrant müsabiqəsi elan edildi',
    slug: 'genc-tedqiqatcilar-ucun-qrant'
  }
];

export const materials: Material[] = [
  {
    id: '1',
    title: 'Qeyri-xətti diferensial tənliklərin həlli üsulları',
    conference: 'Riyaziyyat və Mexanika Konfransı 2023',
    conferenceId: '1',
    year: 2023,
    type: 'Thesis',
    author: 'Əliyev M.Ə.',
    downloadUrl: '#',
    pdfUrl: '#'
  },
  {
    id: '2',
    title: 'Alternativ enerji mənbələrinin səmərəliliyi',
    conference: 'Yaşıl Enerji Simpoziumu',
    conferenceId: '2',
    year: 2024,
    type: 'Article',
    author: 'Həsənova S.Q.',
    downloadUrl: '#',
    pdfUrl: '#'
  },
  {
    id: '3',
    title: 'Big Data analitikasının iqtisadi proqnozlaşdırmada rolu',
    conference: 'Rəqəmsal İqtisadiyyat 2023',
    conferenceId: '3',
    year: 2023,
    type: 'Presentation',
    author: 'Quliyev R.K.',
    downloadUrl: '#',
    pdfUrl: '#'
  },
  {
    id: '4',
    title: 'Süni intellektin təhsildə tətbiqi',
    conference: 'Təhsil Texnologiyaları Forumu',
    year: 2022,
    type: 'Thesis',
    author: 'Məmmədova A.N.',
    downloadUrl: '#',
    pdfUrl: '#',
    note: 'Xüsusi buraxılış'
  },
  {
    id: '5',
    title: 'Konfrans Proqramı',
    conference: 'Riyaziyyat və Mexanika Konfransı 2023',
    conferenceId: '1',
    year: 2023,
    type: 'Program',
    author: 'Təşkilat Komitəsi',
    downloadUrl: '#',
    pdfUrl: '#'
  }
];



export const theses: Thesis[] = [
  {
    id: 't1',
    title: 'Qeyri-xətti diferensial tənliklərin həlli üsulları',
    authors: ['Əliyev M.Ə.', 'Həsənova S.Q.'],
    conferenceId: '1',
    section: 'Riyaziyyat',
    pages: '12-15',
    keywords: ['Diferensial tənliklər', 'Qeyri-xətti analiz'],
    abstract: 'Bu tədqiqat işində qeyri-xətti diferensial tənliklərin həlli üçün yeni yanaşma təklif olunur.'
  },
  {
    id: 't2',
    title: 'Diferensial tənliklərin tətbiqi məsələləri',
    authors: ['Vəliyev A.R.'],
    conferenceId: '1',
    section: 'Mexanika',
    pages: '22-25',
    keywords: ['Mexanika', 'Tətbiqi riyaziyyat'],
  },
  {
    id: 't3',
    title: 'Yaşıl enerji texnologiyalarının iqtisadi səmərəliliyi',
    authors: ['Məmmədov K.S.'],
    conferenceId: '2',
    section: 'Energetika',
    pages: '45-48',
    keywords: ['Yaşıl enerji', 'İqtisadiyyat', 'Səmərəlilik'],
    abstract: 'Məqalədə alternativ enerji mənbələrinin iqtisadi səmərəliliyi təhlil edilir.'
  },
  {
    id: 't4',
    title: 'Ekoloji binaların layihələndirilməsi',
    authors: ['Rüstəmova L.M.'],
    conferenceId: '2',
    section: 'Ekologiya',
    pages: '56-60',
    keywords: ['Ekologiya', 'Memarlıq', 'Davamlı inkişaf']
  }
];
