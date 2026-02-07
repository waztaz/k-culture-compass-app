'use client';
import { useEffect } from 'react';
import { errorEmitter } from '@/firebase/error-emitter';

export function FirebaseErrorListener() {
  useEffect(() => {
    const handleError = (error: Error) => {
      if (process.env.NODE_ENV === 'development') {
        // In development, we want to see the full error overlay.
        // We throw it as an uncaught exception to trigger Next.js's overlay.
        setTimeout(() => {
          throw error;
        });
      } else {
        // In production, you might want to log this to a service.
        console.error(error);
      }
    };

    errorEmitter.on('permission-error', handleError);

    return () => {
      errorEmitter.off('permission-error', handleError);
    };
  }, []);

  return null;
}
