'use client';

import { initializeFirebase } from '.';
import { FirebaseProvider } from './provider';
import { useEffect } from 'react';
import { seedDatabase } from '@/lib/seed-db';

export function FirebaseClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const firebase = initializeFirebase();

  useEffect(() => {
    const seed = async () => {
      // Prevent seeding multiple times per session
      if (sessionStorage.getItem('db_seeded_kcc')) {
        return;
      }
      try {
        await seedDatabase(firebase.firestore);
        sessionStorage.setItem('db_seeded_kcc', 'true');
        console.log('Database seeding check complete.');
      } catch (error) {
        console.error("Error seeding database:", error);
      }
    };
    if (firebase.firestore) {
        seed();
    }
  }, [firebase.firestore]);


  return <FirebaseProvider value={firebase}>{children}</FirebaseProvider>;
}
