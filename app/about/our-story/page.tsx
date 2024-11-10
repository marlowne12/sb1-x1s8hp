import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function OurStoryPage() {
  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Story</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            The journey that made us the leading digital marketing agency in Richland, WA.
          </p>
        </div>
      </div>

      <div className="mt-16 space-y-16">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Our Beginning</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Founded in 2015, Digital Helper started with a simple mission: to help local businesses succeed in the digital age. What began as a small SEO consultancy has grown into a full-service digital marketing agency serving clients across the Pacific Northwest.
            </p>
          </div>
          <Card className="p-6">
            <div className="text-4xl font-bold text-primary">2015</div>
            <p className="mt-2 text-sm text-gray-500">Digital Helper was founded</p>
          </Card>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          <Card className="p-6 md:order-1">
            <div className="text-4xl font-bold text-primary">2018</div>
            <p className="mt-2 text-sm text-gray-500">Expanded services & team growth</p>
          </Card>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Growing Together</h2>
            <p className="text-gray-500 dark:text-gray-400">
              By 2018, we had expanded our services to include PPC, social media marketing, and content creation. Our team grew from 3 to 15 professionals, each bringing unique expertise to serve our growing client base.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Today & Beyond</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Today, Digital Helper is recognized as a leader in digital marketing, known for delivering innovative solutions and measurable results. We continue to evolve, embrace new technologies, and help businesses thrive in an increasingly digital world.
            </p>
          </div>
          <Card className="p-6">
            <div className="text-4xl font-bold text-primary">2024</div>
            <p className="mt-2 text-sm text-gray-500">Leading digital marketing innovation</p>
          </Card>
        </div>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <Link href="/about/team" className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-primary">
          <h3 className="text-xl font-bold">Meet Our Team</h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Get to know the experts behind our success.
          </p>
          <ArrowRight className="mt-4 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>

        <Link href="/case-studies" className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-primary">
          <h3 className="text-xl font-bold">Success Stories</h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Discover how we've helped businesses grow.
          </p>
          <ArrowRight className="mt-4 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h2>
        <p className="mb-6 text-gray-500 dark:text-gray-400">
          Partner with us to achieve your digital marketing goals.
        </p>
        <Link href="/contact">
          <Button size="lg">Get Started Today</Button>
        </Link>
      </div>
    </div>
  );
}