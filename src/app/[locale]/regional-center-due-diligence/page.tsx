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

export default function RegionalCenterDueDiligence() {
  const [
    currentActiveAccordion,
    setCurrentActiveAccordion,
  ] = useState('');

  return (
    <>
      <Hero img="https://amlife.us/wp-content/uploads/fly-images/510/img-hero-02@2x-1-scaled-2560x0.jpg">
        <div className="lg:max-w-6xl mx-auto border-l-8 border-highlight pl-10 lg:space-y-6 space-y-4">
          <strong className="block lg:text-sm text-xs text-highlight uppercase">
            EB-5 Program
          </strong>
          <h1 className="w-full lg:text-6xl text-4xl text-white font-medium">
            All about{' '}
            <strong className="text-highlight font-accent italic">
              Regional Center Due Diligence
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
                Be Americans is the Longest
                Continuous Operating Regional
                Center Program in the U.S.
              </h1>
              <p className="text-lg">
                The legitimacy and experience of
                the regional center you select can
                have a huge impact on whether or
                not your visa is approved. That’s
                why we recommend all investors
                conduct detailed due diligence
                when it comes to their regional
                center, from checking that they
                are an approved regional center on
                the USCIS website to investigating
                the projects they’ve completed.
              </p>
              <p className="text-lg">
                As the longest operating regional
                center program in the U.S. with
                over 45 projects completed, you
                can rest assured that you are
                working with a legitimate partner
                that has your best interests in
                mind.
              </p>
              <Button size="lg">
                Schedule a Call
              </Button>
            </div>
            <div className="">
              <Image
                src="https://amlife.us/wp-content/uploads/fly-images/1074/Seattle-Skyline-577x0.jpg"
                width={579}
                height={473}
                alt="image"
                className="rounded-lg overflow-hidden"
              />
            </div>
          </div>
          <div className="container mx-auto flex flex-col lg:flex-row gap-20">
            <div className="">
              <Image
                src="https://amlife.us/wp-content/uploads/fly-images/1057/LongestRunning-Center-577x0.jpg"
                width={579}
                height={473}
                alt="image"
                className="rounded-lg overflow-hidden"
              />
            </div>
            <div className="lg:w-1/2 space-y-4">
              <h1 className="text-4xl font-bold">
                A Proud Member of Invest in the
                USA (IIUSA)
              </h1>
              <p className="text-lg">
                IIUSA is the national,
                membership-based not-for-profit
                industry trade association for the
                EB-5 Regional Center Program. All
                members are bound by the IIUSA
                Code of Conduct–a commitment to
                act with integrity and high
                ethical standards in all EB-5
                business.
              </p>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://amlife.us/wp-content/uploads/fly-images/453/bg-quote-01@2x-scaled-2560x0.jpg"
              alt="image"
              width={1024}
              height={2000}
              sizes="100"
              className="w-full h-[700px] lg:max-h-[800px] object-cover"
            />
            <div className="flex absolute flex-col items-center gap-8 top-1/2 container transform left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
              <div className="">
                <Image
                  src="https://amlife.us/wp-content/uploads/fly-images/1123/HenryQuote-200x0.png"
                  width={300}
                  height={300}
                  alt="image"
                  className="w-full h-full rounded-full"
                  quality={100}
                />
              </div>
              <div className="flex flex-col gap-4 items-center">
                <p className="text-center text-2xl">
                  When the EB-5 Regional Center
                  Program was introduced in 1995,
                  I saw the opportunity for
                  immigrants from around the world
                  to find a new life in the United
                  States through investment into
                  qualifying equity-based real
                  estate projects that they could
                  proudly call their own. American
                  Life has been the realization of
                  that vision.
                </p>
                <p className="mt-8 text-lg">
                  Henry Liebman
                </p>
                <p className="text-blue-800">
                  Chief Executive Officer /
                  Chairman of the Board
                </p>
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
