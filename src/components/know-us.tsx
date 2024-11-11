'use client';

import { ButtonTab } from '@/components/button-tab';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react';

export default function KnowUs() {
  const [currentTab, setCurrentTab] =
    useState('WhatWeDo');

  return (
    <section className="container mx-auto my-32 lg:space-y-16 space-y-8">
      <div className="border-l-8 border-highlight py-2 pl-10">
        <h1 className="lg:text-5xl text-4xl lg:font-bold font-medium">
          Take Time to Get to Know Us
        </h1>
      </div>
      <div className="grid grid-cols-3">
        <ButtonTab
          label="What We Do"
          value="WhatWeDo"
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        <ButtonTab
          label="Who We Do It For"
          value="WhoWeDoItFor"
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
        <ButtonTab
          label="How We Do It"
          value="HowWeDoIt"
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </div>
      {currentTab === 'WhatWeDo' && (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-10 order-2 lg:order-1">
            <h1 className="lg:text-4xl text-3xl font-bold">
              We Create a Safe, Secure Pathway to
              Your American Dream
            </h1>
            <p className="text-lg">
              As the longest standing EB-5
              regional center investment program
              in the United States, we’ve been
              providing reliable and safe EB-5
              qualifying real-estate investment
              opportunities for nearly 30 years.
            </p>
            <div className="px-4 py-6 bg-white space-y-4">
              <span className="text-primary font-bold">
                Q&A
              </span>
              <p className="text-2xl font-medium">
                What is the EB-5 Program?
              </p>
              <p className="text-lg">
                The EB-5 program provides a
                pathway to become lawful permanent
                residents by investing $800,000 or
                more in a qualifying project. The
                EB-5 program is not only a
                job-creation program for the
                United States, but an immigration
                opportunity for you and your
                family. Your investment will be
                used to finance a development
                project in the United States that
                will result in the creation of
                jobs for a minimum of 10 U.S.
                workers, often in rural or
                low-employment areas. So not only
                does your family benefit with a
                new life in the United States, but
                other American families and the
                U.S. economy benefit as well.
              </p>
              <Button variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="h-full order-1 lg:order-2 rounded-lg overflow-hidden">
            <Image
              src="https://amlife.us/wp-content/uploads/fly-images/1082/Family-593x0.jpg"
              alt="image"
              width={500}
              height={1000}
              className="w-full h-full object-cover"
              sizes="20"
            />
          </div>
        </div>
      )}
      {currentTab === 'WhoWeDoItFor' && (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="h-full rounded-lg overflow-hidden">
            <Image
              src="https://amlife.us/wp-content/uploads/fly-images/1069/AdobeStock_292648906-scaled-593x0.jpeg"
              alt="image"
              width={500}
              height={1000}
              className="w-full h-full object-cover"
              sizes="20"
            />
          </div>
          <div className="space-y-10">
            <h1 className="lg:text-4xl text-3xl font-bold">
              A Truly Global Company With
              Investors From Over 50 Countries
            </h1>
            <p className="text-lg">
              Wherever you’re from, we’re here to
              help you get where you want to go.
              We’re proud to have worked with
              families from all over the world.
              Our experienced, professional team
              understands your needs, and can help
              navigate your unique circumstances.
            </p>
            <div className="px-4 py-6 bg-white space-y-4">
              <span className="text-primary font-bold">
                Q&A
              </span>
              <p className="text-2xl font-medium">
                Can You Outline the EB-5 Process?
              </p>
              <p className="text-lg">
                Dive into the step-by-step process
                to permanent residency.
              </p>
              <Button variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      )}
      {currentTab === 'HowWeDoIt' && (
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-10 order-2 lg:order-1">
            <h1 className="lg:text-4xl text-3xl font-bold">
              Finding You the Right Investment
            </h1>
            <p className="text-lg">
              With a critically-acclaimed
              portfolio of over 45 completed
              equity projects, including
              prominent, internationally-branded
              hotels like Marriott, Hilton and
              Hyatt, we are experts at creating
              safe, low-risk investment
              opportunities that fit all of the
              complex EB-5 requirements.
            </p>
            <div className="px-4 py-6 bg-white space-y-4">
              <span className="text-primary font-bold">
                Q&A
              </span>
              <p className="text-2xl font-medium">
                What is a EB-5 Regional Center?
              </p>
              <p className="text-lg">
                An EB-5 regional center is a
                private organization
                pre-designated by the U.S.
                government for participation in
                the Immigrant Investor program. A
                regional center is authorized to
                pool investments from multiple
                EB-5 investors, and oversee its
                use in a project that creates the
                required U.S. employment. Founded
                in 1996, Be Americans is the
                oldest USCIS approved regional
                center, so you can feel confident
                that you’re getting a trustworthy
                and knowledgeable partner on your
                EB-5 journey.
              </p>
              <Button variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="h-full order-1 lg:order-2 rounded-lg overflow-hidden">
            <Image
              src="https://amlife.us/wp-content/uploads/fly-images/1111/Crane-WhoWeDoItFor-e1714521821155-593x0.png"
              alt="image"
              width={500}
              height={600}
              className="w-full h-full"
              sizes="20"
            />
          </div>
        </div>
      )}
    </section>
  );
}
