import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Globe,
  Mail,
  MessageSquare,
  Search,
  Users,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO",
    description: "Boost your search engine rankings and visibility with our comprehensive SEO services.",
    link: "/services/seo",
    features: [
      "On-Page SEO",
      "Off-Page SEO",
      "Local SEO",
      "Technical SEO",
    ],
  },
  {
    icon: BarChart,
    title: "PPC Advertising",
    description: "Drive targeted traffic and increase conversions with strategic paid advertising campaigns.",
    link: "/services/ppc",
    features: [
      "Google Ads",
      "Bing Ads",
      "Social Media Ads",
      "Display Advertising",
    ],
  },
  {
    icon: Users,
    title: "Social Media Marketing",
    description: "Build and engage your audience across all major social media platforms.",
    link: "/services/social-media",
    features: [
      "Content Strategy",
      "Community Management",
      "Social Media Ads",
      "Analytics & Reporting",
    ],
  },
  {
    icon: MessageSquare,
    title: "Content Marketing",
    description: "Create compelling content that resonates with your target audience and drives results.",
    link: "/services/content",
    features: [
      "Content Strategy",
      "Blog Writing",
      "Video Production",
      "Graphic Design",
    ],
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Nurture leads and drive conversions with targeted email campaigns.",
    link: "/services/email",
    features: [
      "Campaign Management",
      "Email Automation",
      "List Management",
      "Performance Analytics",
    ],
  },
  {
    icon: Globe,
    title: "Analytics & Reporting",
    description: "Track and optimize your digital marketing performance with detailed analytics.",
    link: "/services/analytics",
    features: [
      "Website Analytics",
      "Conversion Tracking",
      "Custom Reporting",
      "Performance Optimization",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Comprehensive digital marketing solutions tailored to help your business grow and succeed online.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col">
            <CardHeader>
              <service.icon className="h-10 w-10 mb-2" />
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 mb-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={service.link}>
                <Button className="w-full">Learn More</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-6 text-gray-500 dark:text-gray-400">
          Contact us today to discuss how we can help you achieve your digital marketing goals.
        </p>
        <Link href="/contact">
          <Button size="lg">Schedule a Consultation</Button>
        </Link>
      </div>
    </div>
  );
}