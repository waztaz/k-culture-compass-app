import { adminDb } from '@/lib/firebase-admin';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const authHeader = req.headers.get('authorization');
        // Define your secret API Key in .env.local
        const expectedToken = process.env.ADMIN_API_KEY;

        if (!expectedToken) {
            return NextResponse.json({ error: 'Server misconfiguration: No ADMIN_API_KEY found.' }, { status: 500 });
        }

        // Validate basic Bearer Auth
        if (!authHeader || !authHeader.startsWith('Bearer ') || authHeader.split(' ')[1] !== expectedToken) {
            return NextResponse.json({ error: 'Unauthorized. Invalid API Key.' }, { status: 401 });
        }

        const body = await req.json();
        const { type, data } = body;

        // Ensure data is valid
        if (!type || !['location', 'article'].includes(type)) {
            return NextResponse.json({ error: 'Invalid type. Use "location" or "article".' }, { status: 400 });
        }
        if (!data || !data.id) {
            return NextResponse.json({ error: 'Payload must include an "id" field inside data.' }, { status: 400 });
        }

        const collectionName = type === 'location' ? 'locations' : 'articles';

        // Add server timestamp if it's a new article
        if (type === 'article' && !data.createdAt) {
            data.createdAt = new Date(); // Firebase Admin SDK accepts native JS dates 
        }

        // Use the Admin SDK to bypass all Firestore Client rules securely
        await adminDb.collection(collectionName).doc(data.id).set(data, { merge: true });

        return NextResponse.json({
            success: true,
            message: `Successfully set ${type} with ID ${data.id}`,
            data: data
        }, { status: 201 });

    } catch (e: any) {
        console.error('Admin API Error:', e.stack);
        return NextResponse.json({ error: 'Internal Server Error', details: e.message }, { status: 500 });
    }
}
