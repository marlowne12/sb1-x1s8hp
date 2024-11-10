"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const team = {
  leadership: [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      bio: "With over 15 years of digital marketing experience, Sarah founded Digital Helper with a vision to help businesses thrive in the digital age.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      bio: "Michael brings 12 years of experience in technical SEO and web development, ensuring our clients' digital presence is built on solid foundations.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ],
  marketing: [
    {
      name: "Emily Rodriguez",
      role: "Head of SEO",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      bio: "Emily leads our SEO team with expertise in both technical and content-driven SEO strategies.",
      social: {
        linkedin: "#",
      },
    },
    {
      name: "David Kim",
      role: "PPC Manager",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
      bio: "David specializes in creating and optimizing high-performing paid advertising campaigns.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ],
  creative: [
    {
      name: "Lisa Thompson",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      bio: "Lisa brings creative vision to our clients' brands through compelling visual storytelling.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Marcus Foster",
      role: "Content Strategist",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
      bio: "Marcus crafts engaging content strategies that connect brands with their target audience.",
      social: {
        linkedin: "#",
      },
    },
  ],
};

export default function TeamPage() {
  const [selectedTab, setSelectedTab] = useState("leadership");

  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Team</h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Meet the experts behind Digital Helper's success. Our diverse team brings together years of experience in digital marketing.
          </p>
        </div>
      </div>

      <Tabs defaultValue="leadership" className="mt-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="leadership">Leadership</TabsTrigger>
          <TabsTrigger value="marketing">Marketing</TabsTrigger>
          <TabsTrigger value="creative">Creative</TabsTrigger>
        </TabsList>
        <TabsContent value="leadership" className="mt-8">
          <div className="grid gap-8 md:grid-cols-2">
            {team.leadership.map((member) => (
              <Card key={member.name}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                    <div className="relative h-32 w-32 flex-shrink-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="mt-4 md:mt-0">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-sm text-primary">{member.role}</p>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{member.bio}</p>
                      <div className="mt-4 flex space-x-4">
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-5 w-5" />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                            <Twitter className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="marketing" className="mt-8">
          <div className="grid gap-8 md:grid-cols-2">
            {team.marketing.map((member) => (
              <Card key={member.name}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                    <div className="relative h-32 w-32 flex-shrink-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="mt-4 md:mt-0">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-sm text-primary">{member.role}</p>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{member.bio}</p>
                      <div className="mt-4 flex space-x-4">
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-5 w-5" />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                            <Twitter className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="creative" className="mt-8">
          <div className="grid gap-8 md:grid-cols-2">
            {team.creative.map((member) => (
              <Card key={member.name}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                    <div className="relative h-32 w-32 flex-shrink-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="mt-4 md:mt-0">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-sm text-primary">{member.role}</p>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{member.bio}</p>
                      <div className="mt-4 flex space-x-4">
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-5 w-5" />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                            <Twitter className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 rounded-lg bg-primary/5 p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
        <p className="mb-6 text-gray-500 dark:text-gray-400">
          We're always looking for talented individuals to join our growing team.
        </p>
        <Link href="/about/careers">
          <Button size="lg">View Open Positions</Button>
        </Link>
      </div>
    </div>
  );
}