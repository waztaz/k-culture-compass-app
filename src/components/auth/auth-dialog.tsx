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
import { sendSignInLinkToEmail } from 'firebase/auth';
import { useAuth } from '@/firebase';
import { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const emailSchema = z.object({
  email: z.string().email('Invalid email address.'),
});

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AuthDialog({ open, onOpenChange }: AuthDialogProps) {
  const auth = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [isLinkSent, setIsLinkSent] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: '' },
  });

  const handleSendLink = async (values: z.infer<typeof emailSchema>) => {
    setError(null);
    setIsLinkSent(false);
    
    // Construct the URL for the finish login page
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
            Enter your email to receive a secure, password-free login link.
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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSendLink)} className="space-y-4 pt-4">
              {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}
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
              <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Send Login Link
              </Button>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}
