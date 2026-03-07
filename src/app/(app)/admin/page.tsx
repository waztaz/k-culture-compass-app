'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth, useFirestore, useUser } from '@/firebase';
import { collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export default function AdminDashboard() {
    const { user, loading: authLoading } = useAuth();
    const { data: userData, loading: userLoading } = useUser(user?.uid || '');
    const firestore = useFirestore();

    const [isAdmin, setIsAdmin] = useState(false);

    // Data state
    const [locations, setLocations] = useState<any[]>([]);
    const [articles, setArticles] = useState<any[]>([]);
    const [userPosts, setUserPosts] = useState<any[]>([]);

    // Form state example for quickly adding a location
    const [newLocName, setNewLocName] = useState('');
    const [newLocCategory, setNewLocCategory] = useState('Food/Cafe');

    useEffect(() => {
        if (userData?.role === 'admin') {
            setIsAdmin(true);
            fetchData();
        }
    }, [userData]);

    const fetchData = async () => {
        try {
            const locsSnap = await getDocs(collection(firestore, 'locations'));
            setLocations(locsSnap.docs.map(d => ({ id: d.id, ...d.data() })));

            const artSnap = await getDocs(collection(firestore, 'articles'));
            setArticles(artSnap.docs.map(d => ({ id: d.id, ...d.data() })));

            const upSnap = await getDocs(collection(firestore, 'user-posts'));
            setUserPosts(upSnap.docs.map(d => ({ id: d.id, ...d.data() })));
        } catch (error) {
            console.error(error);
        }
    };

    const handleClaimAdmin = async () => {
        if (!user) return;
        try {
            await updateDoc(doc(firestore, 'users', user.uid), {
                role: 'admin'
            });
            alert('Success! You are now an Admin. Refreshing...');
            window.location.reload();
        } catch (error: any) {
            alert('Failed to claim admin: ' + error.message);
        }
    };

    const handleDelete = async (collectionName: string, id: string) => {
        if (!confirm('Are you sure you want to delete this?')) return;
        try {
            await deleteDoc(doc(firestore, collectionName, id));
            fetchData();
        } catch (error: any) {
            alert('Error deleting: ' + error.message);
        }
    };

    const handleAddLocation = async () => {
        if (!newLocName) return;
        const newId = 'loc-' + Date.now();
        try {
            await setDoc(doc(firestore, 'locations', newId), {
                id: newId,
                name: newLocName,
                category: newLocCategory,
                coordinates: { lat: 37.5665, lng: 126.9780 },
                address: 'New Address, Seoul',
                image: { url: 'https://via.placeholder.com/400' }
            });
            setNewLocName('');
            fetchData();
            alert('Location added securely!');
        } catch (error: any) {
            alert('Error adding location: ' + error.message);
        }
    };


    if (authLoading || userLoading) return <div className="p-8">Loading...</div>;

    if (!user) {
        return (
            <div className="p-8 max-w-xl mx-auto text-center mt-20">
                <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
                <p className="text-muted-foreground mb-6">You must be logged in to view the admin panel.</p>
                {/* Rely on their native sign in flow or just tell them to log in via the normal navbar */}
                <p>Please log in using the button in the top right corner.</p>
            </div>
        );
    }

    if (!isAdmin) {
        return (
            <div className="p-8 max-w-xl mx-auto text-center mt-20">
                <Card>
                    <CardHeader>
                        <CardTitle>Claim Admin Rights</CardTitle>
                        <CardDescription>
                            Because there is no env variable setup, click below to upgrade your personal account to an Admin. Protect this page once in production!
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button size="lg" className="w-full" onClick={handleClaimAdmin}>
                            Make Me Admin
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4 max-w-5xl py-8">
            <h1 className="text-3xl font-bold mb-8">Admin Control Panel</h1>

            <Tabs defaultValue="locations" className="w-full">
                <TabsList className="mb-4">
                    <TabsTrigger value="locations">Locations ({locations.length})</TabsTrigger>
                    <TabsTrigger value="articles">Articles ({articles.length})</TabsTrigger>
                    <TabsTrigger value="posts">User Posts ({userPosts.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="locations">
                    <Card className="mb-8">
                        <CardHeader>
                            <CardTitle>Quick Add Location</CardTitle>
                        </CardHeader>
                        <CardContent className="flex gap-4">
                            <Input
                                placeholder="Location Name"
                                value={newLocName}
                                onChange={(e) => setNewLocName(e.target.value)}
                                className="max-w-xs"
                            />
                            <select
                                className="border rounded-md px-3"
                                value={newLocCategory}
                                onChange={(e) => setNewLocCategory(e.target.value)}
                            >
                                <option>Food/Cafe</option>
                                <option>Dermatology</option>
                                <option>Pharmacy</option>
                                <option>K-Pop Holy Sites</option>
                            </select>
                            <Button onClick={handleAddLocation}>Create Location</Button>
                        </CardContent>
                    </Card>

                    <div className="space-y-4">
                        {locations.map(loc => (
                            <div key={loc.id} className="flex items-center justify-between p-4 border rounded-xl bg-white shadow-sm">
                                <div>
                                    <h3 className="font-bold">{loc.name}</h3>
                                    <p className="text-sm text-muted-foreground">{loc.category} • {loc.id}</p>
                                </div>
                                <Button variant="destructive" size="sm" onClick={() => handleDelete('locations', loc.id)}>Delete</Button>
                            </div>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="articles">
                    <p className="mb-4 text-muted-foreground">Articles can be managed here using your secure Admin rules.</p>
                    <div className="space-y-4">
                        {articles.map(art => (
                            <div key={art.id} className="flex items-center justify-between p-4 border rounded-xl bg-white shadow-sm">
                                <div>
                                    <h3 className="font-bold">{art.title?.en || art.title}</h3>
                                    <p className="text-sm text-muted-foreground">{art.category} • {art.id}</p>
                                </div>
                                <Button variant="destructive" size="sm" onClick={() => handleDelete('articles', art.id)}>Delete</Button>
                            </div>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="posts">
                    <p className="mb-4 text-muted-foreground">Admins have override permission to delete any user's post or comment.</p>
                    <div className="space-y-4">
                        {userPosts.map(post => (
                            <div key={post.id} className="flex items-center justify-between p-4 border rounded-xl bg-white shadow-sm">
                                <div>
                                    <h3 className="font-bold">{post.title}</h3>
                                    <p className="text-sm text-muted-foreground">By {post.author} • {post.content?.substring(0, 50)}...</p>
                                </div>
                                <Button variant="destructive" size="sm" onClick={() => handleDelete('user-posts', post.id)}>Delete</Button>
                            </div>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
