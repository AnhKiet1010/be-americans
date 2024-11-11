'use client';

import Image from 'next/image';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useState } from 'react';
import Hero from '@/components/hero';
import Partners from '@/components/partners';
import FaqContact from '@/components/faq-contact';
import WhySection from '@/components/why';

export default function Eb5Program() {
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
      <Hero img="https://amlife.us/wp-content/uploads/fly-images/510/img-hero-02@2x-1-scaled-2560x0.jpg">
        <div className="lg:max-w-6xl mx-auto border-l-8 border-highlight pl-10 lg:space-y-6 space-y-4">
          <strong className="block lg:text-sm text-xs text-highlight uppercase">
            Over 8,000 Visas Granted
          </strong>
          <h1 className="w-full lg:text-6xl text-4xl text-white font-medium">
            A Guide to the{' '}
            <strong className="text-highlight font-accent italic">
              EB-5 Visa Program
            </strong>
          </h1>
          <p className="lg:text-6xl text-4xl text-white font-medium">
            Make Your American Dream a Reality
          </p>
        </div>
      </Hero>
      <Partners />
      <section className="py-8">
        <div className="container mx-auto flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold">
              The EB-5 Visa Program: Your Path to
              Permanent Residency
            </h1>
            <p className="text-md">
              The EB-5 program provides a pathway
              to become a lawful permanent
              resident by investing $800,000 or
              more in a qualifying project. The
              EB-5 program is not only a
              job-creation program for the United
              States, but an immigration
              opportunity for you and your family.
              Your investment will be used to
              finance a development project in the
              United States that will result in
              the creation of jobs for a minimum
              of 10 U.S. workers, often in rural
              or low-employment areas. So not only
              does your family benefit with a new
              life in the United States, but other
              American families and the U.S.
              economy benefit as well.
            </p>
            <Button size="lg">
              Schedule a Call
            </Button>
          </div>
          <div className="">
            <Image
              src="https://amlife.us/wp-content/uploads/fly-images/1040/AdobeStock_538389936-scaled-577x0.jpeg"
              width={579}
              height={473}
              alt="image"
              className="rounded-lg overflow-hidden"
            />
          </div>
        </div>
        <div className="container mx-auto py-16">
          <Swiper
            className="w-full"
            pagination={true}
            modules={[Pagination]}
            breakpoints={{
              0: {
                slidesPerView: 'auto',
                spaceBetween: 20,
              },
              912: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {programs.map((item) => (
              <SwiperSlide
                key={item.title}
                className=""
              >
                <div className="p-8 bg-white border rounded-md shadow-xl">
                  <Image
                    src={item.img}
                    width={500}
                    height={300}
                    alt="image"
                    className="w-full h-auto object-cover object-center mb-4"
                    quality={100}
                  />
                  <Link
                    href={item.url}
                    className="text-xl font-bold"
                  >
                    {item.title}
                  </Link>
                  <p className="mt-2 text-lg">
                    {item.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4 items-center">
            <h3 className="font-semibold text-highlight">
              Frequently Asked Questions
            </h3>
            <h1 className="text-4xl font-bold">
              EB-5 Visa FAQs
            </h1>
            <p className="text-center text-lg">
              Want to know more? Browse frequently
              asked questions about the EB-5 visa
              program or head to our FAQ page to
              learn more.
            </p>
            <div className="w-full">
              <Accordion
                type="single"
                collapsible
                className="w-full text-lg"
                onValueChange={(value) =>
                  setCurrentActiveAccordion(value)
                }
              >
                <AccordionItem
                  value="item-1"
                  className={`${
                    currentActiveAccordion ===
                    'item-1'
                      ? 'bg-white'
                      : ''
                  } p-4`}
                >
                  <AccordionTrigger className="text-lg">
                    How do I qualify for the EB-5
                    program?
                  </AccordionTrigger>
                  <AccordionContent className="text-[16px]">
                    <p className="mb-4">
                      Take a look at the criteria
                      for the EB-5 program and see
                      if it’s the right match for
                      you.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        You are able to invest the
                        required minimum amount
                        (starting at $800,000 +
                        syndication fees,
                        depending on the location
                        of the project)
                      </li>
                      <li>
                        Your investment through Be
                        Americans finances a
                        development project in the
                        United States that will
                        create a minimum of 10
                        full-time jobs per
                        investor for U.S. workers
                      </li>
                      <li>
                        You are able to
                        demonstrate that your
                        investment funds come from
                        a lawful source
                      </li>
                      <li>
                        You have a willingness to
                        place capital at risk with
                        the goal of generating a
                        return
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className={`${
                    currentActiveAccordion ===
                    'item-2'
                      ? 'bg-white'
                      : ''
                  } p-4`}
                >
                  <AccordionTrigger className="text-lg">
                    What are the benefits of the
                    EB-5 program?
                  </AccordionTrigger>
                  <AccordionContent className="text-[16px]">
                    <ul className="space-y-3">
                      <li>
                        Work — EB-5 permanent
                        residents are allowed to
                        work for any company in
                        the U.S. In some states
                        you can only obtain
                        professional licenses
                        (engineering, real estate
                        agents, etc.) if you have
                        a U.S. green card or are a
                        U.S. citizen.
                      </li>
                      <li>
                        Business — EB-5 permanent
                        residents can start their
                        own business anywhere in
                        the U.S.
                      </li>
                      <li>
                        Travel — EB-5 green card
                        holders can travel
                        anywhere within the U.S.
                        and leave and enter the
                        country freely as
                        permanent residents.
                      </li>
                      <li>
                        Legal rights — EB-5
                        permanent residents’ legal
                        rights are protected under
                        U.S. law, except the right
                        to vote, which is
                        available after you become
                        a U.S. citizen.
                      </li>
                      <li>
                        Family members — EB-5
                        permanent residents can
                        sponsor a spouse and
                        unmarried children (under
                        age 21) included in the
                        same green card petition.
                      </li>
                      <li>
                        Education — EB-5 permanent
                        residents generally enjoy
                        in-state or resident
                        tuition at all public
                        universities and colleges.
                        Typically, this rate is
                        two to four times less
                        expensive than the rate
                        foreign students have to
                        pay.
                      </li>
                      <li>
                        Home — EB-5 permanent
                        residents will find it
                        easier to be approved for
                        a home mortgage and/or to
                        obtain lower interest
                        rates.
                      </li>
                      <li>
                        Retirement — EB-5
                        permanent residents enjoy
                        the same Social Security
                        benefits as a U.S. citizen
                        after they have worked in
                        the U.S. for ten years.
                      </li>
                      <li>
                        Citizenship — EB-5
                        permanent residents are
                        eligible to apply for U.S.
                        citizenship and have a
                        U.S. passport. You can
                        also keep your permanent
                        green card forever if you
                        choose not to become a
                        U.S. citizen as long as
                        you maintain U.S.
                        residency.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-3"
                  className={`${
                    currentActiveAccordion ===
                    'item-3'
                      ? 'bg-white'
                      : ''
                  } p-4`}
                >
                  <AccordionTrigger className="text-lg">
                    How much does it cost to
                    participate in the EB-5
                    program?
                  </AccordionTrigger>
                  <AccordionContent className="text-[16px]">
                    <ul className="space-y-3">
                      <li>
                        The total cost of the EB-5
                        process includes the
                        minimum investment amount
                        of $800,000 for projects
                        located in designated
                        Targeted Employment Areas
                        (TEAs), i.e., rural areas
                        or infrastructure
                        projects, or $1,050,000 if
                        located elsewhere.
                      </li>
                      <li>
                        In addition to the capital
                        investment and any
                        syndication fees,
                        applicants should budget
                        for legal fees,
                        administration fees, and a
                        USCIS filing fee–the
                        combined total of which
                        can sometimes exceed
                        $100K.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-4"
                  className={`${
                    currentActiveAccordion ===
                    'item-4'
                      ? 'bg-white'
                      : ''
                  } p-4`}
                >
                  <AccordionTrigger className="text-lg">
                    Is there a difference between
                    a green card and an EB-5 visa?
                  </AccordionTrigger>
                  <AccordionContent className="text-[16px]">
                    <ul className="space-y-3">
                      <li>
                        The EB-5 visa program
                        provides a path for
                        eligible immigrant
                        investors to become lawful
                        permanent
                        residents–informally known
                        as “green card” holders.
                        In that sense, the EB-5
                        visa is a “green card.”
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-5"
                  className={`${
                    currentActiveAccordion ===
                    'item-5'
                      ? 'bg-white'
                      : ''
                  } p-4 border-none`}
                >
                  <AccordionTrigger className="text-lg">
                    Is there a difference between
                    a green card and an EB-5 visa?
                  </AccordionTrigger>
                  <AccordionContent className="text-[16px]">
                    <ul className="space-y-3">
                      <li>
                        The EB-5 visa program
                        provides a path for
                        eligible immigrant
                        investors to become lawful
                        permanent
                        residents–informally known
                        as “green card” holders.
                        In that sense, the EB-5
                        visa is a “green card.”
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <FaqContact />
          </div>
        </div>
      </section>
      <WhySection cardBg="bg-white" />
    </>
  );
}
