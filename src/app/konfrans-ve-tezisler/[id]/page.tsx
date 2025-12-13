import { conferences, theses } from '@/lib/data';
import ConferenceClient from './ConferenceClient';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return conferences.map((conference) => ({
    id: conference.id,
  }));
}

export default async function ConferenceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  
  const conference = conferences.find((c) => c.id === id);
  
  if (!conference) {
    notFound();
  }

  const conferenceTheses = theses.filter((t) => t.conferenceId === id);

  return <ConferenceClient conference={conference} theses={conferenceTheses} />;
}
