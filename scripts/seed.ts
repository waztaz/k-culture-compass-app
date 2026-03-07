import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc, Timestamp } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDxYrjGP3fFV4WvjRNsc5TXsZbTj_-5eU4",
    authDomain: "studio-7809189829-1bbe1.firebaseapp.com",
    projectId: "studio-7809189829-1bbe1",
    storageBucket: "studio-7809189829-1bbe1.appspot.com",
    messagingSenderId: "764116991788",
    appId: "1:764116991788:web:f60e68d5cb14c93a4cf689",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const locations = [
    {
        id: 'loc-1',
        name: 'HYBE INSIGHT',
        category: 'K-pop Holy Sites',
        coordinates: { lat: 37.5323, lng: 126.9911 },
        address: 'B1, 42, Hangang-daero, Yongsan-gu, Seoul',
        tags: ['BTS', 'Museum', 'Agency'],
        actionLinks: [
            { title: 'Book Tickets', url: 'https://hybeinsight.com/', type: 'reservation' }
        ],
        postId: 'post-1',
        image: { url: 'https://storage.googleapis.com/waztaz-storage/kculture/hybe.jpg', hint: 'hybe insight seoul' },
    },
    {
        id: 'loc-2',
        name: 'Olive Young Myeongdong Flagship',
        category: 'Olive Young',
        coordinates: { lat: 37.5630, lng: 126.9839 },
        address: '53 Myeongdong-gil, Jung-gu, Seoul',
        tags: ['Beauty', 'Skincare', 'Makeup'],
        actionLinks: [
            { title: 'Website', url: 'https://global.oliveyoung.com/', type: 'website' }
        ],
        postId: 'post-2',
        cosmeticPrices: [
            { item: 'Mediheal Teatree Mask', price: 2000 },
            { item: 'COSRX Pimple Patch', price: 4500 },
        ],
        image: { url: 'https://storage.googleapis.com/waztaz-storage/kculture/olive-young.jpg', hint: 'olive young myeongdong store front' },
    },
    {
        id: 'loc-3',
        name: 'Music Korea',
        category: 'K-pop Goods',
        coordinates: { lat: 37.5645, lng: 126.9856 },
        address: '3F, 52, Myeongdong 8-gil, Jung-gu, Seoul',
        postId: 'post-3',
        image: { url: 'https://storage.googleapis.com/waztaz-storage/kculture/music-korea.jpg', hint: 'music korea store interior' },
    },
    {
        id: 'loc-4',
        name: 'Café Onion Anguk',
        category: 'Cafe',
        coordinates: { lat: 37.5784, lng: 126.9836 },
        address: 'Gyedong-gil 5, Jongno-gu, Seoul',
        tags: ['Hanok', 'Bakery', 'Coffee'],
        postId: 'post-4',
        image: { url: 'https://storage.googleapis.com/waztaz-storage/kculture/onion.jpg', hint: 'cafe onion anguk hanok style' },
    },
    {
        id: 'loc-5',
        name: 'Theme Dermatology',
        category: 'Dermatology',
        coordinates: { lat: 37.5186, lng: 127.0470 },
        address: '641-16 Yeoksam-dong, Gangnam-gu, Seoul',
        postId: 'post-5',
        actionLinks: [
            { title: 'Book Promo via Partner', url: 'https://partner.booking.com/theme', type: 'partner' },
            { title: 'Call Clinic', url: 'tel:+82-2-1234-5678', type: 'call' }
        ],
        image: { url: 'https://storage.googleapis.com/waztaz-storage/kculture/dermatology.jpg', hint: 'luxury korean dermatology clinic interior' },
    },
];

const articles = [
    {
        id: 'seed-kpop-1',
        category: 'K-Pop News',
        title: { en: 'Global K-Pop Sensation "Starlight" Announces World Tour' },
        excerpt: { en: 'The chart-topping group will visit 20 cities across North America, Europe, and Asia.' },
        content: { en: 'In a move that has sent ripples of excitement across the globe, K-Pop superstars "Starlight" have officially announced their much-anticipated world tour.' },
        image: { url: 'https://storage.googleapis.com/waztaz-storage/kculture/concert.jpg', hint: 'kpop concert stadium' },
        createdAt: Timestamp.fromDate(new Date('2024-07-29T10:00:00Z')),
    },
    {
        id: 'seed-kbeauty-1',
        category: 'K-Beauty Trend',
        title: { en: 'The "Glass Skin" Phenomenon: Achieving a Flawless, Dewy Complexion' },
        excerpt: { en: 'Dive into the secrets behind the ultimate K-Beauty goal.' },
        content: { en: 'The quest for "glass skin" continues to dominate the beauty world. This K-Beauty trend refers to achieving a complexion that is exceptionally smooth.' },
        image: { url: 'https://storage.googleapis.com/waztaz-storage/kculture/glass-skin.jpg', hint: 'korean model with clear dewy skin' },
        mapLocations: ['loc-5'],
        partnerLinks: [
            {
                title: 'Book a Glass Skin Treatment at Theme Derm',
                url: 'https://partner.booking.com/theme-glass-skin?ref=kpopapp',
                type: 'booking'
            }
        ],
        createdAt: Timestamp.fromDate(new Date('2024-07-27T12:00:00Z')),
    }
];

async function seed() {
    console.log("Seeding locations...");
    for (const loc of locations) {
        try {
            await setDoc(doc(db, "locations", loc.id), loc);
            console.log(`Inserted location: ${loc.id}`);
        } catch (e: any) {
            console.error(`Failed to insert ${loc.id}:`, e.message);
        }
    }

    console.log("Seeding articles...");
    for (const article of articles) {
        try {
            await setDoc(doc(db, "articles", article.id), article);
            console.log(`Inserted article: ${article.id}`);
        } catch (e: any) {
            console.error(`Failed to insert ${article.id}:`, e.message);
        }
    }
    console.log("Seeding completed!");
    process.exit(0);
}

seed();
