import Image from 'next/image';
import React from 'react';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';
import {
  Autoplay,
  Parallax,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';

export default function Partners() {
  const colabs = [
    {
      img: 'https://amlife.us/wp-content/uploads/fly-images/868/Marriot-logo-grey-131x0.png',
      url: '/1',
    },
    {
      img: 'https://amlife.us/wp-content/uploads/fly-images/869/Marriott_International-grey-131x0.png',
      url: '/2',
    },
    {
      img: 'https://amlife.us/wp-content/uploads/fly-images/866/Courtyard-logo-grey-131x0.png',
      url: '/3',
    },
    {
      img: 'https://amlife.us/wp-content/uploads/fly-images/867/Fairfield-logo-grey-131x0.png',
      url: '/4',
    },
    {
      img: 'https://amlife.us/wp-content/uploads/fly-images/865/Hilton-logo-grey-131x0.png',
      url: '/5',
    },
  ];

  return (
    <section className="bg-white">
      <div className="container mx-auto pt-4 pb-6 flex lg:flex-row flex-col lg:items-center justify-between">
        <div className="">
          <p className="lg:w-96 text-2xl font-medium">
            Global Brands Choose to Partner with
            Be Americans
          </p>
        </div>
        <Swiper
          speed={3000}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          slidesPerView={3}
          watchSlidesProgress={true}
          spaceBetween={70}
          grabCursor={true}
          modules={[Autoplay, Parallax]}
          className="w-full parallax-slide"
        >
          {colabs.map((item) => (
            <SwiperSlide
              key={item.url}
              className=""
            >
              <div>
                <Link href={item.url}>
                  <Image
                    src={item.img}
                    width={500}
                    height={300}
                    alt="image"
                    className="w-32 h-32 object-contain object-center"
                    quality={100}
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
