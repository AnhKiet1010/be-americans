import React, { useRef, useState } from 'react';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';
import 'swiper/css';
import { Button } from '@/components/ui/button';

const Eb5ProcessSlide = () => {
  const [
    currentActiveSlide,
    setCurrentActiveSlide,
  ] = useState(0);
  const [swiperInstance, setSwiperInstance] =
    useState(null);

  const handleButtonClick = (index) => {
    if (swiperInstance) {
      setCurrentActiveSlide(index);
      swiperInstance.slideTo(index, 600); // Di chuyển đến slide chỉ định với 600ms transition
    }
  };

  return (
    <section className="pb-16 overflow-hidden">
      <h1 className="text-5xl font-semibold mb-10 text-center">
        EB-5 Process
      </h1>
      <div className="relative bg-[#9f9073] py-10">
        <div className="flex items-center justify-center gap-2 mb-4 z-10">
          {Array.from(
            { length: 12 },
            (_, index) => (
              <button
                key={index}
                onClick={() =>
                  handleButtonClick(index)
                }
                className={`${
                  currentActiveSlide === index
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-black'
                } h-8 w-8 rounded-full font-medium`}
              >
                {index + 1}
              </button>
            )
          )}
        </div>

        <div className="overflow-hidden">
          <Swiper
            onSwiper={setSwiperInstance}
            slidesPerView="auto"
            centeredSlides={true}
            spaceBetween={30}
            className="mt-10 swiper-progress"
            initialSlide={0}
          >
            <SwiperSlide className="!w-[400px]">
              <div className="flex flex-col items-center">
                <Button
                  className="mb-4 max-w-min rounded-2xl px-5 swiper-progress__title"
                  size="sm"
                >
                  Select an EB-5 Project
                </Button>
                <div className="bg-white p-8 rounded-lg">
                  <h5 className="text-2xl font-bold mb-2">
                    Investigating & Selecting Your
                    EB-5 Real Estate Project
                  </h5>
                  <p className="text-lg">
                    After you’ve had an initial
                    call with us, take a look at
                    our portfolio of past projects
                    to get a sense for the kinds
                    of projects Be Americans has
                    completed. With Be Americans,
                    every project has been
                    thoroughly vetted so you can
                    rest assured that you’re
                    making a safe, secure
                    investment in compliance with
                    all EB-5 visa requirements.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!w-[400px]">
              <div className="flex flex-col items-center">
                <Button
                  className="mb-4 max-w-min rounded-2xl px-5 swiper-progress__title"
                  size="sm"
                >
                  Choosing the Investment Model
                  for You
                </Button>
                <div className="bg-white p-8 rounded-lg">
                  <h5 className="text-2xl font-bold mb-2">
                    Unlike most other regional
                    centers, Be Americans offers
                    two investment options.
                  </h5>
                  <p>
                    <span>OPTION A:</span>
                  </p>
                  <p>
                    <span>
                      Preferred equity provides
                      investors with a similar
                      structure to an EB-5 “loan
                      model,” with a fixed return.
                    </span>
                  </p>
                  <p>
                    <span>OPTION B:&nbsp;</span>
                  </p>
                  <p>
                    <span>
                      As an equity owner, the EB-5
                      investor receives a more
                      significant but variable
                      portion of the distributed
                      income and capital gain
                      associated with their
                      limited partnership
                      interest.&nbsp;&nbsp;
                    </span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!w-[400px]">
              <div className="flex flex-col items-center">
                <Button
                  className="mb-4 max-w-min rounded-2xl px-5 swiper-progress__title"
                  size="sm"
                >
                  Capital Investment
                </Button>
                <div className="bg-white p-8 rounded-lg">
                  <h5 className="text-2xl font-bold mb-2">
                    Funding Your Investment
                  </h5>
                  <p className="text-lg">
                    Once you have a project
                    selected, you will need to
                    provide your investment funds
                    to us ($800,000 + syndication
                    fees depending on project).
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!w-[400px]">
              <div className="flex flex-col items-center">
                <Button
                  className="mb-4 max-w-min rounded-2xl px-5 swiper-progress__title"
                  size="sm"
                >
                  File Form I-526E
                </Button>
                <div className="bg-white p-8 rounded-lg">
                  <h5 className="text-2xl font-bold mb-2">
                    Working with an Immigration
                    Attorney
                  </h5>
                  <p className="text-lg">
                    You’ll want to select an
                    immigration attorney with
                    substantial EB-5 experience to
                    help you prepare documentation
                    that proves a lawful source of
                    funds, as well as file an
                    I-526E petition to the USCIS
                    on your behalf. You will then
                    need to wait to receive I-526E
                    approval from the U.S.
                    government before proceeding
                    unless you are able to use
                    concurrent filing.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!w-[400px]">
              <div className="flex flex-col items-center">
                <Button
                  className="mb-4 max-w-min rounded-2xl px-5 swiper-progress__title"
                  size="sm"
                >
                  Visa Application
                </Button>
                <div className="bg-white p-8 rounded-lg">
                  <h5 className="text-2xl font-bold mb-2">
                    After Receiving I-526 Approval
                  </h5>
                  <p className="text-lg">
                    Once you receive approval,
                    what you do next will depend
                    on your unique situation. If
                    you live in the U.S. in lawful
                    status and are otherwise
                    eligible, your immigration
                    attorney will file form I-485
                    so you can adjust your status.
                    If you live outside the U.S.,
                    you will file a form DS-260
                    with the National Visa Center.
                    You will then interview at a
                    local embassy or consulate
                    when a visa is available, and
                    receive your immigrant visa.
                    If you are not living in the
                    U.S., you will need to enter
                    the U.S. within 150 days.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!w-[400px]">
              <div className="flex flex-col items-center">
                <Button
                  className="mb-4 max-w-min rounded-2xl px-5 swiper-progress__title"
                  size="sm"
                >
                  Conditional Green Card
                </Button>
                <div className="bg-white p-8 rounded-lg">
                  <h5 className="text-2xl font-bold mb-2">
                    2-Year Conditional Permanent
                    Residency
                  </h5>
                  <p className="text-lg">
                    Once you enter the United
                    States, you will receive a
                    2-year conditional permanent
                    resident status. You’re only a
                    few steps away from a
                    permanent green card.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!w-[400px]">
              <div className="flex flex-col items-center">
                <Button
                  className="mb-4 max-w-min rounded-2xl px-5 swiper-progress__title"
                  size="sm"
                >
                  File Form I-829
                </Button>
                <div className="bg-white p-8 rounded-lg">
                  <h5 className="text-2xl font-bold mb-2">
                    Remove Conditions on Residence
                  </h5>
                  <p className="text-lg">
                    After the two years of
                    conditional residency, you
                    will file an I-829 petition to
                    remove the conditions on your
                    residency. You will want to
                    file removal of those
                    conditions within 90 days of
                    the end of the 2-year
                    conditional resident period.
                    Be Americans will supply all
                    supporting evidence that you
                    met the requirements of the
                    EB-5 program including
                    evidence of the limited
                    partnership’s success, your
                    sustained capital investment,
                    and the creation of direct and
                    indirect employment.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!w-[400px]">
              <div className="flex flex-col items-center">
                <Button
                  className="mb-4 max-w-min rounded-2xl px-5 swiper-progress__title"
                  size="sm"
                >
                  Permanent Green Card
                </Button>
                <div className="bg-white p-8 rounded-lg">
                  <h5 className="text-2xl font-bold mb-2">
                    The Final Step
                  </h5>
                  <p className="text-lg">
                    Once the I-829 petition is
                    filed with the USCIS, your
                    conditional permanent
                    residency is extended while
                    you wait for your official
                    approval from USCIS. Once you
                    receive final approval, you
                    will receive a permanent
                    residency card. You are now
                    able to stay in the United
                    States indefinitely.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!w-[400px]">
              <div className="flex flex-col items-center">
                <Button
                  className="mb-4 max-w-min rounded-2xl px-5 swiper-progress__title"
                  size="sm"
                >
                  Eligibility for Citizenship
                </Button>
                <div className="bg-white p-8 rounded-lg">
                  <h5 className="text-2xl font-bold mb-2">
                    Optional: Become a U.S.
                    Citizen
                  </h5>
                  <p className="text-lg">
                    The EB-5 program not only
                    provides a pathway to
                    permanent residency, but U.S.
                    citizenship as well. Five
                    years after receiving your
                    first conditional green card,
                    you are eligible to file an
                    N-400 naturalization
                    application with USCIS to
                    become a U.S. Citizen.&nbsp;
                    Congratulations!
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Eb5ProcessSlide;
