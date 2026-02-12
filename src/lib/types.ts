import type { Timestamp, FieldValue } from 'firebase/firestore';

export type LocationCategory =
  | 'Pharmacy'
  | 'K-Pop Holy Lands'
  | 'K-Pop Haul'
  | 'Food/Cafe'
  | 'Dermatology';

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
  postId?: string;
  cosmeticPrices?: CosmeticPrice[];
  image: {
    url: string;
    hint: string;
  };
}

export type ArticleCategory = 'K-Pop News' | 'K-Beauty Trend' | 'Location Spotlight';

export type Language = 'en' | 'ch' | 'jp' | 'tw';

export interface TranslatedContent {
  en: string;
  ch: string;
  jp: string;
  tw: string;
}

export interface Article {
  id: string;
  title: TranslatedContent;
  content: TranslatedContent;
  excerpt: TranslatedContent;
  category: ArticleCategory;
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
