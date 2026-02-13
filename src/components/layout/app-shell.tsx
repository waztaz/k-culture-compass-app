'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Map as MapIcon,
  Menu,
  Film,
  PlusCircle,
  Sparkles,
  Users,
  Home,
  Plane,
} from 'lucide-react';
import type { NavItem } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Logo } from '@/components/icons/logo';
import { LanguageSwitcher } from './language-switcher';
import { UserNav } from '@/components/auth/user-nav';
import { useUser } from '@/firebase';
import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const navItems: NavItem[] = [
  { href: '/home', label: 'Home', icon: Home },
  { href: '/map', label: 'Map', icon: MapIcon },
  { href: '/entertainment', label: 'Entertainment', icon: Film },
  { href: '/beauty', label: 'Beauty', icon: Sparkles },
  { href: '/travel', label: 'Travel', icon: Plane },
  { href: '/community', label: 'Community', icon: Users },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-background">
          {children}
        </main>
      </div>
    </div>
  );
}

function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Logo className="h-8 w-8" />
            <span className="font-headline text-lg">K-Culture Compass</span>
          </Link>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {navItems.map((item) => {
              const isActive =
                item.href === '/home'
                  ? pathname === item.href
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                    { 'bg-muted text-primary': isActive }
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}

function MobileNav() {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="shrink-0 md:hidden"
        disabled
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    );
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-left">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Logo className="h-8 w-8" />
              <span className="font-headline text-lg">K-Culture Compass</span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <nav className="grid gap-2 text-lg font-medium">
          {navItems.map((item) => {
            const isActive =
              item.href === '/home'
                ? pathname === item.href
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  'mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground',
                  { 'bg-muted text-foreground': isActive }
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

function Header() {
  const user = useUser();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <MobileNav />
      <div className="w-full flex-1">
        {/* Can add breadcrumbs or search here */}
      </div>
      <div className="flex items-center gap-4">
        {isClient ? (
          <>
            {user && (
              <Button asChild size="sm">
                <Link href="/create-post">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Create Post
                </Link>
              </Button>
            )}
            <LanguageSwitcher />
            <UserNav />
          </>
        ) : (
          <>
            <Skeleton className="h-10 w-10" />
            <Skeleton className="h-10 w-20" />
          </>
        )}
      </div>
    </header>
  );
}
