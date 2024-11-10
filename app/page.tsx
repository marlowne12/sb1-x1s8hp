import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, BarChart, Globe, Mail, MessageSquare, Search, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-background py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Transform Your Digital Presence
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Expert digital marketing solutions tailored to your business needs. Based in Richland, WA, serving clients worldwide.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/contact">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="outline" size="lg">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Comprehensive digital marketing solutions to help your business grow
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card>
              <CardHeader>
                <Search className="h-10 w-10 mb-2" />
                <CardTitle>SEO</CardTitle>
                <CardDescription>
                  Boost your search engine rankings and visibility
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/services/seo" className="inline-flex items-center text-sm font-medium text-primary">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <BarChart className="h-10 w-10 mb-2" />
                <CardTitle>PPC Advertising</CardTitle>
                <CardDescription>
                  Drive targeted traffic with paid advertising
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/services/ppc" className="inline-flex items-center text-sm font-medium text-primary">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 mb-2" />
                <CardTitle>Social Media</CardTitle>
                <CardDescription>
                  Engage your audience across platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/services/social-media" className="inline-flex items-center text-sm font-medium text-primary">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <MessageSquare className="h-10 w-10 mb-2" />
                <CardTitle>Content Marketing</CardTitle>
                <CardDescription>
                  Create compelling content that converts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/services/content" className="inline-flex items-center text-sm font-medium text-primary">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Mail className="h-10 w-10 mb-2" />
                <CardTitle>Email Marketing</CardTitle>
                <CardDescription>
                  Nurture leads and drive conversions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/services/email" className="inline-flex items-center text-sm font-medium text-primary">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Globe className="h-10 w-10 mb-2" />
                <CardTitle>Analytics</CardTitle>
                <CardDescription>
                  Track and optimize performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/services/analytics" className="inline-flex items-center text-sm font-medium text-primary">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Grow Your Business?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Let's discuss how we can help you achieve your digital marketing goals.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/contact">
                <Button size="lg">Schedule a Consultation</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}