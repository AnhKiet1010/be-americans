import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <div className="bg-white py-10">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between lg:items-center gap-10">
          <div className="lg:w-1/2 w-full">
            <h1 className="text-4xl font-semibold">
              Get Updates from Be Americans
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Sign up to get the latest EB-5 news,
              policy changes, and more.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            {/* <div className="w-full flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <Input
                placeholder="Your Email"
                className="w-full md:w-80 h-10 text-md md:flex-1"
              />
              <Button className="h-10 max-w-min">
                Subscribe
              </Button>
            </div> */}
            <iframe
              src="https://embeds.beehiiv.com/e637c81d-8893-48c3-9af9-01ae43985a54?slim=true"
              data-test-id="beehiiv-embed"
              height="52"
              frameBorder="0"
              scrolling="no"
              // style="margin: 0; border-radius: 0px !important; background-color: transparent;"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
      <section className="bg-[#0d1b23] text-white">
        <div className="container py-16 mx-auto border-b border-white flex flex-col items-center gap-6">
          <h1 className="text-3xl font-semibold text-center md:text-left">
            Start Your EB-5 Journey with American
            Life Today
          </h1>
          <p className="text-lg text-center md:text-left">
            Still have questions? Please reach out
            to schedule a call with one of our
            experts.
          </p>
          <Button
            className="max-w-min bg-white text-black font-semibold"
            size="lg"
          >
            Schedule a Call
          </Button>
        </div>
        <div className="container border-b mx-auto py-8 md:py-16 grid md:grid-cols-4 gap-8 md:gap-0">
          <div className="">
            <p className="text-sm text-gray-400 mb-4 font-semibold">
              EB-5 Visa Program
            </p>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/"
                  className="hover:text-highlight font-semibold"
                >
                  EB-5 Program
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-highlight font-semibold"
                >
                  EB-5 Cost & Process
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-highlight font-semibold"
                >
                  H-1B Visa Holders
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-highlight font-semibold"
                >
                  Regional Center Due Diligence
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-highlight font-semibold"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="text-sm text-gray-400 mb-4 font-semibold">
              Investor Success
            </p>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/"
                  className="hover:text-highlight font-semibold"
                >
                  Investor Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-highlight font-semibold"
                >
                  Investor Support
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-highlight font-semibold"
                >
                  EB-5 ROI Equity vs. Debt
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="text-sm text-gray-400 mb-4 font-semibold">
              Investor Resources
            </p>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/"
                  className="hover:text-highlight font-semibold"
                >
                  News & Events
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-highlight font-semibold"
                >
                  Education & Downloads
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-highlight font-semibold"
                >
                  Project Profolio
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <p className="text-sm text-gray-400 mb-4 font-semibold">
              About Be Americans
            </p>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/"
                  className="hover:text-highlight font-semibold"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-highlight font-semibold"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-highlight font-semibold"
                >
                  Schedule a Call
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto md:py-16 py-8 flex flex-col-reverse md:flex-row md:gap-40">
          <div>
            © 2024 Be Americans. All rights
            reserved. The information presented
            here is forward looking and brief.
            Every investor must review the full
            materials about a potential investment
            opportunity, including the offering
            memorandum that describes investment
            and immigration risks in detail. Every
            investor will be required to show that
            he or she is investing from outside
            the U.S. or is an “accredited
            investor.” Past success does not
            guarantee future results.
          </div>
          <Image
            src="/logo-removebg.webp"
            width={100}
            height={100}
            alt="image"
          />
        </div>
      </section>
    </>
  );
}
