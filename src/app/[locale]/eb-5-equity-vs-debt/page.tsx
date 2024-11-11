'use client';

import Image from 'next/image';

import 'swiper/css';
import { Button } from '@/components/ui/button';
import Hero from '@/components/hero';
import WhySection from '@/components/why';
import Partners from '@/components/partners';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import './style.css';
import { useState } from 'react';
import FaqContact from '@/components/faq-contact';

export default function Eb5EquityVsDebt() {
  const [
    currentActiveAccordion,
    setCurrentActiveAccordion,
  ] = useState('');

  return (
    <>
      <Hero img="https://amlife.us/wp-content/uploads/fly-images/1143/Header-Image-1-2560x0.png">
        <div className="lg:max-w-6xl mx-auto border-l-8 border-highlight pl-10 lg:space-y-6 space-y-4">
          <strong className="block lg:text-sm text-xs text-highlight uppercase">
            EB-5 Program
          </strong>
          <h1 className="w-full lg:text-6xl text-4xl text-white font-medium">
            <strong className="text-highlight font-accent italic">
              Equity vs. Debt:
            </strong>{' '}
            Find Out What Sets Be Americans Apart
          </h1>
        </div>
      </Hero>
      <Partners />
      <section className="py-8">
        <div className="container mx-auto flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold">
              Start Your Be Americans with Real
              Ownership
            </h1>
            <p className="text-lg text-gray-700">
              Unlike other EB-5 programs which
              offer a loan-model, when you invest
              with Be Americans, you get actual
              equity ownership and participate in
              the success of the project. This
              lowers your risk, simplifies the
              structure of the investment, and
              generally will result in a better
              return on your investment. You are
              accepting there is risk in your
              investment, you should share in the
              reward!
            </p>
            <Button size="lg">
              Schedule a Call
            </Button>
          </div>
          <div className="">
            <Image
              src="https://amlife.us/wp-content/uploads/fly-images/1060/ConstructionProject-AmericanFlag-577x0.jpg"
              width={579}
              height={473}
              alt="image"
              className="rounded-lg overflow-hidden"
            />
          </div>
        </div>
      </section>
      <section className="container py-16">
        <div>
          <p className="text-highlight text-center text-sm font-bold uppercase">
            Understanding the Difference
          </p>
          <h3 className="text-3xl font-semibold text-center mt-4 mb-10">
            What You Need to Know About the Equity
            Model vs. the Debt Model
          </h3>
          <div className="">
            <div className="model-info model-info-cols">
              <div className="model-info-row">
                <div className="model-info-col"></div>
                <div className="model-info-col">
                  <div className="model-info-icon flex justify-center">
                    <img
                      src="/logo-removebg.jpg"
                      alt="AmLife_Logo-Mark_RGB_FullColor"
                      className="w-20"
                    />{' '}
                  </div>
                  <h5>The Equity Model</h5>{' '}
                  <p>
                    The project is owned directly
                    by the EB-5 investors
                  </p>{' '}
                </div>
                <div className="model-info-col">
                  <div className="model-info-icon flex justify-center">
                    <img
                      src="https://amlife.us/wp-content/uploads/2024/04/icon-debt.svg"
                      alt="icon-debt"
                      className="mb-2"
                      width="74"
                      height="72"
                    />{' '}
                  </div>
                  <h5>
                    The Competitors' Debt Model
                  </h5>{' '}
                  <p>
                    The project is owned by a
                    third-party developer
                  </p>{' '}
                </div>
              </div>
              <div className="model-info-row">
                <div className="model-info-col">
                  <h6>Risk and Security</h6>{' '}
                </div>
                <div className="model-info-col">
                  <p>
                    The investor is investing in a
                    partnership in which they are
                    the actual owner, which means
                    lower risk.{' '}
                  </p>{' '}
                </div>
                <div className="model-info-col">
                  <p>
                    Repayment is based on a
                    third-party developer
                    replacing and repaying the
                    loan at a future time, which
                    can mean higher risk.
                  </p>{' '}
                </div>
              </div>
              <div className="model-info-row">
                <div className="model-info-col">
                  <h6>Protection of Capital </h6>{' '}
                </div>
                <div className="model-info-col">
                  <p>
                    Titled ownership is on record
                    with the U.S. government and
                    the partnership’s U.S. tax
                    return. The investor is the
                    owner of the project,
                    including land and hotel
                    franchise.{' '}
                  </p>{' '}
                </div>
                <div className="model-info-col">
                  <p>
                    The project is not on record
                    under your name, but the name
                    of a third-party developer.
                    You may have a recorded lien,
                    but the capital structure can
                    be complex and you may not be
                    in “first position.”
                  </p>{' '}
                </div>
              </div>
              <div className="model-info-row">
                <div className="model-info-col">
                  <h6>Participation</h6>{' '}
                </div>
                <div className="model-info-col">
                  <p>
                    Profits from the project are
                    shared with the investor.
                  </p>{' '}
                </div>
                <div className="model-info-col">
                  <p>
                    Profits from a project go to
                    the promoter.
                  </p>{' '}
                </div>
              </div>
              <div className="model-info-row">
                <div className="model-info-col">
                  <h6>Financial Returns</h6>{' '}
                </div>
                <div className="model-info-col">
                  <p>
                    Investor receives 50% of
                    project’s distributable income
                    attributed to their interest
                    or a fixed return after the
                    hotel is open for six months.
                  </p>{' '}
                </div>
                <div className="model-info-col">
                  <p>
                    Generally a 1% return on
                    capital.
                  </p>{' '}
                </div>
              </div>
              <div className="model-info-row">
                <div className="model-info-col">
                  <h6>Transparency</h6>{' '}
                </div>
                <div className="model-info-col">
                  <p>
                    Simple, straight-forward
                    ownership structure with
                    ownership divided between a
                    limited number of partners
                    based on the investment.
                    Investors receive quarterly
                    performance reports to stay
                    informed.{' '}
                  </p>{' '}
                </div>
                <div className="model-info-col">
                  <p>
                    Complex project capital
                    structures with different
                    rights and protections.{' '}
                  </p>{' '}
                </div>
              </div>
              <div className="model-info-row">
                <div className="model-info-col">
                  <h6>Debt Ratio</h6>{' '}
                </div>
                <div className="model-info-col">
                  <p>
                    40-60% equity in projects,
                    resulting in much lower risk.{' '}
                  </p>{' '}
                </div>
                <div className="model-info-col">
                  <p>
                    Generally less than 10%
                    developer equity, which is
                    high risk.{' '}
                  </p>{' '}
                </div>
              </div>
              <div className="model-info-row">
                <div className="model-info-col">
                  <h6>Liquidity</h6>{' '}
                </div>
                <div className="model-info-col">
                  <p>
                    Return of capital upon sale or
                    project, refinance, or through
                    the independent resale market
                    for Limited Partnership
                    interests.{' '}
                  </p>{' '}
                </div>
                <div className="model-info-col">
                  <p>
                    Capital is returned only if
                    and when the loan is repaid.{' '}
                  </p>{' '}
                </div>
              </div>
            </div>
            <div className="model-info">
              <ul className="model-info-list">
                <li className="flex flex-col items-center">
                  <img
                    src="/logo-removebg.jpg"
                    alt="AmLife_Logo-Mark_RGB_FullColor"
                    className=" mb-4"
                    width="74"
                    height="73"
                  />
                  <h5>The Equity Model</h5>
                  <p>
                    The project is owned directly
                    by the EB-5 investors
                  </p>
                </li>
                <li>
                  <h6>Risk and Security</h6>
                  <p>
                    The investor is investing in a
                    partnership in which they are
                    the actual owner, which means
                    lower risk.
                  </p>
                </li>
                <li>
                  <h6>Protection of Capital </h6>
                  <p>
                    Titled ownership is on record
                    with the U.S. government and
                    the partnership’s U.S. tax
                    return. The investor is the
                    owner of the project,
                    including land and hotel
                    franchise.
                  </p>
                </li>
                <li>
                  <h6>Participation</h6>
                  <p>
                    Profits from the project are
                    shared with the investor.
                  </p>
                </li>
                <li>
                  <h6>Financial Returns</h6>
                  <p>
                    Investor receives 50% of
                    project’s distributable income
                    attributed to their interest
                    or a fixed return after the
                    hotel is open for six months.
                  </p>
                </li>
                <li>
                  <h6>Transparency</h6>
                  <p>
                    Simple, straight-forward
                    ownership structure with
                    ownership divided between a
                    limited number of partners
                    based on the investment.
                    Investors receive quarterly
                    performance reports to stay
                    informed.
                  </p>
                </li>
                <li>
                  <h6>Debt Ratio</h6>
                  <p>
                    40-60% equity in projects,
                    resulting in much lower risk.
                  </p>
                </li>
                <li>
                  <h6>Liquidity</h6>
                  <p>
                    Return of capital upon sale or
                    project, refinance, or through
                    the independent resale market
                    for Limited Partnership
                    interests.
                  </p>
                </li>
              </ul>
              <ul className="model-info-list">
                <li className="flex flex-col items-center">
                  <img
                    src="https://amlife.us/wp-content/uploads/2024/04/icon-debt.svg"
                    alt="icon-debt"
                    className="mb-4"
                    width="74"
                    height="72"
                  />
                  <h5>
                    The Competitors' Debt Model
                  </h5>
                  <p>
                    The project is owned by a
                    third-party developer
                  </p>
                </li>
                <li>
                  <h6>Risk and Security</h6>
                  <p>
                    Repayment is based on a
                    third-party developer
                    replacing and repaying the
                    loan at a future time, which
                    can mean higher risk.
                  </p>
                </li>
                <li>
                  <h6>Protection of Capital </h6>
                  <p>
                    The project is not on record
                    under your name, but the name
                    of a third-party developer.
                    You may have a recorded lien,
                    but the capital structure can
                    be complex and you may not be
                    in “first position.”
                  </p>
                </li>
                <li>
                  <h6>Participation</h6>
                  <p>
                    Profits from a project go to
                    the promoter.
                  </p>
                </li>
                <li>
                  <h6>Financial Returns</h6>
                  <p>
                    Generally a 1% return on
                    capital.
                  </p>
                </li>
                <li>
                  <h6>Transparency</h6>
                  <p>
                    Complex project capital
                    structures with different
                    rights and protections.
                  </p>
                </li>
                <li>
                  <h6>Debt Ratio</h6>
                  <p>
                    Generally less than 10%
                    developer equity, which is
                    high risk.
                  </p>
                </li>
                <li>
                  <h6>Liquidity</h6>
                  <p>
                    Capital is returned only if
                    and when the loan is repaid.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-16">
          <div className="flex flex-col items-center gap-4">
            <p className="text-highlight text-center text-sm font-bold uppercase">
              The Power of Choice
            </p>
            <h3 className="text-3xl font-semibold text-center">
              Choosing the Investment Model for
              You
            </h3>
            <p className="text-lg text-center">
              Unlike most other regional centers,
              Be Americans offers two options when
              it comes to your investment.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-10 mt-10">
            <div className="md:w-1/2 border rounded-xl overflow-hidden">
              <div className="bg-white flex flex-col gap-4 items-center pt-8 pb-12">
                <Image
                  src="/icon-option-01.svg"
                  width={74}
                  height={72}
                  alt="image"
                />
                <p className="text-xl font-medium">
                  Option A
                </p>
              </div>
              <div className="p-6">
                <p className="text-center text-gray-700">
                  Be Americans’s Preferred Equity
                  option provides investors with a
                  similar structure to an EB-5
                  “loan model”, with a fixed
                  return, but with the added
                  safety and security of being an
                  equity owner in the project.
                  Investors have a targeted date
                  for return of their investment
                  (usually 5 to 7 years from the
                  opening of the hotel).
                </p>
              </div>
            </div>
            <div className="md:w-1/2 border rounded-xl overflow-hidden">
              <div className="bg-white flex flex-col gap-4 items-center pt-8 pb-12">
                <Image
                  src="/icon-option-02.svg"
                  width={74}
                  height={72}
                  alt="image"
                />
                <p className="text-xl font-medium">
                  Option B
                </p>
              </div>
              <div className="p-6">
                <p className="text-center text-gray-700">
                  Be Americans develops
                  exceptional hotels. Investors
                  that choose option B participate
                  in the profits of the hotel and
                  the potential increase in the
                  overall value of the hotel
                  property when it is sold at a
                  future date. As an equity owner,
                  the EB-5 investor receives a
                  more significant but variable
                  portion of the distributed
                  income and capital gain
                  associated with their limited
                  partnership interest.
                  Historically investors that
                  choose this option have received
                  significantly higher rates of
                  return than any competing EB-5
                  programs. You’re taking the
                  risk, why not enjoy the
                  potential rewards?
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <Button className="" size="lg">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container mx-auto">
          <div className="flex flex-col gap-4 items-center">
            <h3 className="font-semibold text-highlight">
              Frequently Asked Questions
            </h3>
            <h1 className="text-4xl font-bold text-center">
              Have More Questions About Your
              Potential Investment?
            </h1>
            <p className="text-center text-lg">
              Take a look at our FAQ to find the
              answer. And if you don’t see it
              here, feel free to get in touch.
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
                    What is the EB-5 investor rate
                    of return?
                  </AccordionTrigger>
                  <AccordionContent className="text-[16px]">
                    <ul className="space-y-2">
                      <li>
                        As an Be Americans
                        equity-based investor, you
                        participate in the profits
                        of the project. Our
                        investment offering
                        documents include
                        forecasted returns and
                        profits from the
                        operations of the project.
                        The return on investment
                        is generally much higher
                        than investors’ experience
                        in our competitors’ loan
                        models.
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
                    What is Be Americans’s success
                    rate for receiving the EB-5
                    visa?
                  </AccordionTrigger>
                  <AccordionContent className="text-[16px]">
                    <ul className="space-y-3">
                      <li>
                        Since 1996, the I-526
                        approval rate for American
                        Life has been almost 100%.
                        Any denials or delays we
                        have experienced are
                        generally based on issues
                        with investors proving the
                        source of their invested
                        funds.
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
                    How do I invest?
                  </AccordionTrigger>
                  <AccordionContent className="text-[16px]">
                    <ul className="space-y-3">
                      <li>
                        A prospective investor can
                        first register by filling
                        out the contact form, and
                        an accreditation form to
                        receive offering materials
                        (investment offering
                        prospectus).
                      </li>
                      <li>
                        In terms of investing,
                        once you sign the official
                        English version of the
                        subscription agreement (in
                        the prospectus) and we
                        countersign the same
                        document, you are admitted
                        as a limited partner. The
                        next step for the foreign
                        investor is to follow our
                        wiring instructions and
                        send the investment funds.
                        Typically within 1 to 2
                        days of your wire
                        transfer, our office will
                        send you a confirmation of
                        receipt of the funds. If
                        you are an EB-5 investor,
                        a copy of the remittance
                        confirmation will also be
                        provided to your
                        immigration attorney, so
                        he or she can submit your
                        I-526 petition.
                      </li>
                      <li>
                        At any stage of your
                        decision-making process,
                        please feel free to
                        contact us via phone, send
                        us an email or set an
                        appointment online to
                        speak to one of our
                        managers.
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
                    Is my EB-5 investment
                    guaranteed?
                  </AccordionTrigger>
                  <AccordionContent className="text-[16px]">
                    <ul className="space-y-3">
                      <li>
                        No. The law requires an
                        EB-5 investment to be “at
                        risk.” Be Americans works
                        to minimize that risk with
                        its equity-based model of
                        investment.
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
                    What are the risks for my EB-5
                    investment?
                  </AccordionTrigger>
                  <AccordionContent className="text-[16px]">
                    <ul className="space-y-3">
                      <li>
                        As in any investment,
                        there is a risk of total
                        loss. By U.S. regulations,
                        all funds must be put at
                        risk. Risk factors differ
                        among projects, but
                        general risks include
                        economic conditions,
                        owning of real estate
                        investments, law changes,
                        and other risks related to
                        a private investment
                        offering. For a full list
                        of risks related to
                        particular investment,
                        please refer to the
                        offering material.
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
