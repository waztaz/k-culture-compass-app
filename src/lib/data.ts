import type { Location, Post, Review, PostCategory } from './types';

const locations: Location[] = [
  {
    id: 'loc-1',
    name: 'HYBE INSIGHT',
    category: 'K-Pop Holy Lands',
    coordinates: { lat: 37.5323, lng: 126.9911 },
    address: 'B1, 42, Hangang-daero, Yongsan-gu, Seoul',
    postId: 'post-1',
    image: { url: 'https://picsum.photos/seed/101/800/600', hint: 'modern building' },
  },
  {
    id: 'loc-2',
    name: 'Olive Young Myeongdong Flagship',
    category: 'Pharmacy',
    coordinates: { lat: 37.5630, lng: 126.9839 },
    address: '53 Myeongdong-gil, Jung-gu, Seoul',
    postId: 'post-2',
    cosmeticPrices: [
      { item: 'Mediheal Teatree Mask', price: 2000 },
      { item: 'COSRX Pimple Patch', price: 4500 },
    ],
    image: { url: 'https://picsum.photos/seed/102/800/600', hint: 'cosmetics store' },
  },
  {
    id: 'loc-3',
    name: 'Music Korea',
    category: 'K-Pop Haul',
    coordinates: { lat: 37.5645, lng: 126.9856 },
    address: '3F, 52, Myeongdong 8-gil, Jung-gu, Seoul',
    postId: 'post-3',
    image: { url: 'https://picsum.photos/seed/103/800/600', hint: 'music albums' },
  },
  {
    id: 'loc-4',
    name: 'Café Onion Anguk',
    category: 'Food/Cafe',
    coordinates: { lat: 37.5784, lng: 126.9836 },
    address: 'Gyedong-gil 5, Jongno-gu, Seoul',
    postId: 'post-4',
    image: { url: 'https://picsum.photos/seed/104/800/600', hint: 'cafe interior' },
  },
  {
    id: 'loc-5',
    name: 'Banobagi Dermatology',
    category: 'Dermatology',
    coordinates: { lat: 37.5186, lng: 127.0470 },
    address: '641-16 Yeoksam-dong, Gangnam-gu, Seoul',
    postId: 'post-5',
    image: { url: 'https://picsum.photos/seed/105/800/600', hint: 'clinic reception' },
  },
];

