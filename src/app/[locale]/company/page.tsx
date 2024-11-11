'use client';

import Image from 'next/image';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';

import 'swiper/css';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useState } from 'react';
import Hero from '@/components/hero';
import FaqContact from '@/components/faq-contact';
import WhySection from '@/components/why';
import { teams } from '@/constants/teams';
import MemberCard from '@/components/member-card';
import Link from 'next/link';
import UpdatedInfo from '@/components/updated-info';

export default function CompanyPage() {
  const [
    currentActiveAccordion,
    setCurrentActiveAccordion,
  ] = useState('');

  const programs = [
    {
      img: 'https://amlife.us/wp-content/uploads/fly-images/1006/Carousel1-490x0.jpg',
      title: 'The Benefits of an EB-5 Visa',
      url: '/',
      desc: 'From opening a business in the U.S., to providing educational opportunities to your children, to sponsoring your spouse and family, there are many benefits to obtaining an EB-5 visa. With permanent residency, you have the freedom to do most of the same activities as a citizen. Plus, EB-5 visa green card holders are eligible to apply for U.S. citizenship and receive a U.S. passport after 5 years.',
    },
    {
      img: 'https://amlife.us/wp-content/uploads/fly-images/1007/Carousel2-490x0.jpg',
      title: 'EB-5 Visa and the H-1B Visa ',
      url: '/',
      desc: 'An EB-5 visa is tied to the individual, whereas an H-1B visa is tied to your employer. Therefore, an H-1B visa means your residency in the United States is dependent on your relationship with the employer. Many find that they prefer the stability and freedom of an EB-5 visa over an H1-B visa. Do you have an H-1B visa now? An EB-5 visa may be the solution for you to remain in the United States permanently.',
    },
    {
      img: 'https://amlife.us/wp-content/uploads/fly-images/450/img-06@2x-490x0.jpg',
      title:
        'The Choice You Get with Be Americans ',
      url: '/',
      desc: 'Unlike most regional centers, Be Americans gives investors a choice between two types of investment structures. Option A (preferred equity) provides investors with a similar structure to an EB-5 “loan model,” but with the added safety and security of being an equity owner in the project. Option B offers investors the ability to more fully participate in the profits and the potential increase in the overall value of a property when it is sold.',
    },
  ];

  return (
    <>
      <Hero img="https://amlife.us/wp-content/uploads/fly-images/1140/HeaderImage_Light-2560x0.png">
        <div className="lg:max-w-6xl mx-auto border-l-8 border-highlight pl-10 lg:space-y-6 space-y-4">
          <strong className="block lg:text-sm text-xs text-highlight uppercase">
            About Us
          </strong>
          <h1 className="w-full lg:text-6xl text-4xl text-white font-medium">
            “I Can Say With Complete Confidence
            That Your{' '}
            <strong className="text-highlight font-accent italic">
              Be Americans
            </strong>{' '}
            Starts Here.”
          </h1>
          <p className="lg:text-2xl text-xl text-white font-medium">
            - Henry Liebman, CEO & Founder
          </p>
          <Button>Contact Us</Button>
        </div>
      </Hero>
      <section className="py-8">
        <div className="container mx-auto flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold">
              About Be Americans: The Longest
              Continuous Operating Regional Center
              in the U.S.
            </h1>
            <p className="text-lg">
              As the leader in EB-5 capital
              funding for real estate development,
              we invest EB-5 funds in exciting
              projects that help revitalize
              communities, create jobs, appreciate
              in value, and of course, ensure
              successful immigration for our
              investors to the United States. Be
              Americans employs rigorous standards
              to select quality projects so we can
              provide remarkable investment
              opportunities for our investors. And
              unlike most EB-5 real estate
              investment providers, when you
              invest with Be Americans, you get
              ownership of the project. With all
              that to offer, it’s no wonder we’re
              the trusted name in EB-5
              immigration.
            </p>
            <Button size="lg">
              Schedule a Call
            </Button>
          </div>
          <div className="">
            <Image
              src="https://amlife.us/wp-content/uploads/fly-images/1065/Dreamer-EB5-Graduation-577x0.jpg"
              width={579}
              height={473}
              alt="image"
              className="rounded-lg overflow-hidden"
            />
          </div>
        </div>
        <div className="container mt-10">
          <div className="space-y-8">
            <p className="text-4xl">
              The People Who Are Passionate About
              Securing Your American Dream
            </p>
            <p className="text-lg">
              From our founder Henry Liebman, who
              had the vision to start American
              Life in 1996, to every member of our
              highly experienced executive team,
              we’re committed to making your
              investment a successful one.
            </p>
            <div className="">
              <Swiper
                spaceBetween={10}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  678: {
                    slidesPerView: 3,
                  },
                  992: {
                    slidesPerView: 4,
                  },
                  1250: {
                    slidesPerView: 5,
                  },
                }}
              >
                {teams.map((member) => (
                  <SwiperSlide key={member.name}>
                    <MemberCard member={member} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="flex justify-center my-8">
            <Button className="" size="lg">
              <Link href="/team">View All</Link>
            </Button>
          </div>
        </div>
      </section>
      <WhySection cardBg="bg-white" />
      <UpdatedInfo />
    </>
  );
}
