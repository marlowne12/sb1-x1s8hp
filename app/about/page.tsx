import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            About Digital Helper
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Your trusted digital marketing partner in Richland, WA, helping businesses thrive in the digital age.
          </p>
        </div>
      </div>

      <div className="mt-16 grid gap-12 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="text-gray-500 dark:text-gray-400">
            At Digital Helper, we're committed to empowering businesses with innovative digital marketing solutions that drive real results. Our mission is to help organizations navigate the ever-evolving digital landscape and achieve sustainable growth.
          </p>
          <Link href="/about/our-story">
            <Button variant="outline" className="mt-4">
              Read Our Story <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Values</h2>
          <ul className="space-y-4 text-gray-500 dark:text-gray-400">
            <li>
              <strong className="text-foreground">Innovation:</strong> We stay ahead of digital trends to deliver cutting-edge solutions.
            </li>
            <li>
              <strong className="text-foreground">Transparency:</strong> We believe in open communication and measurable results.
            </li>
            <li>
              <strong className="text-foreground">Excellence:</strong> We strive for excellence in everything we do.
            </li>
            <li>
              <strong className="text-foreground">Partnership:</strong> We view our clients' success as our own.
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        <Link href="/about/our-story" className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-primary">
          <h3 className="text-xl font-bold">Our Story</h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Learn about our journey and what makes us different.
          </p>
          <ArrowRight className="mt-4 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>

        <Link href="/about/team" className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-primary">
          <h3 className="text-xl font-bold">Our Team</h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Meet the experts behind our success.
          </p>
          <ArrowRight className="mt-4 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>

        <Link href="/about/careers" className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-primary">
          <h3 className="text-xl font-bold">Careers</h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Join our team of digital marketing experts.
          </p>
          <ArrowRight className="mt-4 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="mt-16 rounded-lg bg-primary/5 p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
        <p className="mb-6 text-gray-500 dark:text-gray-400">
          Let's discuss how we can help you achieve your digital marketing goals.
        </p>
        <Link href="/contact">
          <Button size="lg">Schedule a Consultation</Button>
        </Link>
      </div>
    </div>
  );
}