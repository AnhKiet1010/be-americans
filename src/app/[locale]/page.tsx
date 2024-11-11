'use client';

import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';
import {
  EffectFade,
  Autoplay,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  ArrowRight,
  CreditCard,
  Info,
} from 'lucide-react';
import PartnersTrustedList from '@/components/partners-trusted';
import KnowUs from '@/components/know-us';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const stories = [
  {
    message:
      'We were very nervous at the outset because we had heard of so many people who had invested in other opportunities which had turned out badly. However, we did our research, met with Henry Liebman and decided to take the risk. Having just received a substantial profit on our original investment with the sale of the building we invested in, we couldn’t be happier.',
    name: 'Fran & David H1.',
    status: 'I-829 Approved',
    year: '2023',
  },
  {
    message:
      'I stayed at the Marriott Residence Inn last night for the first time and I wanted to drop a note to congratulate you on the fantastic property, location and execution.',
    name: 'Fran & David H2.',
    status: 'I-829 Approved',
    year: '2023',
  },
  {
    message:
      'Our I-829 petition was approved today! Thank you very much for being there for every step of the EB-5 process. I truly recommend Be Americans to anyone using the EB-5 program and searching for a good project. We also enjoyed our visit to the project last year and hope to see you all again soon.',
    name: 'Fran & David H3.',
    status: 'I-829 Approved',
    year: '2023',
  },
  {
    message:
      'It may seem like a giant leap for a UK citizen to hand over a large sum of money to an “unknown” organization nearly 6,000 miles away, but if my experience is anything as a guide and you really want to fulfill your dream of moving to the States, I cannot think of a better firm to help you do just that..',
    name: 'Fran & David H4.',
    status: 'I-829 Approved',
    year: '2023',
  },
  {
    message:
      'We were very nervous at the outset because we had heard of so many people who had invested in other opportunities which had turned out badly. However, we did our research, met with Henry Liebman and decided to take the risk. Having just received a substantial profit on our original investment with the sale of the building we invested in, we couldn’t be happier.',
    name: 'Fran & David H5.',
    status: 'I-829 Approved',
    year: '2023',
  },
  {
    message:
      'We were very nervous at the outset because we had heard of so many people who had invested in other opportunities which had turned out badly. However, we did our research, met with Henry Liebman and decided to take the risk. Having just received a substantial profit on our original investment with the sale of the building we invested in, we couldn’t be happier.',
    name: 'Fran & David H6.',
    status: 'I-829 Approved',
    year: '2023',
  },
  {
    message:
      'We were very nervous at the outset because we had heard of so many people who had invested in other opportunities which had turned out badly. However, we did our research, met with Henry Liebman and decided to take the risk. Having just received a substantial profit on our original investment with the sale of the building we invested in, we couldn’t be happier.',
    name: 'Fran & David H7.',
    status: 'I-829 Approved',
    year: '2023',
  },
  {
    message:
      'We were very nervous at the outset because we had heard of so many people who had invested in other opportunities which had turned out badly. However, we did our research, met with Henry Liebman and decided to take the risk. Having just received a substantial profit on our original investment with the sale of the building we invested in, we couldn’t be happier.',
    name: 'Fran & David H8.',
    status: 'I-829 Approved',
    year: '2023',
  },
];

