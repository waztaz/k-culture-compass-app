'use client';

import { useEffect, useState, useRef, useMemo } from 'react';
import type {
  CollectionReference,
  DocumentData,
  Query,
  QuerySnapshot,
  FirestoreError,
} from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';

import { errorEmitter } from '../error-emitter';
import { FirestorePermissionError } from '../errors';

interface UseCollectionOptions {
 deps?: any[];
}

export function useCollection<T>(
  query: Query<T> | CollectionReference<T> | null,
  options?: UseCollectionOptions
) {
  const [data, setData] = useState<T[] | null>(null);
  const [error, setError] = useState<FirestoreError | null>(null);
  const [loading, setLoading] = useState(true);

  const queryRef = useRef(query);
  const optionsRef = useRef(options);

  useEffect(() => {
    queryRef.current = query;
    optionsRef.current = options;
  });

  const memoizedQuery = useMemo(() => queryRef.current, options?.deps || []);

  useEffect(() => {
    if (!memoizedQuery) {
      setData(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    const unsubscribe = onSnapshot(
      memoizedQuery,
      (snapshot: QuerySnapshot<DocumentData>) => {
        const docs = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id } as T;
        });

        setData(docs);
        setError(null);
        setLoading(false);
      },
      (err: FirestoreError) => {
        const permissionError = new FirestorePermissionError({
          path: (memoizedQuery as CollectionReference).path,
          operation: 'list',
        });
        errorEmitter.emit('permission-error', permissionError);

        setError(err);
        setData(null);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [memoizedQuery]);

  return { data, error, loading };
}
