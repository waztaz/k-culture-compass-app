import { MapView } from '@/components/map/map-view';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Interactive Map | K-Culture Compass',
    description: 'Discover K-Pop and K-Beauty hotspots in Korea.',
};

export default function MapPage() {
  return (
    <div className='-m-4 lg:-m-6'>
      <MapView />
    </div>
  );
}