export default function HomePage() {
  const t = useTranslations('');

  return (
    <>
      <section className="relative w-full max-h-[696px] -z-10">
        <div className="w-full h-full">
          <Swiper
            modules={[EffectFade, Autoplay]}
            effect="fade"
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 20000,
            }}
            className="lg:h-[696px] h-[400px]"
          >
            <SwiperSlide className="relative">
              <img
                src="https://amlife.us/wp-content/uploads/fly-images/394/img-hero-05@2x-scaled-2560x0.jpg"
                alt="img-hero-05"
                className="w-full h-full object-cover animate-zoomAndMove"
              />
              <div className="absolute w-full inset-0 bg-[#0e122c] bg-opacity-85"></div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <img
                src="https://amlife.us/wp-content/uploads/fly-images/395/img-hero-04@2x-scaled-2560x0.jpg"
                alt="img-hero-04"
                className="w-full h-full object-cover animate-zoomAndMove"
              />
              <div className="absolute w-full inset-0 bg-[#0e122c] bg-opacity-85"></div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <img
                src="https://amlife.us/wp-content/uploads/fly-images/398/img-hero-01@2x-scaled-2560x0.jpg"
                alt="img-hero-01"
                className="w-full h-full object-cover animate-zoomAndMove"
              />
              <div className="absolute w-full inset-0 bg-[#0e122c] bg-opacity-85"></div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              <img
                src="https://amlife.us/wp-content/uploads/fly-images/396/img-hero-03@2x-scaled-2560x0.jpg"
                alt="img-hero-03"
                className="w-full h-full object-cover animate-zoomAndMove"
              />
              <div className="absolute w-full inset-0 bg-[#0e122c] bg-opacity-85"></div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="absolute top-1/2 transform -translate-y-2/3 w-full z-10">
          <div className="container mx-auto w-full h-full flex justify-center items-center">
            <div className="lg:max-w-6xl mx-auto border-l-8 border-highlight pl-10 lg:space-y-6 space-y-4">
              <strong className="block lg:text-sm text-xs text-highlight uppercase">
                {t('home.title')}
              </strong>
              <h1 className="w-full lg:text-6xl text-3xl text-white font-medium">
                We Help Turn the American Dream
                into an{' '}
                <strong className="text-highlight font-accent italic">
                  Be Americans
                </strong>
              </h1>
              <p className="lg:text-lg text-md text-white font-normal">
                Invest in your future with Be
                Americans – the leader in EB-5
                real estate development.
              </p>
              <Button variant="outline">
                <Link
                  href="/"
                  className="text-sm font-medium"
                >
                  Schedule a Call
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full lg:-mt-32 -mt-16 z-10">
        <div className="container video mx-auto mb-18 lg:max-w-[900px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/qyirogTKVpk"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen={true}
            className="h-64 lg:h-[500px] rounded-xl"
          ></iframe>
        </div>
        <div className="container mx-auto flex flex-col items-center gap-4 lg:gap-8 mt-16">
          <p className="uppercase font-bold text-highlight text-sm lg:text-md">
            since 1996
          </p>
          <h1 className="lg:text-5xl text-2xl text-center font-bold">
            Partner with the Trusted Name in EB-5
            Immigration
          </h1>
          <p className="lg:text-lg text-md text-center">
            Be Americans is the longest
            established EB-5 program in the United
            States, helping thousands of investors
            and their families achieve their
            American Dream.
          </p>
          <p className="lg:text-lg text-md">
            Are you ready to get started?
          </p>
          <PartnersTrustedList cardBg="bg-white" />
        </div>
      </section>
      <KnowUs />
      <section className="mt-32">
        <div className="relative">
          <Image
            src="https://amlife.us/wp-content/uploads/fly-images/453/bg-quote-01@2x-scaled-2560x0.jpg"
            alt="image"
            width={1024}
            height={2000}
            sizes="100"
            className="w-full h-[1100px] lg:max-h-[800px] object-cover"
          />
          <div className="flex absolute flex-col gap-4 lg:gap-0 lg:flex-row top-1/2 container transform left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
            <div className="lg:w-1/2 z-10 h-inherit flex items-center">
              <div className="bg-[#19455d] lg:-mr-32 p-10 space-y-4 rounded-sm">
                <h1 className="lg:text-6xl text-5xl font-bold border-l-8 border-highlight">
                  “Nearly 30 years
                </h1>
                <p className="text-lg">
                  and several thousand families
                  later, Be Americans continues to
                  create opportunities and earn
                  investors’ trust in helping them
                  find their American dream.”
                </p>
                <p className="text-lg">
                  - Henry Liebman, CEO of American
                  Life
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 lg:-mr-32">
              <Image
                src="https://amlife.us/wp-content/uploads/fly-images/1155/Henry_Homepage_2-625x0.jpg"
                width={600}
                height={600}
                alt="image"
                className="w-full lg:max-h-[600px]"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#19455d] py-10">
          <div className="container flex flex-col gap-4 xl:flex-row justify-center lg:justify-between items-center">
            <div className="flex items-center">
              <Image
                src="/logo-removebg.webp"
                width={100}
                height={100}
                alt="image"
              />
              <span className="text-white text-2xl font-bold mr-4">
                VS
              </span>
              <div className="flex flex-col items-center text-white px-3 py-1 bg-black/80 rounded-lg">
                <CreditCard size={36} />
                <span className="text-sm">
                  DEBT
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center text-white">
              <p className="text-2xl font-medium text-center lg:text-left">
                How does the EB-5 Equity Model
                Compare to the Debt Model?
              </p>
              <p className="text-lg my-4 text-center lg:text-left">
                See what sets Be Americans apart
                from most regional center
                programs.
              </p>
            </div>
            <Button
              variant="outline"
              size="lg"
              className="w-full lg:max-w-min"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
      <section className="py-16 flex flex-col items-center gap-6 bg-white">
        <p className="text-highlight font-semibold">
          Over 3,000 Families & Counting
        </p>
        <h3 className="text-3xl font-semibold mb-10">
          Behind Every EB-5 Visa is a Story.
        </h3>
        <div className="w-full">
          <Swiper
            slidesPerView={6}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              912: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1300: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              1520: {
                slidesPerView: 6,
                spaceBetween: 50,
              },
            }}
          >
            {stories.map((story) => (
              <SwiperSlide
                key={story.name}
                className="bg-white border py-8 px-4 shadow-lg rounded-sm"
              >
                <div className="space-y-4">
                  <p>{story.message}</p>
                  <div>
                    <p>{story.name}</p>
                    <p>{story.status}</p>
                  </div>
                  <p className="font-semibold">
                    {story.year}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 md:py-16 py-6">
          <div className="border rounded-md h-full flex flex-col">
            <div className="bg-white p-10 space-y-4 flex-1">
              <h3 className="font-bold text-xl">
                Is the EB-5 Program Right for You?
              </h3>
              <p className="text-lg">
                The first step on your journey to
                permanent residency is finding out
                if you qualify. Take a look at the
                criteria– from investment minimums
                to sourcing your funds. This
                should help you assess if the EB-5
                program is the right path for you
                and your family.
              </p>
            </div>
            <div className="p-6">
              <Button
                className="w-full"
                size="lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-highlight font-semibold">
              Qualification
            </p>
            <h1 className="text-3xl font-semibold">
              EB-5 Visa Eligibility Criteria
            </h1>
            <ul className="px-4 list-disc text-gray-600">
              <li>
                You are able to invest the
                required minimum amount (starting
                at $800,000 + syndication fees)
                depending on the location of the
                project
              </li>
              <li>
                Your investment through American
                Life finances a development
                project in the United States that
                will create a minimum of 10
                full-time jobs per investor for
                U.S. workers{' '}
              </li>
              <li>
                You are able to demonstrate that
                your investment funds come from a
                lawful source
              </li>
              <li>
                You have a willingness to place
                capital at risk with the goal of
                generating a return
              </li>
            </ul>
            <div className="bg-white flex text-sm gap-4 py-4 px-4 border border-blue-500 rounded-md">
              <div>
                <Info />
              </div>
              <div className="space-y-2">
                <p className="font-semibold">
                  Any Questions?
                </p>
                <p>
                  If you’re unsure if you qualify
                  based on the criteria listed
                  here, feel free to give us a
                  call.
                </p>
                <div className="flex gap-2 text-perple-900 font-medium">
                  Talk to an Expert{' '}
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
