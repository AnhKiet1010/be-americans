'use client';

import {
  useEffect,
  useRef,
  useState,
} from 'react';
import Hero from '@/components/hero';
import Image from 'next/image';
import ReadMore from '@/components/read-more';
import { teams } from '@/constants/teams';
import MemberCard from '@/components/member-card';

export default function Team() {
  const [activeSection, setActiveSection] =
    useState(null);

  const sectionRefs = {
    section0: useRef(null),
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
    section5: useRef(null),
    section6: useRef(null),
    section7: useRef(null),
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
      <Hero img="https://amlife.us/wp-content/uploads/fly-images/1142/Header-Image-2560x0.png">
        <div className="lg:max-w-6xl mx-auto border-l-8 border-highlight pl-10 lg:space-y-6 space-y-4">
          <strong className="block lg:text-sm text-xs text-highlight uppercase">
            Our Team
          </strong>
          <h1 className="w-full lg:text-6xl text-4xl text-white font-medium">
            The People Who Are Passionate About
            Securing Your{' '}
            <strong className="text-highlight font-accent italic">
              Be Americans
            </strong>
          </h1>
        </div>
      </Hero>
      <section className="py-16">
        <div className="container flex gap-10">
          <div className="relative hidden lg:block ">
            <div className="w-[390px] sticky bg-gray-50 top-4 p-6 border rounded-lg space-y-2">
              {teams.map((member, index) => (
                <div
                  key={member.name}
                  className={`flex gap-2 shadow-sm hover:bg-primary px-4 cursor-pointer hover:text-white font-semibold py-3 rounded-lg ${
                    activeSection ===
                    `section${index}`
                      ? 'bg-primary text-white'
                      : 'text-gray-700 bg-white'
                  }`}
                  onClick={() =>
                    handleScrollToSection(
                      `section${index}`
                    )
                  }
                >
                  <div>
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={100}
                      height={100}
                      className="w-10 h-10 rounded-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <p>{member.name}</p>
                    <p className="text-xs">
                      {member.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            {teams.map((member, index) => (
              <div
                className={`${
                  index !== 0 ? 'py-4' : 'pb-4'
                }`}
                ref={
                  sectionRefs[`section${index}`]
                }
              >
                <div
                  key={member.name}
                  className={`flex flex-col xl:flex-row gap-8  items-start border border-gray-300 bg-white rounded-lg p-6`}
                >
                  <MemberCard member={member} />
                  <div className="flex-1">
                    <ReadMore
                      text={member.desc}
                      maxLength={350}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
