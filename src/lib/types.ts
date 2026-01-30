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

export interface Post {
  id: string;
  title: string;
  content: string;
  locationId: string;
  createdAt: string;
  image: {
    url: string;
    hint: string;
  };
}

export interface Review {
  id: string;
  locationId: string;
  author: string;
  rating: number;
  text: string;
  createdAt: string;
}

export interface NavItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}
