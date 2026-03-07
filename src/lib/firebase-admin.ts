import * as admin from 'firebase-admin';

if (!admin.apps.length) {
    try {
        const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

        // Ensure that the necessary variables are present before initializing
        if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_CLIENT_EMAIL && privateKey) {
            admin.initializeApp({
                credential: admin.credential.cert({
                    projectId: process.env.FIREBASE_PROJECT_ID,
                    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                    privateKey: privateKey,
                }),
            });
            console.log('Firebase Admin Initialized Successfully');
        } else {
            console.warn('Firebase Admin failed to initialize: Missing environment variables.');
        }
    } catch (error: any) {
        console.error('Firebase Admin Initialization Error:', error.stack);
    }
}

export const adminDb = admin.firestore();