const posts: Post[] = [
  {
    id: 'post-1',
    locationId: 'loc-1',
    title: 'A Pilgrim\'s Guide to HYBE INSIGHT',
    content: "HYBE INSIGHT is more than just a museum; it's a multi-sensory experience that dives deep into the music and artistry of HYBE's artists. From interactive exhibits to exclusive behind-the-scenes footage, prepare to spend at least a few hours here. The gift shop is a must-visit, but be prepared for long queues! It's a great spot for any K-Pop fan. The way they use technology to connect you with the music is just mind-blowing. I went there and it was so fun. lol. must go!!!",
    createdAt: '2024-07-20T10:00:00Z',
    image: { url: 'https://picsum.photos/seed/101/800/600', hint: 'modern building' },
    category: 'Location Spotlight',
  },
  {
    id: 'post-2',
    locationId: 'loc-2',
    title: 'Top 5 Buys at Olive Young Myeongdong',
    content: "The Olive Young flagship in Myeongdong is a K-Beauty paradise. It's massive and stocks an incredible range of products. Our top picks include the Mediheal Teatree Essential Mask for calming irritated skin and the COSRX Acne Pimple Master Patch for emergencies. Don't forget to check out the 'Tax Refund' kiosk on the second floor for some money back on your purchases!",
    createdAt: '2024-07-19T14:30:00Z',
    image: { url: 'https://picsum.photos/seed/102/800/600', hint: 'cosmetics store' },
    category: 'Location Spotlight',
  },
  {
    id: 'post-3',
    locationId: 'loc-3',
    title: 'Finding Rare K-Pop Albums at Music Korea',
    content: "Music Korea is a legendary spot for K-Pop fans. While it's smaller than some of the newer mega-stores, it has a fantastic selection of both new releases and back-catalog albums. The staff are knowledgeable and can help you find what you're looking for. It's also a great place to pick up official merchandise and concert goods.",
    createdAt: '2024-07-18T11:00:00Z',
    image: { url: 'https://picsum.photos/seed/103/800/600', hint: 'music albums' },
    category: 'Location Spotlight',
  },
  {
    id: 'post-4',
    locationId: 'loc-4',
    title: 'The Viral Pastries of Café Onion Anguk',
    content: "Set in a traditional Hanok, Café Onion Anguk offers a unique blend of old and new. Their most famous item is the 'Pandoro', a mountain of powdered sugar-covered bread that is as delicious as it is Instagrammable. The coffee is excellent too. Be prepared to wait for a table, especially on weekends, as this spot is incredibly popular.",
    createdAt: '2024-07-17T09:20:00Z',
    image: { url: 'https://picsum.photos/seed/104/800/600', hint: 'cafe interior' },
    category: 'Location Spotlight',
  },
  {
    id: 'post-5',
    locationId: 'loc-5',
    title: 'A Guide to Popular Treatments at Banobagi',
    content: "Banobagi is one of the most well-known dermatology clinics in Seoul, popular with both locals and international visitors. They offer a wide range of treatments, from simple facials and laser toning to more intensive procedures. Their 'Aqua Peel' is a great introductory treatment for deep cleansing and hydration. Consultations are available in multiple languages, making it very accessible for tourists.",
    createdAt: '2024-07-16T16:45:00Z',
    image: { url: 'https://picsum.photos/seed/105/800/600', hint: 'clinic reception' },
    category: 'Location Spotlight',
  },
    // K-POP NEWS POSTS
  {
    id: 'news-1',
    title: 'NewJeans Announces Surprise Summer Comeback',
    content: 'The globally acclaimed group NewJeans is set to release a new mini-album in August. Fans are buzzing with excitement after a series of cryptic teasers were posted on their social media channels. The new album is rumored to explore a retro-futuristic concept, a departure from their previous releases. The title track is produced by their long-time collaborator, promising another chart-topping hit.',
    image: { url: 'https://picsum.photos/seed/106/600/400', hint: 'kpop concert' },
    createdAt: '2024-07-22T10:00:00Z',
    category: 'K-Pop News',
  },
  {
    id: 'news-2',
    title: 'Stray Kids To Embark on World Tour "DOMINATE"',
    content: 'Stray Kids has officially announced their much-anticipated world tour, "DOMINATE". Starting in Seoul, the tour will cover 15 countries across Asia, North America, and Europe. The group promises a high-energy show with spectacular performances and a setlist that includes their biggest hits and new, unreleased tracks. Tickets are expected to go on sale next month, with pre-sale access for official fan club members.',
    image: { url: 'https://picsum.photos/seed/107/600/400', hint: 'pop star' },
    createdAt: '2024-07-21T15:00:00Z',
    category: 'K-Pop News',
  },
  // K-BEAUTY TRENDS POSTS
  {
    id: 'trend-1',
    title: 'The "Glass Skin" Evolution: Introducing "Glazed Donut" Skin',
    content: 'Just when you thought "glass skin" was the pinnacle of dewy complexions, the K-Beauty world has introduced a new obsession: "glazed donut" skin. This trend takes the glow factor to the next level, focusing on intense hydration and layering occlusive products to achieve a radiant, almost wet look. The key is to use a nourishing routine that includes hydrating toners, essences, serums, and a rich moisturizer or face oil to seal everything in. Think luminous, plump, and irresistibly glossy.',
    image: { url: 'https://picsum.photos/seed/108/600/400', hint: 'beauty products' },
    createdAt: '2024-07-22T11:00:00Z',
    category: 'K-Beauty Trend',
  },
  {
    id: 'trend-2',
    title: 'Sunscreen Sticks Are The Must-Have Item of 2024',
    content: 'Sun protection has never been more convenient. Sunscreen sticks are taking the K-Beauty market by storm, and for good reason. These solid sunscreens are compact, travel-friendly, and make reapplication a breeze—no more messy hands! They glide on smoothly over makeup without disrupting it, making them perfect for on-the-go touch-ups. Formulations have also improved, with many offering a matte or satin finish, so you can stay protected without the greasy feeling.',
    image: { url: 'https://picsum.photos/seed/109/600/400', hint: 'skincare model' },
    createdAt: '2024-07-21T12:00:00Z',
    category: 'K-Beauty Trend',
  },
  {
    id: 'trend-3',
    title: 'Fermented Ingredients: The Ancient Secret to Healthy Skin',
    content: 'Fermentation isn\'t just for kimchi and kombucha. In K-Beauty, fermented ingredients like rice water, soybeans, and galactomyces are superstar ingredients. The fermentation process breaks down molecules, making them smaller and easier for the skin to absorb. This enhances their potency, leading to brighter, firmer, and more hydrated skin. Look for essences and serums rich in these fermented powerhouses to supercharge your skincare routine.',
    image: { url: 'https://picsum.photos/seed/110/600/400', hint: 'skincare ingredients' },
    createdAt: '2024-07-20T14:00:00Z',
    category: 'K-Beauty Trend',
  },
  {
    id: 'trend-4',
    title: 'The Rise of Vegan & Cruelty-Free K-Beauty',
    content: 'As consumers become more conscious of their choices, the demand for ethical beauty products is soaring. K-Beauty brands are responding in a big way, with a growing number of vegan and cruelty-free certifications. These brands prove that you don\'t have to compromise on efficacy to be kind to animals and the planet. From gentle cleansers to vibrant makeup, you can now build a complete, high-performance K-Beauty routine that aligns with your values.',
    image: { url: 'https://picsum.photos/seed/111/600/400', hint: 'natural cosmetics' },
    createdAt: '2024-07-19T16:00:00Z',
    category: 'K-Beauty Trend',
  },
];


