import { Metadata } from 'next';
import Map from '../components/Map';


export const metadata: Metadata = {
  title: 'UNILAG Pathfinder',
  description: 'Find your way to UNILAG with our interactive map',
  keywords: ['UNILAG', 'pathfinder', 'map', 'navigation', 'university'],
  openGraph: {
    title: 'UNILAG Pathfinder',
    description: 'Find your way to UNILAG with our interactive map',
    url: 'https://unilag-pathfinder.vercel.app',
    siteName: 'UNILAG Pathfinder',
    images: [
      {
        url: 'https://unilag-pathfinder.vercel.app/og-image.png',
        width: 800,
        height: 600,
        alt: 'UNILAG Pathfinder',
      },
    ],
    locale: 'en_US',
    type: 'website',
  }
}

export default function Home() {
  return (
    <Map />
  );
}
