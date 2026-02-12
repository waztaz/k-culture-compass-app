'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  sendSignInLinkToEmail,
  GoogleAuthProvider,
  signInWithPopup,
  getAdditionalUserInfo,
  type User,
} from 'firebase/auth';
import { useAuth, useFirestore } from '@/firebase';
import { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { doc, setDoc, GeoPoint } from 'firebase/firestore';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

const emailSchema = z.object({
  email: z.string().email('Invalid email address.'),
});

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const GoogleIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2">
    <title>Google</title>
    <path
      fill="currentColor"
      d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.05 1.05-2.36 1.67-4.66 1.67-3.86 0-6.99-3.14-6.99-7s3.13-7 6.99-7c2.08 0 3.49.83 4.3 1.62l2.34-2.34C18.48 2.36 15.88 1 12.48 1 7.01 1 3 4.95 3 10.12s4.01 9.12 9.48 9.12c2.82 0 4.93-1.04 6.56-2.62 1.73-1.67 2.24-4.02 2.24-6.12 0-.6-.05-1.19-.16-1.78Z"
    />
  </svg>
);


export function AuthDialog({ open, onOpenChange }: AuthDialogProps) {
  const auth = useAuth();
  const firestore = useFirestore();
  const [error, setError] = useState<string | null>(null);
  const [isLinkSent, setIsLinkSent] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: '' },
  });

  const handleSendLink = async (values: z.infer<typeof emailSchema>) => {
    setError(null);
    
    const actionCodeSettings = {
      url: `${window.location.origin}/finish-login`,
      handleCodeInApp: true,
    };

    try {
      await sendSignInLinkToEmail(auth, values.email, actionCodeSettings);
      // Save the email locally so we can retrieve it on the finish page
      window.localStorage.setItem('emailForSignIn', values.email);
      setIsLinkSent(true);
      toast({
        title: 'Check your email',
        description: 'A sign-in link has been sent to your email address.',
      });
    } catch (e: any) {
      setError(e.message);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: e.message || 'Could not send login link.',
      });
    }
  };

  const createNewUserProfile = async (user: User) => {
    if (!firestore) return;
    const userRef = doc(firestore, 'users', user.uid);
    const displayName = user.displayName || user.email!.split('@')[0];

    const locationPromise = new Promise<GeolocationPosition | null>(
      (resolve) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => resolve(position),
            () => resolve(null)
          );
        } else {
          resolve(null);
        }
      }
    );

    const location = await locationPromise;
    const userData: { displayName: string; email: string; location?: GeoPoint } = {
      displayName: displayName,
      email: user.email!,
    };

    if (location) {
      userData.location = new GeoPoint(location.coords.latitude, location.coords.longitude);
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

  const handleGoogleSignIn = async () => {
    if (!auth) return;

    setError(null);
    setIsSigningIn(true);
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const additionalInfo = getAdditionalUserInfo(result);
      
      if (additionalInfo?.isNewUser) {
        await createNewUserProfile(result.user);
      }
      
      onOpenChange(false);
      toast({
        title: 'Signed in successfully!',
      });
    } catch (e: any) {
      setError(e.message);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: e.message || 'Could not sign in with Google.',
      });
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleOpenChange = (isOpen: boolean) => {
    onOpenChange(isOpen);
    if (!isOpen) {
      // Reset state when dialog is closed
      setTimeout(() => {
        form.reset();
        setError(null);
        setIsLinkSent(false);
      }, 500);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login or Sign Up</DialogTitle>
          <DialogDescription>
            Use Google or a secure, password-free login link.
          </DialogDescription>
        </DialogHeader>
        
        {isLinkSent ? (
          <div className='py-8 text-center'>
            <Alert>
              <AlertTitle>Magic Link Sent!</AlertTitle>
              <AlertDescription>
                Please check your inbox for an email from us. Click the link inside to log in. You can close this window.
              </AlertDescription>
            </Alert>
          </div>
        ) : (
          <div className="space-y-4 pt-4">
             {error && <Alert variant="destructive" className="mb-4"><AlertDescription>{error}</AlertDescription></Alert>}
            <Button
              variant="outline"
              className="w-full"
              onClick={handleGoogleSignIn}
              disabled={isSigningIn || form.formState.isSubmitting}
            >
              {isSigningIn ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <GoogleIcon />
              )}
              Sign in with Google
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSendLink)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={form.formState.isSubmitting || isSigningIn}>
                  {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Send Login Link
                </Button>
              </form>
            </Form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
