'use client';

import { APIProvider } from '@vis.gl/react-google-maps';
import React from 'react';

export function MapProvider({ children }: { children: React.ReactNode }) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-background text-foreground">
        <div className="text-center p-8 border rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-destructive mb-4">
            Google Maps API Key is missing
          </h1>
          <p>Please add your Google Maps API key to your environment variables.</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Create a <code className="p-1 bg-muted rounded-sm">.env.local</code> file and add:
            <br />
            <code className="p-1 bg-muted rounded-sm mt-1 inline-block">
              NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=&quot;YOUR_API_KEY&quot;
            </code>
          </p>
        </div>
      </div>
    );
  }

  return <APIProvider apiKey={apiKey}>{children}</APIProvider>;
}
