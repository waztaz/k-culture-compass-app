'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { LocationCategory } from '@/lib/types';
import {
  HeartPulse,
  Landmark,
  ShoppingBag,
  Coffee,
  Sparkles,
} from 'lucide-react';
import React from 'react';

const categoryDetails: Record<
  LocationCategory,
  { icon: React.ElementType; color: string }
> = {
  'Pharmacy': { icon: HeartPulse, color: 'text-red-500' },
  'K-Pop Holy Lands': { icon: Landmark, color: 'text-blue-500' },
  'K-Pop Haul': { icon: ShoppingBag, color: 'text-green-500' },
  'Food/Cafe': { icon: Coffee, color: 'text-yellow-500' },
  'Dermatology': { icon: Sparkles, color: 'text-purple-500' },
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
