import React from 'react';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

const UpdatedInfo = () => {
  const updatedInfos = [
    {
      title:
        'I-956F Approved for Marriott SpringHill Suites Project',
      desc: 'Be Americans is pleased to announce that USCIS has approved our I-956F…',
      link: '/#',
    },
    {
      title:
        'IIUSA Webinar: EB-5 Regional Center Audits',
      desc: 'The EB-5 Reform and Integrity Act of 2022 (RIA) requires Regional Centers to undergo…',
      link: '/#',
    },
    {
      title:
        'IIUSA’s Passport Series – Latin America and Southeast Asia',
      desc: 'Jennifer Smith, the Director of Business Development, shared insights and expertise on…',
      link: '/#',
    },
    {
      title:
        'Darrell Sanders Nominated to the Board of Directors of IIUSA',
      desc: 'Be Americans is proud to announce that Darrell Sanders, Vice President of…',
      link: '/#',
    },
    {
      title: 'AILA Chicago – June 12-15, 2024',
      desc: 'Be Americans is delighted to participate in AILA’s annual conference in the…',
      link: '/#',
    },
    {
      title:
        'Be Americans Joins Lawsuit Against USCIS Over EB-5 Petition Fee Increases',
      desc: 'Be Americans, along with Invest in the USA (IIUSA)  https://iiusa.org/, the national…',
      link: '/#',
    },
    {
      title:
        'Investment Migration Council Annual Conference – Dubai 2024',
      desc: 'Darrell Sanders, Vice President of Investment Programs, was invited to speak on…',
      link: '/#',
    },
    {
      title:
        'Introduction of the EB-5 Regional Center Program Advisory Committee Authorization Act',
      desc: 'Invest in the USA (IIUSA) has announced the introduction of bipartisan bill…',
      link: '/#',
    },
    {
      title:
        'Marriott Fairfield Inn & Suites Hotel – One Year Anniversary',
      desc: 'The Marriott Fairfield Inn & Suites Hotel, located in Lancaster, California celebrated…',
      link: '/#',
    },
    {
      title:
        'International Fair for Immigration, Education, and Investment',
      desc: 'Be Americans was excited to be a part of the semiannual International…',
      link: '/#',
    },
    {
      title:
        'Exciting Project Milestone Achieved!',
      desc: 'We’re thrilled to announce that we have received our first I-526 approval…',
      link: '/#',
    },
  ];
  return (
    <div className="my-16">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-center">
          Get Updates from Be Americans
        </h1>
        <p className="text-lg text-center text-gray-600">
          Sign up to get the latest EB-5 news,
          policy changes, and more.
        </p>
      </div>
      <div className="mt-10">
        <Swiper
          autoplay={{
            delay: 1000,
          }}
          loop={true}
          slidesPerView={3}
          spaceBetween={20}
          centeredSlides={true}
          modules={[Autoplay]}
          className="w-full"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            2000: {
              slidesPerView: 7,
              spaceBetween: 30,
            },
          }}
        >
          {updatedInfos.map((item) => (
            <SwiperSlide
              key={item.title}
              className=""
            >
              <div className="space-y-4">
                <h4 className="text-xl font-medium">
                  {item.title}
                </h4>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default UpdatedInfo;
