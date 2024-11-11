'use client';

import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
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
import Eb5ProcessSlide from '@/components/eb5-process-slide';

export default function Eb5CostProcess() {
  const [
    currentActiveAccordion,
    setCurrentActiveAccordion,
  ] = useState('');

  return (
    <>
      <Hero img="https://amlife.us/wp-content/uploads/fly-images/1051/HeaderImage-scaled-2560x0.jpg">
        <div className="lg:max-w-6xl mx-auto border-l-8 border-highlight pl-10 lg:space-y-6 space-y-4">
          <strong className="block lg:text-sm text-xs text-highlight uppercase">
            EB-5 Program
          </strong>
          <h1 className="w-full lg:text-6xl text-4xl text-white font-medium">
            A Step-by-Step Guide to the{' '}
            <strong className="text-highlight font-accent italic">
              EB-5 Cost & Process
            </strong>
          </h1>
        </div>
      </Hero>
      <Partners />
      <section className="py-20">
        <div className="space-y-20">
          <div className="container mx-auto flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/2 space-y-4">
              <h1 className="text-4xl font-bold">
                Understanding What it Takes to
                Complete the EB-5 Visa Process
              </h1>
              <p className="text-lg">
                The path to permanent residency is
                not without difficulties. The
                process can be lengthy and
                complicated. Partnering with the
                right regional center and
                immigration attorney can make a
                world of difference, but even with
                the right partners, we still
                recommend educating yourself on
                the process so you can be
                prepared. We’ve compiled a
                step-by-step guide to the process,
                as well as some answers to common
                questions. When in doubt, you can
                always schedule a call with one of
                our experts to learn more. We can
                also connect you with an
                immigration attorney who is
                skilled in EB-5 visa applications.
              </p>
              <Button size="lg">
                Schedule a Call
              </Button>
            </div>
            <div className="">
              <Image
                src="https://amlife.us/wp-content/uploads/fly-images/451/img-05@2x-577x0.jpg"
                width={579}
                height={473}
                alt="image"
                quality={100}
                className="rounded-lg overflow-hidden"
              />
            </div>
          </div>
        </div>
      </section>
      <Eb5ProcessSlide />
      <section className="pb-16">
        <div className="bg-white container mx-auto border rounded-sm py-8 lg:py-16">
          <div className="mx-auto flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-1/2">
              <Image
                src="https://amlife.us/wp-content/uploads/fly-images/1052/EB-5_ReformAct-528x0.jpg"
                width={579}
                height={473}
                alt="image"
                quality={100}
                className="w-full overflow-hidden"
              />
            </div>
            <div className="lg:w-1/2 space-y-4">
              <p className="text-highlight uppercase text-sm font-bold">
                EB-5 Reform & Integrity Act of
                2022
              </p>
              <h1 className="text-4xl font-bold">
                What You Need to Know About the
                2022 EB-5 Reform and Integrity Act
              </h1>
              <p className="text-lg">
                The EB-5 Reform and Integrity Act
                is an extensive reform of the EB-5
                immigrant investor program that
                happened in 2022. The primary goal
                for the act was to make the
                process more transparent,
                efficient, and fair for everyone.
                With revised investment amounts,
                streamlined processes, and
                stricter security measures, the
                new legislation aims to improve
                the program’s effectiveness,
                integrity, and economic impact.
                Take a look at our comprehensive
                checklist outlining the updates.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <div className="list-checked flex flex-col lg:flex-row gap-0 md:gap-8">
              <div className="space-y-8 w-full lg:w-1/2">
                <div className="pl-8 space-y-2 relative">
                  <p className="text-xl font-semibold text-gray-600">
                    Adjustment for Investment
                    Inflation
                  </p>
                  <p className="text-lg">
                    The EB-5 Reform and Integrity
                    Act changed the program’s
                    minimum investment
                    requirements to better reflect
                    the latest cost of living and
                    inflation rates in the United
                    States. The new minimum
                    investment for an EB-5 green
                    card is $1,050,000—which is
                    lowered to $800,000 for
                    projects in Targeted
                    Employment Areas (TEAs) or
                    rural areas.
                  </p>
                </div>
                <div className="pl-8 space-y-2 relative">
                  <p className="text-xl font-semibold text-gray-600">
                    Project Prioritization in
                    Targeted Employment Areas
                  </p>
                  <p className="text-lg">
                    To enhance rural and
                    low-income neighborhoods in
                    the United States, there are
                    now better incentives for
                    investors to prioritize
                    projects in TEAs. The aim is
                    to promote economic growth,
                    job creation, and revitalize
                    struggling communities. TEA
                    investors now get access to
                    exclusive set-aside visa
                    categories, which can allow
                    investors from popular
                    countries like China and India
                    to immigrate faster than
                    previously possible.
                  </p>
                </div>
              </div>
              <div className="space-y-8 w-full lg:w-1/2">
                <div className="pl-8 space-y-2 relative">
                  <p className="text-xl font-semibold text-gray-600">
                    Renewal of the EB-5 Regional
                    Center Program
                  </p>
                  <p className="text-lg">
                    The program was extended to
                    September 2027.
                  </p>
                </div>
                <div className="pl-8 space-y-2 relative">
                  <p className="text-xl font-semibold text-gray-600">
                    Improved Application
                    Efficiency
                  </p>
                  <p className="text-lg">
                    The new act aims to make the
                    application process more
                    efficient and transparent. It
                    allows for concurrent visa
                    filing to boost efficiency and
                    make it easier for immigrants
                    to live in the U.S. while
                    their paperwork is processing.
                  </p>
                </div>
                <div className="pl-8 space-y-2 relative">
                  <p className="text-xl font-semibold text-gray-600">
                    Enhanced Security Measures
                  </p>
                  <p className="text-lg">
                    When handling such a large
                    amount of money, there are
                    (understandably) concerns
                    about fraud. The new
                    legislation created rules like
                    mandating background checks
                    for regional center leaders
                    and project developers, as
                    well as empowering the
                    Department of Homeland
                    Security to perform
                    inspections, in order to
                    reduce the risk for investors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4 items-center">
            <h3 className="font-semibold text-highlight">
              What More Can We Help You With
            </h3>
            <h1 className="text-4xl font-bold">
              Frequently Asked Questions
            </h1>
            <p className="text-center text-lg">
              Want to know more? Browse frequently
              asked questions about EB-5 regional
              centers or head to our FAQ page to
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
                    What is an EB-5 regional
                    center?
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
                        An EB-5 regional center is
                        a private organization
                        pre-designated by the U.S.
                        government for
                        participation in the
                        Immigrant Investor
                        program. A regional center
                        is authorized to pool
                        investments from multiple
                        EB-5 investors, and
                        oversee its use in
                        compliance with the EB-5
                        program.
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
                    How can I tell if an EB-5
                    regional center is legitimate?
                  </AccordionTrigger>
                  <AccordionContent className="text-[16px]">
                    <ul className="space-y-3">
                      <li>
                        You can head to the USCIS
                        website
                        https://www.uscis.gov/ and
                        check if the regional
                        center you are considering
                        is listed as an approved
                        EB-5 immigrant investor
                        regional center. You can
                        also see if they are a
                        registered member with
                        IIUSA https://iiusa.org/.
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
                    How much experience does Be
                    Americans have as a regional
                    center?
                  </AccordionTrigger>
                  <AccordionContent className="text-[16px]">
                    <ul className="space-y-3">
                      <li>
                        Be Americans operates the
                        longest established
                        approved regional center
                        with USCIS
                        https://www.uscis.gov/.
                        With over 45 commercial
                        real estate projects under
                        our belt, you can feel
                        confident that you’re
                        getting a trustworthy and
                        knowledgeable partner on
                        your EB-5 journey.
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
                    How do I tell if a specific
                    project has been registered
                    with USCIS?
                  </AccordionTrigger>
                  <AccordionContent className="text-[16px]">
                    <ul className="space-y-3">
                      <li>
                        An EB-5 promoter will file
                        an I-956F application for
                        project approval with
                        USCIS documenting the
                        specifics of the actual
                        project, including
                        information on the
                        regional center, job
                        creation, and other
                        details of the project.
                        The EB-5 promoter should
                        provide you a copy of the
                        I-797 receipt for this
                        filing.
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
                  } p-4`}
                >
                  <AccordionTrigger className="text-lg">
                    How do I know if enough jobs
                    will be created to support my
                    EB-5 application?
                  </AccordionTrigger>
                  <AccordionContent className="text-[16px]">
                    <ul className="space-y-3">
                      <li>
                        An EB-5 project should be
                        able to provide you with
                        an economic study,
                        authored by an independent
                        professional economist
                        with experience in EB-5,
                        clearly documenting the
                        U.S. jobs that will be
                        created by the EB-5
                        project you are
                        considering investing in.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-6"
                  className={`${
                    currentActiveAccordion ===
                    'item-6'
                      ? 'bg-white'
                      : ''
                  } p-4`}
                >
                  <AccordionTrigger className="text-lg">
                    What else should I ask a
                    regional center for as I
                    complete my due diligence?
                  </AccordionTrigger>
                  <AccordionContent className="text-[16px]">
                    <ul className="space-y-3">
                      <li>
                        Additional helpful items
                        to request include
                        evidence of previous I-526
                        and I-829 approvals from
                        the regional center.
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
