import type { Location } from './types';

const locations: Location[] = [
  {
    id: 'loc-1',
    name: 'HYBE INSIGHT',
    category: 'K-Pop Holy Lands',
    coordinates: { lat: 37.5323, lng: 126.9911 },
    address: 'B1, 42, Hangang-daero, Yongsan-gu, Seoul',
    postId: 'post-1',
    image: { url: 'https://picsum.photos/seed/101/800/600', hint: 'modern building' },
  },
  {
    id: 'loc-2',
    name: 'Olive Young Myeongdong Flagship',
    category: 'Pharmacy',
    coordinates: { lat: 37.5630, lng: 126.9839 },
    address: '53 Myeongdong-gil, Jung-gu, Seoul',
    postId: 'post-2',
    cosmeticPrices: [
      { item: 'Mediheal Teatree Mask', price: 2000 },
      { item: 'COSRX Pimple Patch', price: 4500 },
    ],
    image: { url: 'https://picsum.photos/seed/102/800/600', hint: 'cosmetics store' },
  },
  {
    id: 'loc-3',
    name: 'Music Korea',
    category: 'K-Pop Haul',
    coordinates: { lat: 37.5645, lng: 126.9856 },
    address: '3F, 52, Myeongdong 8-gil, Jung-gu, Seoul',
    postId: 'post-3',
    image: { url: 'https://picsum.photos/seed/103/800/600', hint: 'music albums' },
  },
  {
    id: 'loc-4',
    name: 'Café Onion Anguk',
    category: 'Food/Cafe',
    coordinates: { lat: 37.5784, lng: 126.9836 },
    address: 'Gyedong-gil 5, Jongno-gu, Seoul',
    postId: 'post-4',
    image: { url: 'https://picsum.photos/seed/104/800/600', hint: 'cafe interior' },
  },
  {
    id: 'loc-5',
    name: 'Banobagi Dermatology',
    category: 'Dermatology',
    coordinates: { lat: 37.5186, lng: 127.0470 },
    address: '641-16 Yeoksam-dong, Gangnam-gu, Seoul',
    postId: 'post-5',
    image: { url: 'https://picsum.photos/seed/105/800/600', hint: 'clinic reception' },
  },
];

export const getLocations = async (): Promise<Location[]> => {
  return locations;
};

export const getLocationById = async (id: string): Promise<Location | undefined> => {
  return locations.find((loc) => loc.id === id);
};
