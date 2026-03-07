'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import type { LocationCategory } from '@/lib/types';
import {
  Activity,
  Camera,
  Coffee,
  HeartPulse,
  Landmark,
  Map,
  Music,
  Scissors,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Utensils,
} from 'lucide-react';
import React from 'react';

const categoryDetails: Record<
  LocationCategory,
  { icon: React.ElementType; color: string }
> = {
  'K-pop Holy Sites': { icon: Landmark, color: 'text-blue-500' },
  'Tourist Place': { icon: Map, color: 'text-blue-500' },
  'Dermatology': { icon: Sparkles, color: 'text-purple-500' },
  'Pharmacy': { icon: HeartPulse, color: 'text-red-500' },
  'Olive Young': { icon: ShoppingBag, color: 'text-green-500' },
  'K-pop Goods': { icon: Music, color: 'text-pink-500' },
  'Photo Booth': { icon: Camera, color: 'text-purple-500' },
  'Restaurant': { icon: Utensils, color: 'text-orange-500' },
  'Cafe': { icon: Coffee, color: 'text-yellow-500' },
  'Hair Salon': { icon: Scissors, color: 'text-pink-500' },
  'Dance Studio': { icon: Activity, color: 'text-teal-500' },
  'General Clinic': { icon: Stethoscope, color: 'text-cyan-500' },
};

interface MapFiltersProps {
  selectedCategories: LocationCategory[];
  onCategoryChange: (category: LocationCategory, checked: boolean) => void;
}

export function MapFilters({
  selectedCategories,
  onCategoryChange,
}: MapFiltersProps) {
  return (
    <Card className="absolute top-4 left-4 z-10 w-64 shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline">Categories</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {Object.keys(categoryDetails).map((category) => {
          const cat = category as LocationCategory;
          const { icon: Icon, color } = categoryDetails[cat];
          return (
            <div key={cat} className="flex items-center space-x-3">
              <Checkbox
                id={cat}
                checked={selectedCategories.includes(cat)}
                onCheckedChange={(checked) =>
                  onCategoryChange(cat, checked as boolean)
                }
              />
              <Icon className={`h-5 w-5 ${color}`} />
              <Label htmlFor={cat} className="text-sm font-medium">
                {cat}
              </Label>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
