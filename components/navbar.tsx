"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const services = [
  {
    title: "SEO",
    href: "/services/seo",
    description: "Boost your search engine rankings and visibility",
  },
  {
    title: "PPC Advertising",
    href: "/services/ppc",
    description: "Drive targeted traffic with paid advertising campaigns",
  },
  {
    title: "Social Media Marketing",
    href: "/services/social-media",
    description: "Build and engage your social media presence",
  },
  {
    title: "Content Marketing",
    href: "/services/content",
    description: "Create compelling content that converts",
  },
  {
    title: "Email Marketing",
    href: "/services/email",
    description: "Nurture leads and drive conversions",
  },
  {
    title: "Analytics & Reporting",
    href: "/services/analytics",
    description: "Track and optimize your digital performance",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              Digital Helper
            </span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <Link href="/about">
                        <NavigationMenuLink className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                          <div className="mb-2 mt-4 text-lg font-medium">
                            About Digital Helper
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Learn about our mission, team, and commitment to digital excellence
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    <Link href="/about/our-story" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Our Story
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/about/team" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Our Team
                      </NavigationMenuLink>
                    </Link>
                    <Link href="/about/careers" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Careers
                      </NavigationMenuLink>
                    </Link>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                    {services.map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        legacyBehavior
                        passHref
                      >
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">
                            {service.title}
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {service.description}
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/case-studies" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Case Studies
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/resources" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Resources
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileNav />
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
          </div>
          <nav className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="mr-6"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <SunIcon className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle Theme</span>
            </Button>
            <Link href="/contact">
              <Button>Contact Us</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col space-y-4">
      <Link
        href="/"
        className="font-bold"
      >
        Digital Helper
      </Link>
      <div className="flex flex-col space-y-3">
        <Link href="/about" className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/about" ? "text-foreground" : "text-foreground/60"
        )}>
          About
        </Link>
        <Link href="/services" className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/services" ? "text-foreground" : "text-foreground/60"
        )}>
          Services
        </Link>
        <Link href="/case-studies" className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/case-studies" ? "text-foreground" : "text-foreground/60"
        )}>
          Case Studies
        </Link>
        <Link href="/resources" className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/resources" ? "text-foreground" : "text-foreground/60"
        )}>
          Resources
        </Link>
        <Link href="/pricing" className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/pricing" ? "text-foreground" : "text-foreground/60"
        )}>
          Pricing
        </Link>
        <Link href="/contact" className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/contact" ? "text-foreground" : "text-foreground/60"
        )}>
          Contact
        </Link>
      </div>
    </div>
  );
}