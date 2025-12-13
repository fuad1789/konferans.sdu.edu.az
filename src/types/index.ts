export interface Conference {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image?: string;
  year: string;
  field: string;
  dateRange: string;
}

export interface Thesis {
  id: string;
  title: string;
  authors: string[];
  conferenceId: string;
  section: string;
  pages: string;
  pdfUrl?: string;
  keywords: string[];
  abstract?: string;
}

export interface Material {
  id: string;
  title: string;
  conference: string;
  conferenceId?: string;
  year: number;
  type: 'Thesis' | 'Article' | 'Presentation' | 'Program' | 'Book';
  author: string;
  downloadUrl: string;
  pdfUrl?: string;
  note?: string;
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  content: string;
  slug: string; // for SEO friendly URLs
}
