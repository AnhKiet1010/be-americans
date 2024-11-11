'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  useEffect,
  useRef,
  useState,
} from 'react';
import Hero from '@/components/hero';
import FaqContact from '@/components/faq-contact';

export default function Faq() {
  const [
    currentActiveAccordion1,
    setCurrentActiveAccordion1,
  ] = useState('');
  const [
    currentActiveAccordion2,
    setCurrentActiveAccordion2,
  ] = useState('');
  const [
    currentActiveAccordion3,
    setCurrentActiveAccordion3,
  ] = useState('');
  const [
    currentActiveAccordion4,
    setCurrentActiveAccordion4,
  ] = useState('');
  const [
    currentActiveAccordion5,
    setCurrentActiveAccordion5,
  ] = useState('');

  const [activeSection, setActiveSection] =
    useState(null);

  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
    section5: useRef(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = null;

      Object.entries(sectionRefs).forEach(
        ([key, ref]) => {
          const section = ref.current;
          if (section) {
            const { top, bottom } =
              section.getBoundingClientRect();

            if (
              top <= window.innerHeight / 2 &&
              bottom >= window.innerHeight / 2
            ) {
              currentSection = key;
            }
          }
        }
      );
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener(
      'scroll',
      handleScroll
    );
    handleScroll();

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      );
    };
  }, []);

  const handleScrollToSection = (sectionKey) => {
    sectionRefs[
      sectionKey
    ].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      <Hero img="https://amlife.us/wp-content/uploads/fly-images/1058/Header-IMage-1-scaled-2560x0.jpg">
        <div className="lg:max-w-6xl mx-auto border-l-8 border-highlight pl-10 lg:space-y-6 space-y-4">
          <strong className="block lg:text-sm text-xs text-highlight uppercase">
            Frequently Asked Questions
          </strong>
          <h1 className="w-full lg:text-6xl text-4xl text-white font-medium">
            Find the answers you are looking for,
            or get in touch with the{' '}
            <strong className="text-highlight font-accent italic">
              Be Americans
            </strong>{' '}
            team
          </h1>
        </div>
      </Hero>
      <section className="py-16">
        <div className="container flex gap-10">
          <div className="relative">
            <div className="max-h-min sticky top-4 bg-white p-8 border rounded-lg space-y-2">
              <div
                className={`hover:bg-primary px-4 cursor-pointer hover:text-white text-center font-semibold  py-3 rounded-lg ${
                  activeSection === 'section1'
                    ? 'bg-primary text-white'
                    : 'text-gray-700'
                }`}
                onClick={() =>
                  handleScrollToSection(
                    'section1'
                  )
                }
              >
                EB-5 Visa FAQs
              </div>
              <div
                className={`hover:bg-primary px-4 cursor-pointer hover:text-white text-center font-semibold  py-3 rounded-lg ${
                  activeSection === 'section2'
                    ? 'bg-primary text-white'
                    : 'text-gray-700'
                }`}
                onClick={() =>
                  handleScrollToSection(
                    'section2'
                  )
                }
              >
                EB-5 Cost & Process
              </div>
              <div
                className={`hover:bg-primary px-4 cursor-pointer hover:text-white text-center font-semibold  py-3 rounded-lg ${
                  activeSection === 'section3'
                    ? 'bg-primary text-white'
                    : 'text-gray-700'
                }`}
                onClick={() =>
                  handleScrollToSection(
                    'section3'
                  )
                }
              >
                H-1B Visa Holders
              </div>
              <div
                className={`hover:bg-primary px-4 cursor-pointer hover:text-white text-center font-semibold  py-3 rounded-lg ${
                  activeSection === 'section4'
                    ? 'bg-primary text-white'
                    : 'text-gray-700'
                }`}
                onClick={() =>
                  handleScrollToSection(
                    'section4'
                  )
                }
              >
                Regional Center Due Dilligence
              </div>
              <div
                className={`hover:bg-primary px-4 cursor-pointer hover:text-white text-center font-semibold  py-3 rounded-lg ${
                  activeSection === 'section5'
                    ? 'bg-primary text-white'
                    : 'text-gray-700'
                }`}
                onClick={() =>
                  handleScrollToSection(
                    'section5'
                  )
                }
              >
                EB-5 ROI Debt vs Equity
              </div>
            </div>
          </div>
          <div className="">
            <div
              className="pt-0"
              ref={sectionRefs.section1}
            >
              <h3 className="text-2xl font-medium py-2 pl-6 border-l-8 border-highlight mb-8">
                EB-5 Visa FAQs
              </h3>
              <div className="border-t">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full text-lg"
                  onValueChange={(value) =>
                    setCurrentActiveAccordion1(
                      value
                    )
                  }
                >
                  <AccordionItem
                    value="item-1"
                    className={`${
                      currentActiveAccordion1 ===
                      'item-1'
                        ? 'bg-white'
                        : ''
                    } p-4`}
                  >
                    <AccordionTrigger className="text-lg">
                      How do I qualify for the
                      EB-5 program?
                    </AccordionTrigger>
                    <AccordionContent className="text-[16px]">
                      <p className="mb-4">
                        Take a look at the
                        criteria for the EB-5
                        program and see if it’s
                        the right match for you.
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          You are able to invest
                          the required minimum
                          amount (starting at
                          $800,000 + syndication
                          fees, depending on the
                          location of the project)
                        </li>
                        <li>
                          Your investment through
                          Be Americans finances a
                          development project in
                          the United States that
                          will create a minimum of
                          10 full-time jobs per
                          investor for U.S.
                          workers
                        </li>
                        <li>
                          You are able to
                          demonstrate that your
                          investment funds come
                          from a lawful source
                        </li>
                        <li>
                          You have a willingness
                          to place capital at risk
                          with the goal of
                          generating a return
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-2"
                    className={`${
                      currentActiveAccordion1 ===
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
                          (engineering, real
                          estate agents, etc.) if
                          you have a U.S. green
                          card or are a U.S.
                          citizen.
                        </li>
                        <li>
                          Business — EB-5
                          permanent residents can
                          start their own business
                          anywhere in the U.S.
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
                          permanent residents’
                          legal rights are
                          protected under U.S.
                          law, except the right to
                          vote, which is available
                          after you become a U.S.
                          citizen.
                        </li>
                        <li>
                          Family members — EB-5
                          permanent residents can
                          sponsor a spouse and
                          unmarried children
                          (under age 21) included
                          in the same green card
                          petition.
                        </li>
                        <li>
                          Education — EB-5
                          permanent residents
                          generally enjoy in-state
                          or resident tuition at
                          all public universities
                          and colleges. Typically,
                          this rate is two to four
                          times less expensive
                          than the rate foreign
                          students have to pay.
                        </li>
                        <li>
                          Home — EB-5 permanent
                          residents will find it
                          easier to be approved
                          for a home mortgage
                          and/or to obtain lower
                          interest rates.
                        </li>
                        <li>
                          Retirement — EB-5
                          permanent residents
                          enjoy the same Social
                          Security benefits as a
                          U.S. citizen after they
                          have worked in the U.S.
                          for ten years.
                        </li>
                        <li>
                          Citizenship — EB-5
                          permanent residents are
                          eligible to apply for
                          U.S. citizenship and
                          have a U.S. passport.
                          You can also keep your
                          permanent green card
                          forever if you choose
                          not to become a U.S.
                          citizen as long as you
                          maintain U.S. residency.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-3"
                    className={`${
                      currentActiveAccordion1 ===
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
                          The total cost of the
                          EB-5 process includes
                          the minimum investment
                          amount of $800,000 for
                          projects located in
                          designated Targeted
                          Employment Areas (TEAs),
                          i.e., rural areas or
                          infrastructure projects,
                          or $1,050,000 if located
                          elsewhere.
                        </li>
                        <li>
                          In addition to the
                          capital investment and
                          any syndication fees,
                          applicants should budget
                          for legal fees,
                          administration fees, and
                          a USCIS filing fee–the
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
                      currentActiveAccordion1 ===
                      'item-4'
                        ? 'bg-white'
                        : ''
                    } p-4`}
                  >
                    <AccordionTrigger className="text-lg">
                      Is there a difference
                      between a green card and an
                      EB-5 visa?
                    </AccordionTrigger>
                    <AccordionContent className="text-[16px]">
                      <ul className="space-y-3">
                        <li>
                          The EB-5 visa program
                          provides a path for
                          eligible immigrant
                          investors to become
                          lawful permanent
                          residents– informally
                          known as “green card”
                          holders. In that sense,
                          the EB-5 visa is a
                          “green card.”
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-5"
                    className={`${
                      currentActiveAccordion1 ===
                      'item-5'
                        ? 'bg-white'
                        : ''
                    } p-4`}
                  >
                    <AccordionTrigger className="text-lg">
                      How long can I stay with an
                      EB-5 visa?
                    </AccordionTrigger>
                    <AccordionContent className="text-[16px]">
                      <ul className="space-y-3">
                        <li>
                          The EB-5 visa acts as a
                          permanent green card
                          allowing the recipient
                          to stay in the U.S.
                          indefinitely. However,
                          once you obtain your
                          EB-5 visa, it is
                          generally advisable that
                          you do not leave the
                          U.S. for any continuous
                          period longer than six
                          months. You may also
                          lose your permanent
                          residency status if you
                          are found guilty of a
                          crime or do not file
                          U.S. tax returns.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-6"
                    className={`${
                      currentActiveAccordion1 ===
                      'item-6'
                        ? 'bg-white'
                        : ''
                    } p-4`}
                  >
                    <AccordionTrigger className="text-lg">
                      How many EB-5 visas are
                      allocated each year for the
                      EB-5 program?
                    </AccordionTrigger>
                    <AccordionContent className="text-[16px]">
                      <ul className="space-y-3">
                        <li>
                          The EB-5 investment
                          program allocates 10,000
                          visas per year for
                          investors and their
                          family members. There is
                          also a quota or cap per
                          country that can affect
                          the timing of the
                          issuance of your EB-5
                          visa.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div
              className="pt-8"
              ref={sectionRefs.section2}
            >
              <h3 className="text-2xl font-medium py-2 pl-6 border-l-8 border-highlight mb-8">
                EB-5 Cost & Process
              </h3>
              <div className="border-t">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full text-lg"
                  onValueChange={(value) =>
                    setCurrentActiveAccordion2(
                      value
                    )
                  }
                >
                  <AccordionItem
                    value="item-1"
                    className={`${
                      currentActiveAccordion2 ===
                      'item-1'
                        ? 'bg-white'
                        : ''
                    } p-4`}
                  >
                    <AccordionTrigger className="text-lg">
                      How long does an EB-5 take
                      to process?
                    </AccordionTrigger>
                    <AccordionContent className="text-[16px]">
                      <ul className="space-y-2">
                        <li>
                          Processing times vary,
                          but investors should be
                          prepared to wait twelve
                          months or more for
                          approval of the I-526E
                          petition. It can then
                          take 4-6 months to
                          secure the visa from the
                          consulate. Additional
                          wait periods will apply
                          if you are coming from a
                          country that has
                          exceeded its annual
                          quota, requiring that
                          you wait for a visa to
                          become available.
                          Currently this only
                          applies to a few
                          countries in the world…
                          most countries have an
                          EB-5 visa available and
                          waiting for you right
                          now.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-2"
                    className={`${
                      currentActiveAccordion2 ===
                      'item-2'
                        ? 'bg-white'
                        : ''
                    } p-4`}
                  >
                    <AccordionTrigger className="text-lg">
                      What is the success rate of
                      the EB-5 visa program?
                    </AccordionTrigger>
                    <AccordionContent className="text-[16px]">
                      <ul className="space-y-3">
                        <li>
                          Overall, the approval
                          process is very high,
                          nearly 100%, when
                          investors choose an
                          experienced EB-5 program
                          like Be Americans, and
                          utilize a skilled
                          immigration attorney.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-3"
                    className={`${
                      currentActiveAccordion2 ===
                      'item-3'
                        ? 'bg-white'
                        : ''
                    } p-4`}
                  >
                    <AccordionTrigger className="text-lg">
                      How much does the EB-5 visa
                      cost?
                    </AccordionTrigger>
                    <AccordionContent className="text-[16px]">
                      <ul className="space-y-3">
                        <li>
                          The total cost of the
                          EB-5 process includes
                          the minimum investment
                          amount of $800,000 for
                          projects located in
                          designated Targeted
                          Employment Areas (TEAs),
                          which encompass rural
                          and high-unemployment
                          areas, or $1,050,000 if
                          located elsewhere.
                        </li>
                        <li>
                          In addition to the
                          investment, applicants
                          should budget for legal
                          fees, administration
                          fees, and the USCIS
                          filing fees– the
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
                      currentActiveAccordion2 ===
                      'item-4'
                        ? 'bg-white'
                        : ''
                    } p-4`}
                  >
                    <AccordionTrigger className="text-lg">
                      What is the filing fee for
                      an EB-5?
                    </AccordionTrigger>
                    <AccordionContent className="text-[16px]">
                      <ul className="space-y-3">
                        <li>
                          The USCIS charges a fee
                          to file Form I-526E,
                          also called the
                          Immigrant Petition for
                          Alien Entrepreneur Form.
                          The current filing fee
                          required for the form is
                          $11,160.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-5"
                    className={`${
                      currentActiveAccordion2 ===
                      'item-5'
                        ? 'bg-white'
                        : ''
                    } p-4`}
                  >
                    <AccordionTrigger className="text-lg">
                      Can I get a loan for an EB-5
                      investment?
                    </AccordionTrigger>
                    <AccordionContent className="text-[16px]">
                      <ul className="space-y-3">
                        <li>
                          You can get a loan from
                          a bank, a lending
                          institution, from
                          friends or family, or
                          even from a source in
                          the United States, so
                          long as the funds are
                          from lawful means.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-6"
                    className={`${
                      currentActiveAccordion1 ===
                      'item-6'
                        ? 'bg-white'
                        : ''
                    } p-4`}
                  >
                    <AccordionTrigger className="text-lg">
                      Can an EB-5 visa be delayed
                      or rejected?
                    </AccordionTrigger>
                    <AccordionContent className="text-[16px]">
                      <ul className="space-y-3">
                        <li>
                          Yes, an EB-5 visa can be
                          delayed or rejected at
                          any stage in the process
                          for various reasons. No
                          immigration attorney or
                          regional center can 100%
                          guarantee success.
                        </li>
                        <li>
                          The most common problems
                          encountered for EB-5
                          visa applications have
                          been related to
                          insufficient
                          documentation of the
                          source of funds by the
                          investor. Due to
                          privacy, and sometimes
                          cultural reasons, many
                          EB-5 investors try to
                          disclose the least
                          possible information
                          only to have the file
                          returned with a request
                          for further information.
                          It is better to provide
                          too much information
                          rather than too little.
                          In this era of terror
                          alerts and suspicions
                          about money laundering,
                          USCIS case examiners
                          require well-documented
                          support for the source
                          of your invested funds.
                        </li>
                        <li>
                          We use the same
                          investment model for
                          each case and each
                          project. USCIS has
                          reviewed our investment
                          model and has approved
                          visa petitions based on
                          our model. Furthermore
                          USCIS changes its
                          adjudication policies
                          from time to time. Such
                          changes often require
                          further explanation of
                          the project structure,
                          which can delay visa
                          approval, and
                          occasionally result in
                          visa denials. In the
                          unlikely event of visa
                          denial based on project
                          structure, American
                          Life, Inc. will defend
                          its investors’ interests
                          in Court at its expense.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div
              className="pt-8"
              ref={sectionRefs.section3}
            >
              <h3 className="text-2xl font-medium py-2 pl-6 border-l-8 border-highlight mb-8">
                H-1B Visa Holders
              </h3>
              <div className="border-t">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full text-lg"
                  onValueChange={(value) =>
                    setCurrentActiveAccordion3(
                      value
                    )
                  }
                >
                  <AccordionItem
                    value="item-1"
                    className={`${
                      currentActiveAccordion3 ===
                      'item-1'
                        ? 'bg-white'
                        : ''
                    } p-4`}
                  >
                    <AccordionTrigger className="text-lg">
                      What is the difference
                      between an H-1B visa and an
                      EB-5 visa?
                    </AccordionTrigger>
                    <AccordionContent className="text-[16px]">
                      <ul className="space-y-2">
                        <li>
                          The H-1B visa is a
                          temporary, nonimmigrant
                          visa, sponsored by an
                          employer. Foreign
                          nationals with an H-1B
                          visa may need to leave
                          the United States after
                          six years. EB-5 visas
                          provide permanent
                          residency and are tied
                          to the individual, not
                          an employer.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-2"
                    className={`${
                      currentActiveAccordion3 ===
                      'item-2'
                        ? 'bg-white'
                        : ''
                    } p-4`}
                  >
                    <AccordionTrigger className="text-lg">
                      What are the advantages and
                      disadvantages of an H-1B
                      visa?
                    </AccordionTrigger>
                    <AccordionContent className="text-[16px]">
                      <ul className="space-y-3">
                        <li>
                          The H-1B visa has a
                          number of advantages
                          over other nonimmigrant
                          visas, including a high
                          salary requirement, no
                          language requirement,
                          and no work experience
                          requirement (which means
                          recent graduates can
                          still be eligible). It
                          is also considered a
                          “dual intent” visa,
                          which means that you are
                          allowed to pursue
                          permanent residency
                          (like through an EB-5
                          visa) while under H-1B
                          nonimmigrant status. The
                          disadvantages of an H-1B
                          visa are that they are
                          dependent on the
                          sponsorship of an
                          employer, and they have
                          a time restriction of
                          six years. There is also
                          an annual limit to how
                          many petitions are
                          approved each year
                          (USCIS receives 3x the
                          amount that is alotted),
                          so most applicants must
                          be entered into a
                          lottery unless they are
                          considered cap-exempt.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-3"
                    className={`${
                      currentActiveAccordion3 ===
                      'item-3'
                        ? 'bg-white'
                        : ''
                    } p-4`}
                  >
                    <AccordionTrigger className="text-lg">
                      Can my spouse work if I have
                      an H-1B visa?
                    </AccordionTrigger>
                    <AccordionContent className="text-[16px]">
                      <ul className="space-y-3">
                        <li>
                          Spouses can be brought
                          to the U.S. under an H-4
                          visa. Fortunately, H-4
                          holders can work in the
                          U.S. after obtaining
                          Employment Authorization
                          Documents.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-4"
                    className={`${
                      currentActiveAccordion3 ===
                      'item-4'
                        ? 'bg-white'
                        : ''
                    } p-4`}
                  >
                    <AccordionTrigger className="text-lg">
                      Is the H-1B visa dependent
                      on the employer?
                    </AccordionTrigger>
                    <AccordionContent className="text-[16px]">
                      <ul className="space-y-3">
                        <li>
                          Yes, a U.S. employer
                          must sponsor your visa
                          in order for it to be
                          approved. The employer
                          must also prove the need
                          for the temporary
                          position, demonstrate
                          that there’s a lack of
                          qualified workers to do
                          the job in the U.S., pay
                          the H-1B worker a fair
                          wage, and in the event
                          that they end the
                          employment, they must
                          pay for the employee to
                          return home.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-5"
                    className={`${
                      currentActiveAccordion3 ===
                      'item-5'
                        ? 'bg-white'
                        : ''
                    } p-4`}
                  >
                    <AccordionTrigger className="text-lg">
                      Who pays for the H-1B visa?
                    </AccordionTrigger>
                    <AccordionContent className="text-[16px]">
                      <ul className="space-y-3">
                        <li>
                          In general, H-1B costs
                          and fees are paid for by
                          the U.S. employer.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div
              className="pt-8"
              ref={sectionRefs.section4}
            >
              <h3 className="text-2xl font-medium py-2 pl-6 border-l-8 border-highlight mb-8">
                Regional Center Due Dilligence
              </h3>
              <div className="border-t">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full text-lg"
                  onValueChange={(value) =>
                    setCurrentActiveAccordion4(
                      value
                    )
                  }
                >
                  <AccordionItem
                    value="item-1"
                    className={`${
                      currentActiveAccordion4 ===
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
                      <ul className="space-y-2">
                        <li>
                          An EB-5 regional center
                          is a private
                          organization
                          pre-designated by the
                          U.S. government for
                          participation in the
                          Immigrant Investor
                          program. A regional
                          center is authorized to
                          pool investments from
                          multiple EB-5 investors,
                          and oversee its use in
                          compliance with the EB-5
                          program.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-2"
                    className={`${
                      currentActiveAccordion4 ===
                      'item-2'
                        ? 'bg-white'
                        : ''
                    } p-4`}
                  >
                    <AccordionTrigger className="text-lg">
                      How can I tell if an EB-5
                      regional center is
                      legitimate?
                    </AccordionTrigger>
                    <AccordionContent className="text-[16px]">
                      <ul className="space-y-3">
                        <li>
                          You can head to the
                          USCIS website
                          https://www.uscis.gov/
                          and check if the
                          regional center you are
                          considering is listed as
                          an approved EB-5
                          immigrant investor
                          regional center. You can
                          also see if they are a
                          registered member with
                          IIUSA
                          https://iiusa.org/.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-3"
                    className={`${
                      currentActiveAccordion4 ===
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
                          Be Americans operates
                          the longest established
                          approved regional center
                          with USCIS
                          https://www.uscis.gov/.
                          With over 45 commercial
                          real estate projects
                          under our belt, you can
                          feel confident that
                          you’re getting a
                          trustworthy and
                          knowledgeable partner on
                          your EB-5 journey.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-4"
                    className={`${
                      currentActiveAccordion4 ===
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
                          An EB-5 promoter will
                          file an I-956F
                          application for project
                          approval with USCIS
                          documenting the
                          specifics of the actual
                          project, including
                          information on the
                          regional center, job
                          creation, and other
                          details of the project.
                          The EB-5 promoter should
                          provide you a copy of
                          the I-797 receipt for
                          this filing.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-5"
                    className={`${
                      currentActiveAccordion4 ===
                      'item-5'
                        ? 'bg-white'
                        : ''
                    } p-4`}
                  >
                    <AccordionTrigger className="text-lg">
                      How do I know if enough jobs
                      will be created to support
                      my EB-5 application?
                    </AccordionTrigger>
                    <AccordionContent className="text-[16px]">
                      <ul className="space-y-3">
                        <li>
                          An EB-5 project should
                          be able to provide you
                          with an economic study,
                          authored by an
                          independent professional
                          economist with
                          experience in EB-5,
                          clearly documenting the
                          U.S. jobs that will be
                          created by the EB-5
                          project you are
                          considering investing
                          in.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-6"
                    className={`${
                      currentActiveAccordion4 ===
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
                          evidence of previous
                          I-526 and I-829
                          approvals from the
                          regional center.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div
              className="pt-8"
              ref={sectionRefs.section5}
            >
              <h3 className="text-2xl font-medium py-2 pl-6 border-l-8 border-highlight mb-8">
                EB-5 ROI Debt vs Equity
              </h3>
              <div className="border-t">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full text-lg"
                  onValueChange={(value) =>
                    setCurrentActiveAccordion5(
                      value
                    )
                  }
                >
                  <AccordionItem
                    value="item-1"
                    className={`${
                      currentActiveAccordion5 ===
                      'item-1'
                        ? 'bg-white'
                        : ''
                    } p-4`}
                  >
                    <AccordionTrigger className="text-lg">
                      What is the EB-5 investor
                      rate of return?
                    </AccordionTrigger>
                    <AccordionContent className="text-[16px]">
                      <ul className="space-y-2">
                        <li>
                          As an Be Americans
                          equity-based investor,
                          you participate in the
                          profits of the project.
                          Our investment offering
                          documents include
                          forecasted returns and
                          profits from the
                          operations of the
                          project. The return on
                          investment is generally
                          much higher than
                          investors’ experience in
                          our competitors’ loan
                          models.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-2"
                    className={`${
                      currentActiveAccordion5 ===
                      'item-2'
                        ? 'bg-white'
                        : ''
                    } p-4`}
                  >
                    <AccordionTrigger className="text-lg">
                      What is Be Americans’s
                      success rate for receiving
                      the EB-5 visa?
                    </AccordionTrigger>
                    <AccordionContent className="text-[16px]">
                      <ul className="space-y-3">
                        <li>
                          Since 1996, the I-526
                          approval rate for Be
                          Americans has been
                          almost 100%. Any denials
                          or delays we have
                          experienced are
                          generally based on
                          issues with investors
                          proving the source of
                          their invested funds.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-3"
                    className={`${
                      currentActiveAccordion5 ===
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
                          A prospective investor
                          can first register by
                          filling out the contact
                          form, and an
                          accreditation form to
                          receive offering
                          materials (investment
                          offering prospectus).
                        </li>
                        <li>
                          In terms of investing,
                          once you sign the
                          official English version
                          of the subscription
                          agreement (in the
                          prospectus) and we
                          countersign the same
                          document, you are
                          admitted as a limited
                          partner. The next step
                          for the foreign investor
                          is to follow our wiring
                          instructions and send
                          the investment funds.
                          Typically within 1 to 2
                          days of your wire
                          transfer, our office
                          will send you a
                          confirmation of receipt
                          of the funds. If you are
                          an EB-5 investor, a copy
                          of the remittance
                          confirmation will also
                          be provided to your
                          immigration attorney, so
                          he or she can submit
                          your I-526 petition.
                        </li>
                        <li>
                          At any stage of your
                          decision-making process,
                          please feel free to
                          contact us via phone,
                          send us an email or set
                          an appointment online to
                          speak to one of our
                          managers.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-4"
                    className={`${
                      currentActiveAccordion5 ===
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
                          EB-5 investment to be
                          “at risk.” Be Americans
                          works to minimize that
                          risk with its
                          equity-based model of
                          investment.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-5"
                    className={`${
                      currentActiveAccordion5 ===
                      'item-5'
                        ? 'bg-white'
                        : ''
                    } p-4`}
                  >
                    <AccordionTrigger className="text-lg">
                      What are the risks for my
                      EB-5 investment?
                    </AccordionTrigger>
                    <AccordionContent className="text-[16px]">
                      <ul className="space-y-3">
                        <li>
                          As in any investment,
                          there is a risk of total
                          loss. By U.S.
                          regulations, all funds
                          must be put at risk.
                          Risk factors differ
                          among projects, but
                          general risks include
                          economic conditions,
                          owning of real estate
                          investments, law
                          changes, and other risks
                          related to a private
                          investment offering. For
                          a full list of risks
                          related to a particular
                          investment, please refer
                          to the offering
                          material.
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <FaqContact />
      </section>
    </>
  );
}
