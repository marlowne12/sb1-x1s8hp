import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Digital Helper</h3>
            <p className="text-sm text-muted-foreground">
              Transforming businesses through innovative digital marketing solutions in Richland, WA.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:underline">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">Services</Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:underline">Case Studies</Link>
              </li>
              <li>
                <Link href="/resources" className="hover:underline">Resources</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/seo" className="hover:underline">SEO</Link>
              </li>
              <li>
                <Link href="/services/ppc" className="hover:underline">PPC Advertising</Link>
              </li>
              <li>
                <Link href="/services/social-media" className="hover:underline">Social Media Marketing</Link>
              </li>
              <li>
                <Link href="/services/content" className="hover:underline">Content Marketing</Link>
              </li>
              <li>
                <Link href="/services/email" className="hover:underline">Email Marketing</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for digital marketing insights.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-[300px]"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-muted-foreground">
            © 2024 Digital Helper. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}