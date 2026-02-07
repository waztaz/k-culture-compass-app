'use client';
import { useEffect, useState, useRef, useMemo } from 'react';
import type {
  DocumentReference,
  DocumentSnapshot,
  FirestoreError,
} from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';

import { errorEmitter } from '../error-emitter';
import { FirestorePermissionError } from '../errors';

interface UseDocOptions {
  deps?: any[];
}

export function useDoc<T>(
  docRef: DocumentReference<T> | null,
  options?: UseDocOptions
) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<FirestoreError | null>(null);
  const [loading, setLoading] = useState(true);

  const docRefRef = useRef(docRef);
  const optionsRef = useRef(options);

  useEffect(() => {
    docRefRef.current = docRef;
    optionsRef.current = options;
  });
  
  const memoizedDocRef = useMemo(() => docRefRef.current, options?.deps || []);

  useEffect(() => {
    if (!memoizedDocRef) {
      setData(null);
      setLoading(false);
      return;
    }

    setLoading(true);

    const unsubscribe = onSnapshot(
      memoizedDocRef,
      (snapshot: DocumentSnapshot<T>) => {
        if (snapshot.exists()) {
          setData({ ...snapshot.data(), id: snapshot.id });
        } else {
          setData(null);
        }
        setError(null);
        setLoading(false);
      },
      (err: FirestoreError) => {
        const permissionError = new FirestorePermissionError({
          path: memoizedDocRef.path,
          operation: 'get',
        });
        errorEmitter.emit('permission-error', permissionError);
        setError(err);
        setData(null);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [memoizedDocRef]);

  return { data, error, loading };
}
