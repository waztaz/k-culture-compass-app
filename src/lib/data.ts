import { initializeFirebase } from '@/firebase';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { PlaceHolderImages } from './placeholder-images';
import type { Location } from './types';
const hybeInsightImage = PlaceHolderImages.find(p => p.id === 'hybe-insight')!;
const oliveYoungImage = PlaceHolderImages.find(p => p.id === 'olive-young-myeongdong')!;
const musicKoreaImage = PlaceHolderImages.find(p => p.id === 'music-korea')!;
const onionCafeImage = PlaceHolderImages.find(p => p.id === 'onion-cafe')!;
const banobagiImage = PlaceHolderImages.find(p => p.id === 'banobagi-dermatology')!;


const locations: Location[] = [
  {
    id: 'loc-1',
    name: 'HYBE INSIGHT',
    category: 'K-pop Holy Sites',
    coordinates: { lat: 37.5323, lng: 126.9911 },
    address: 'B1, 42, Hangang-daero, Yongsan-gu, Seoul',
    tags: ['BTS', 'Museum', 'Agency'],
    actionLinks: [
      { title: 'Book Tickets', url: 'https://hybeinsight.com/', type: 'reservation' }
    ],
    postId: 'post-1',
    image: { url: hybeInsightImage.imageUrl, hint: hybeInsightImage.imageHint },
  },
  {
    id: 'loc-2',
    name: 'Olive Young Myeongdong Flagship',
    category: 'Olive Young',
    coordinates: { lat: 37.5630, lng: 126.9839 },
    address: '53 Myeongdong-gil, Jung-gu, Seoul',
    tags: ['Beauty', 'Skincare', 'Makeup'],
    actionLinks: [
      { title: 'Website', url: 'https://global.oliveyoung.com/', type: 'website' }
    ],
    postId: 'post-2',
    cosmeticPrices: [
      { item: 'Mediheal Teatree Mask', price: 2000 },
      { item: 'COSRX Pimple Patch', price: 4500 },
    ],
    image: { url: oliveYoungImage.imageUrl, hint: oliveYoungImage.imageHint },
  },
  {
    id: 'loc-3',
    name: 'Music Korea',
    category: 'K-pop Goods',
    coordinates: { lat: 37.5645, lng: 126.9856 },
    address: '3F, 52, Myeongdong 8-gil, Jung-gu, Seoul',
    postId: 'post-3',
    image: { url: musicKoreaImage.imageUrl, hint: musicKoreaImage.imageHint },
  },
  {
    id: 'loc-4',
    name: 'Café Onion Anguk',
    category: 'Cafe',
    coordinates: { lat: 37.5784, lng: 126.9836 },
    address: 'Gyedong-gil 5, Jongno-gu, Seoul',
    tags: ['Hanok', 'Bakery', 'Coffee'],
    postId: 'post-4',
    image: { url: onionCafeImage.imageUrl, hint: onionCafeImage.imageHint },
  },
  {
    id: 'loc-5',
    name: 'Theme Dermatology',
    category: 'Dermatology',
    coordinates: { lat: 37.5186, lng: 127.0470 },
    address: '641-16 Yeoksam-dong, Gangnam-gu, Seoul',
    postId: 'post-5',
    actionLinks: [
      { title: 'Book Promo via Partner', url: 'https://partner.booking.com/theme', type: 'partner' },
      { title: 'Call Clinic', url: 'tel:+82-2-1234-5678', type: 'call' }
    ],
    image: { url: banobagiImage.imageUrl, hint: banobagiImage.imageHint },
  },
];

export const getLocations = async (): Promise<Location[]> => {
  const { firestore } = initializeFirebase();
  try {
    const locationsRef = collection(firestore, 'locations');
    const snapshot = await getDocs(locationsRef);
    return snapshot.docs.map(d => ({ id: d.id, ...d.data() } as Location));
  } catch (err) {
    console.error('Failed to fetch locations:', err);
    return [];
  }
};

export const getLocationById = async (id: string): Promise<Location | undefined> => {
  const { firestore } = initializeFirebase();
  try {
    const locationDoc = await getDoc(doc(firestore, 'locations', id));
    if (locationDoc.exists()) {
      return { id: locationDoc.id, ...locationDoc.data() } as Location;
    }
    return undefined;
  } catch (err) {
    console.error(`Failed to fetch location ${id}:`, err);
    return undefined;
  }
};
