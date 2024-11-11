import React from 'react';
import Image from 'next/image';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';

import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { realEstates } from '@/constants/real-estates';

const RealEstateProtfolio = () => {
  return (
    <div className="w-full">
      <div className="container space-y-6 py-10">
        <h1 className="text-4xl font-bold text-center mt-8">
          Our $1.5 Billion Investor-Owned Real
          Estate Portfolio
        </h1>
        <p className="text-lg text-center">
          Our portfolio of critically-acclaimed
          EB-5 equity projects includes
          partnerships with global brands like
          Marriott, Hilton and Hyatt hotels. It’s
          proof of our ability to develop
          successful, job-creating EB-5 projects
          that enhance the communities we work in,
          while also helping our investors achieve
          their American dream.
        </p>
      </div>
      <div className="w-full mt-4 mb-10">
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
          {realEstates.map((item) => (
            <SwiperSlide
              key={item.title}
              className=""
            >
              <div className="relative flex flex-col gap-4 hover:opacity-80">
                <Image
                  src={item.img}
                  width={500}
                  height={300}
                  alt="image"
                  className="rounded-t-md overflow-hidden"
                  quality={100}
                />
                <h3 className="text-xl font-medium">
                  {item.title}
                </h3>
                <p>{item.desc}</p>
                <div className="absolute top-2 left-2 flex gap-2 items-center">
                  <div className="px-4 py-1 rounded-2xl bg-purple-200 font-semibold text-sm">
                    {item.year}
                  </div>
                  <div className="px-4 py-1 rounded-2xl bg-green-200 text-green-800 uppercase font-semibold text-sm">
                    {item.status}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RealEstateProtfolio;
