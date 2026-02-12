'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth, useFirestore } from '@/firebase';
import {
  isSignInWithEmailLink,
  signInWithEmailLink,
  getAdditionalUserInfo,
} from 'firebase/auth';
import { doc, setDoc, GeoPoint } from 'firebase/firestore';
import { Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

export default function FinishLoginPage() {
  const auth = useAuth();
  const firestore = useFirestore();
  const router = useRouter();
  const [status, setStatus] = useState('Verifying...');
  const [error, setError] = useState('');

  useEffect(() => {
    const finishLogin = async () => {
      // Wait for firebase to initialize
      if (!auth || !firestore) {
        return;
      }

      if (isSignInWithEmailLink(auth, window.location.href)) {
        let email = window.localStorage.getItem('emailForSignIn');
        if (!email) {
          // This can happen if the user opens the link on a different device.
          email = window.prompt('Please provide your email for confirmation');
        }

        if (!email) {
          setError('Email is required to complete sign-in.');
          setStatus('Failed');
          return;
        }

        try {
          const result = await signInWithEmailLink(
            auth,
            email,
            window.location.href
          );
          window.localStorage.removeItem('emailForSignIn');

          const additionalInfo = getAdditionalUserInfo(result);

          // If it's a new user, create their profile in Firestore
          if (additionalInfo?.isNewUser) {
            const user = result.user;
            const userRef = doc(firestore, 'users', user.uid);
            const displayName = user.email!.split('@')[0];

            const locationPromise = new Promise<GeolocationPosition | null>(
              (resolve) => {
                if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(
                    (position) => resolve(position),
                    () => resolve(null) // On error or denial, resolve with null
                  );
                } else {
                  resolve(null);
                }
              }
            );
            const location = await locationPromise;
            
            const userData: {
              displayName: string;
              email: string;
              location?: GeoPoint;
            } = {
              displayName: displayName,
              email: user.email!,
            };

            if (location) {
              userData.location = new GeoPoint(
                location.coords.latitude,
                location.coords.longitude
              );
            }

            setDoc(userRef, userData).catch((serverError) => {
              const permissionError = new FirestorePermissionError({
                path: userRef.path,
                operation: 'create',
                requestResourceData: userData,
              });
              errorEmitter.emit('permission-error', permissionError);
            });
          }

          setStatus('Success! Redirecting you now...');
          // Redirect to the map page after successful login
          router.push('/map');
        } catch (e: any) {
          setError(`Login failed: ${e.message}`);
          setStatus('Failed');
        }
      } else {
        // This is not a login link, redirect away.
        setStatus('Invalid link');
        setError(
          'This is not a valid login link. Please request a new one.'
        );
        setTimeout(() => router.push('/map'), 5000);
      }
    };

    finishLogin();
  }, [auth, firestore, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-4">
      <div className="max-w-md w-full text-center space-y-4">
        <h1 className="text-2xl font-headline font-bold">{status}</h1>
        {status === 'Verifying...' && (
          <div className="flex justify-center items-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}
        {error && (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        {status === 'Success! Redirecting you now...' && (
            <p className='text-muted-foreground'>You have been successfully logged in.</p>
        )}
      </div>
    </div>
  );
}
