'use client';
import { getApp, getApps, initializeApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { getStorage, type FirebaseStorage } from 'firebase/storage';

import { useUser } from './auth/use-user';
import { FirebaseClientProvider } from './client-provider';
import { firebaseConfig } from './config';
import { useCollection } from './firestore/use-collection';
import { useDoc } from './firestore/use-doc';
import {
  FirebaseProvider,
  useAuth,
  useFirebase,
  useFirebaseApp,
  useFirestore,
  useStorage,
} from './provider';

function initializeFirebase(): {
  firebaseApp: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
  storage: FirebaseStorage;
} {
  const firebaseApp = !getApps().length
    ? initializeApp(firebaseConfig)
    : getApp();
  const auth = getAuth(firebaseApp);
  const firestore = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);

  return { firebaseApp, auth, firestore, storage };
}

export {
  FirebaseClientProvider, FirebaseProvider, initializeFirebase, useAuth, useCollection,
  useDoc, useFirebase,
  useFirebaseApp,
  useFirestore, useStorage, useUser
};

