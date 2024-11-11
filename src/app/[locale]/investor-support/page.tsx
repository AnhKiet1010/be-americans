'use client';

import Image from 'next/image';

export default function InvestorSupport() {
  return (
    <>
      <section className="lg:py-16 py-8">
        <div className="container mx-auto space-y-16">
          <div className="space-y-6">
            <h1 className="text-4xl font-medium">
              Investor Support - Support You Can
              Count On
            </h1>
            <p className="text-lg">
              Our dedicated team of professionals
              is committed to providing our
              investors a positive experience as
              they complete their EB-5 investment
              journey.
            </p>
          </div>
        </div>
        <div className="w-full my-8">
          <Image
            src="https://amlife.us/wp-content/uploads/2024/04/FeaturedImage-scaled.jpg"
            width={2560}
            height={813}
            alt="image"
            className="w-full max-h-[500px] object-cover object-center"
          />
        </div>
        <div className="container mx-auto">
          <h3 className="text-2xl font-medium">
            Here’s what to expect after you make
            your investment:
          </h3>
          <ul className="list-disc text-lg my-6 pl-4">
            <li>
              We’ll provide a fully developed
              project filing template and support
              to your immigration attorney in
              their preparation and submission of
              your I-526E petition.
            </li>
            <li>
              We’ll provide assistance in
              addressing any questions, updates or
              concerns USCIS might ask regarding
              the I-829 project you have invested
              in.
            </li>
            <li>
              We provide regular updates on the
              progress of the project and required
              job creation.
            </li>
            <li>
              You will have secure access to
              project information and other
              documentation 24 hours a day via our
              online Investor Portal.
            </li>
            <li>
              You are always welcome to visit the
              project or come see us at our
              offices at any pre-arranged time.
            </li>
            <li>
              Once open and operating, you will
              receive quarterly updates regarding
              the financial performance of your
              project, including financial reports
              and declared profit distributions
              for the financial period.
            </li>
            <li>
              Your profit distribution will be
              promptly sent directly to your bank
              account at the conclusion of each
              business quarter via electronic
              deposit (ACH).
            </li>
            <li>
              We will complete the preparation of
              your annual U.S. tax K-1 form (or
              K-3, if appropriate).
            </li>
            <li>
              You have access to our investor
              relations department for any further
              questions or concerns.
            </li>
            <li>
              We will provide a filing template
              and full support to your immigration
              attorney in their preparation and
              submission of your I-829 template
              when eligible, including all
              evidence to support sustainment and
              required job creation.
            </li>
          </ul>
          <p className="text-lg">
            And of course, you have the full
            support from our team of financial and
            real estate professionals regarding
            your investment, whether you choose to
            remain invested with Be Americans, or
            you decide to leave the partnership
            and sell your investment unit.
          </p>
        </div>
      </section>
    </>
  );
}
