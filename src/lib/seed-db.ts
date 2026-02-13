import { collection, getDocs, limit, query, writeBatch, doc, type Firestore } from 'firebase/firestore';
import { seedArticles } from './articles-seed-data';

export async function seedDatabase(db: Firestore) {
  const articlesRef = collection(db, 'articles');
  const q = query(articlesRef, limit(1));
  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    console.log('No articles found in Firestore. Seeding database...');
    const batch = writeBatch(db);
    
    seedArticles.forEach((article) => {
      const { id, ...articleData } = article;
      const docRef = doc(db, 'articles', id);
      batch.set(docRef, articleData);
    });

    await batch.commit();
    console.log('Database seeded with articles.');
  } else {
    console.log('Articles collection is not empty. Skipping seed.');
  }
}
