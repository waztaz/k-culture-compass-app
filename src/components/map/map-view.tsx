'use client';

import { Map, AdvancedMarker } from '@vis.gl/react-google-maps';
import { useEffect, useState, useCallback } from 'react';
import { getLocations } from '@/lib/data';
import type { Location, LocationCategory } from '@/lib/types';
import { MapFilters } from './map-filters';
import { LocationInfoDialog } from './location-info-dialog';

const allCategories: LocationCategory[] = [
  'Pharmacy',
  'K-Pop Holy Lands',
  'K-Pop Haul',
  'Food/Cafe',
  'Dermatology',
];

export function MapView() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<Location[]>([]);
  const [selectedCategories, setSelectedCategories] =
    useState<LocationCategory[]>(allCategories);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const fetchLocations = async () => {
      const data = await getLocations();
      setLocations(data);
    };
    fetchLocations();
  }, []);

  useEffect(() => {
    setFilteredLocations(
      locations.filter((loc) => selectedCategories.includes(loc.category))
    );
  }, [locations, selectedCategories]);

  const handleCategoryChange = useCallback(
    (category: LocationCategory, checked: boolean) => {
      setSelectedCategories((prev) =>
        checked ? [...prev, category] : prev.filter((c) => c !== category)
      );
    },
    []
  );

  const handleMarkerClick = (location: Location) => {
    setSelectedLocation(location);
    setIsDialogOpen(true);
  };
  
  return (
    <div className="w-full h-[calc(100vh-112px)] relative">
      <Map
        style={{ width: '100%', height: '100%' }}
        defaultCenter={{ lat: 37.5665, lng: 126.978 }}
        defaultZoom={12}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        mapId={'a7f5a8c2f0f4b3a'}
      >
        {filteredLocations.map((location) => (
          <AdvancedMarker
            key={location.id}
            position={location.coordinates}
            onClick={() => handleMarkerClick(location)}
          >
             <div className="w-6 h-6 bg-primary rounded-full border-2 border-primary-foreground shadow-md animate-pulse"></div>
          </AdvancedMarker>
        ))}
      </Map>
      <MapFilters
        selectedCategories={selectedCategories}
        onCategoryChange={handleCategoryChange}
      />
      <LocationInfoDialog 
        location={selectedLocation}
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </div>
  );
}
