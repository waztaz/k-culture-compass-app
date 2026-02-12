'use client';

import { useAuth, useUser } from '@/firebase';
import { signOut } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState } from 'react';
import { AuthDialog } from './auth-dialog';
import { LogIn, LogOut } from 'lucide-react';

export function UserNav() {
  const user = useUser();
  const auth = useAuth();
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
  };

  if (user) {
    const fallback = user.displayName
      ? user.displayName.charAt(0).toUpperCase()
      : user.email!.charAt(0).toUpperCase();

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.photoURL || undefined} alt={user.displayName || user.email!} />
              <AvatarFallback>{fallback}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {user.displayName}
              </p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <>
      <Button onClick={() => setIsAuthDialogOpen(true)}>
        <LogIn className="mr-2 h-4 w-4" />
        Login
      </Button>
      <AuthDialog open={isAuthDialogOpen} onOpenChange={setIsAuthDialogOpen} />
    </>
  );
}
