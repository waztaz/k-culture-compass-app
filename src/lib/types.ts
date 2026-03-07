import type { FieldValue, Timestamp } from 'firebase/firestore';

export type LocationCategory =
  | 'K-pop Holy Sites'
  | 'Tourist Place'
  | 'Dermatology'
  | 'Pharmacy'
  | 'Olive Young'
  | 'K-pop Goods'
  | 'Photo Booth'
  | 'Restaurant'
  | 'Cafe'
  | 'Hair Salon'
  | 'Dance Studio'
  | 'General Clinic';

export interface CosmeticPrice {
  item: string;
  price: number;
}

export interface Location {
  id: string;
  name: string;
  category: LocationCategory;
  coordinates: {
    lat: number;
    lng: number;
  };
  address: string;
  hours?: string;
  tags?: string[];
  postId?: string;
  actionLinks?: {
    title: string;
    url: string;
    type: 'call' | 'website' | 'reservation' | 'partner';
  }[];
  cosmeticPrices?: CosmeticPrice[];
  image: {
    url: string;
    hint: string;
  };
}

export type ArticleCategory = 'K-Pop News' | 'K-Life' | 'Guide' | 'Itinerary' | 'K-Beauty Trend' | 'Location Spotlight';

export type Language = 'kr' | 'en' | 'ch' | 'jp' | 'tw';

export interface TranslatedContent {
  kr?: string;
  en: string;
  ch: string;
  jp: string;
  tw?: string;
}

export interface Article {
  id: string;
  title: string | TranslatedContent;
  content: string | TranslatedContent;
  summary?: string | TranslatedContent;
  excerpt?: string | TranslatedContent;
  category: ArticleCategory;
  tags?: string[];
  mapLocations?: string[];
  partnerLinks?: {
    title: string;
    url: string;
    type: 'booking' | 'promo' | 'other';
  }[];
  locationId?: string;
  createdAt: Timestamp;
  image: {
    url: string;
    hint: string;
  };
}

export interface Review {
  id: string;
  locationId: string;
  userId: string;
  author: string;
  rating: number;
  text: string;
  createdAt: Timestamp;
}

export interface NewReview {
  locationId: string;
  userId: string;
  author: string;
  rating: number;
  text: string;
  createdAt: FieldValue;
}

export interface UserPost {
  id: string;
  userId: string;
  author: string;
  title: string;
  content: string;
  createdAt: Timestamp;
  updatedAt?: Timestamp;
}

export interface NewUserPost {
  userId: string;
  author: string;
  title: string;
  content: string;
  createdAt: FieldValue;
}

export interface Comment {
  id: string;
  articleId: string;
  userId: string;
  author: string;
  text: string;
  createdAt: Timestamp;
}

export interface NewComment {
  articleId: string;
  userId: string;
  author: string;
  text: string;
  createdAt: FieldValue;
}

export interface NavItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}
