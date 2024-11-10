import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingPlans = {
  seo: [
    {
      name: "Basic SEO",
      price: "999",
      description: "Perfect for small businesses starting their SEO journey",
      features: [
        "Keyword Research",
        "On-Page SEO Optimization",
        "Monthly Performance Reports",
        "Google Business Profile Optimization",
        "Basic Link Building",
      ],
    },
    {
      name: "Professional SEO",
      price: "1,999",
      description: "Comprehensive SEO solution for growing businesses",
      features: [
        "Everything in Basic",
        "Technical SEO Audit",
        "Content Strategy",
        "Advanced Link Building",
        "Competitor Analysis",
        "Local SEO Optimization",
      ],
      popular: true,
    },
    {
      name: "Enterprise SEO",
      price: "Custom",
      description: "Tailored SEO solutions for large organizations",
      features: [
        "Everything in Professional",
        "International SEO",
        "Advanced Technical SEO",
        "Custom Reporting Dashboard",
        "Dedicated SEO Manager",
        "Priority Support",
      ],
    },
  ],
  ppc: [
    {
      name: "Starter PPC",
      price: "799",
      description: "Essential PPC management for small campaigns",
      features: [
        "Account Setup",
        "Keyword Research",
        "Ad Copywriting",
        "Basic Campaign Optimization",
        "Monthly Reporting",
      ],
    },
    {
      name: "Growth PPC",
      price: "1,499",
      description: "Advanced PPC management for scaling businesses",
      features: [
        "Everything in Starter",
        "Advanced Campaign Optimization",
        "A/B Testing",
        "Conversion Tracking",
        "Remarketing Campaigns",
        "Landing Page Optimization",
      ],
      popular: true,
    },
    {
      name: "Enterprise PPC",
      price: "Custom",
      description: "Custom PPC solutions for large advertisers",
      features: [
        "Everything in Growth",
        "Cross-Channel PPC Management",
        "Custom Automation",
        "Advanced Analytics",
        "Dedicated Account Manager",
        "Strategic Consulting",
      ],
    },
  ],
};

export default function PricingPage() {
  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Transparent Pricing Plans
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Choose the perfect plan for your business needs. All plans include our award-winning support.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-8">SEO Packages</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.seo.map((plan) => (
            <Card key={plan.name} className={`flex flex-col ${plan.popular ? 'border-primary' : ''}`}>
              <CardHeader>
                {plan.popular && (
                  <div className="text-sm font-medium text-primary mb-2">Most Popular</div>
                )}
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-3xl font-bold mb-6">
                  ${plan.price}
                  {plan.price !== "Custom" && <span className="text-sm font-normal">/month</span>}
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full">{plan.price === "Custom" ? "Contact Us" : "Get Started"}</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">PPC Management Packages</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.ppc.map((plan) => (
            <Card key={plan.name} className={`flex flex-col ${plan.popular ? 'border-primary' : ''}`}>
              <CardHeader>
                {plan.popular && (
                  <div className="text-sm font-medium text-primary mb-2">Most Popular</div>
                )}
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-3xl font-bold mb-6">
                  ${plan.price}
                  {plan.price !== "Custom" && <span className="text-sm font-normal">/month</span>}
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full">{plan.price === "Custom" ? "Contact Us" : "Get Started"}</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
        <p className="mb-6 text-gray-500 dark:text-gray-400">
          Contact us to discuss a tailored package that meets your specific requirements.
        </p>
        <Link href="/contact">
          <Button size="lg">Schedule a Consultation</Button>
        </Link>
      </div>
    </div>
  );
}