import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Briefcase, Clock, MapPin } from "lucide-react";

const openings = [
  {
    title: "Senior SEO Specialist",
    type: "Full-time",
    location: "Richland, WA (Hybrid)",
    department: "Marketing",
    description: "We're seeking an experienced SEO specialist to lead client campaigns and mentor junior team members.",
  },
  {
    title: "PPC Campaign Manager",
    type: "Full-time",
    location: "Remote",
    department: "Marketing",
    description: "Join our PPC team to manage and optimize paid advertising campaigns across multiple platforms.",
  },
  {
    title: "Content Writer",
    type: "Full-time",
    location: "Richland, WA (Hybrid)",
    department: "Creative",
    description: "Create compelling content for our clients across various industries and platforms.",
  },
  {
    title: "Social Media Manager",
    type: "Full-time",
    location: "Remote",
    department: "Marketing",
    description: "Develop and execute social media strategies for our diverse client base.",
  },
];

const benefits = [
  {
    title: "Health & Wellness",
    items: [
      "Comprehensive health insurance",
      "Dental and vision coverage",
      "Mental health support",
      "Gym membership reimbursement",
    ],
  },
  {
    title: "Work-Life Balance",
    items: [
      "Flexible working hours",
      "Remote work options",
      "Unlimited PTO",
      "Paid parental leave",
    ],
  },
  {
    title: "Growth & Development",
    items: [
      "Professional development budget",
      "Conference attendance",
      "Certification support",
      "Mentorship program",
    ],
  },
  {
    title: "Additional Perks",
    items: [
      "401(k) matching",
      "Performance bonuses",
      "Team events",
      "Home office stipend",
    ],
  },
];

export default function CareersPage() {
  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Team</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Build your career at Digital Helper and help shape the future of digital marketing.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Current Openings</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {openings.map((job) => (
            <Card key={job.title} className="group hover:border-primary">
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
                <CardDescription>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <div className="flex items-center text-sm">
                      <Briefcase className="mr-2 h-4 w-4" />
                      {job.type}
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="mr-2 h-4 w-4" />
                      {job.location}
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {job.description}
                </p>
                <Link href="/contact">
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Benefits & Perks</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((category) => (
            <Card key={category.title}>
              <CardHeader>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-lg bg-primary/5 p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Don't See the Right Fit?</h2>
        <p className="mb-6 text-gray-500 dark:text-gray-400">
          We're always interested in meeting talented individuals. Send us your resume for future opportunities.
        </p>
        <Link href="/contact">
          <Button size="lg">
            Submit Your Resume
          </Button>
        </Link>
      </div>
    </div>
  );
}