const reviews: Review[] = [
  { id: 'rev-1', locationId: 'loc-1', author: 'ARMY_Fan123', rating: 5, text: 'Amazing experience! A must-visit for any HYBE group fan.', createdAt: '2024-07-21T12:00:00Z' },
  { id: 'rev-2', locationId: 'loc-1', author: 'SeoulExplorer', rating: 4, text: 'Really cool exhibits, but the gift shop line was too long.', createdAt: '2024-07-21T13:00:00Z' },
  { id: 'rev-3', locationId: 'loc-2', author: 'BeautyGuru', rating: 5, text: 'Heaven for skincare lovers! I spent a fortune here.', createdAt: '2024-07-20T18:00:00Z' },
  { id: 'rev-4', locationId: 'loc-4', author: 'Foodie_Kim', rating: 4, text: 'The Pandoro was delicious, but the place is so crowded.', createdAt: '2024-07-19T10:00:00Z' },
  { id: 'rev-5', locationId: 'loc-5', author: 'Grace L.', rating: 5, text: 'Very professional and clean clinic. The staff were helpful and spoke English well.', createdAt: '2024-07-18T15:00:00Z' },
  { id: 'rev-6', locationId: 'loc-1', author: 'KpopLover', rating: 3, text: 'it was okay. kinda boring. gift shop expensive.', createdAt: '2024-07-22T09:00:00Z' },
];

export const getLocations = async (): Promise<Location[]> => {
  return locations;
};

export const getLocationById = async (id: string): Promise<Location | undefined> => {
  return locations.find((loc) => loc.id === id);
};

export const getPosts = async (): Promise<Post[]> => {
  return posts;
};

export const getPostById = async (id: string): Promise<Post | undefined> => {
  return posts.find((post) => post.id === id);
};

export const getReviewsByLocationId = async (locationId: string): Promise<Review[]> => {
  return reviews.filter((review) => review.locationId === locationId);
};

export const getPostsByCategory = async (category: PostCategory) => {
    return posts.filter(post => post.category === category);
}

// Functions for News and Trends pages
export const getNewsFeed = async () => {
  const newsPosts = await getPostsByCategory('K-Pop News');
    return newsPosts.map(post => ({
        id: post.id,
        title: post.title,
        excerpt: post.content.substring(0, 100) + '...',
        image: post.image
    }))
};

export const getTrendsFeed = async () => {
  const trendsPosts = await getPostsByCategory('K-Beauty Trend');
    return trendsPosts.map(post => ({
        id: post.id,
        title: post.title,
        excerpt: post.content.substring(0, 100) + '...',
        image: post.image
    }))
};
