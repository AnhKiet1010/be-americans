import Image from 'next/image';
import React from 'react';

export default function Hero({ img, children }) {
  return (
    <section className="relative w-full max-h-[696px] -z-10">
      <div className="w-full h-full">
        <Image
          src={img}
          className="lg:h-[550px] h-[400px] object-cover"
          width={2560}
          height={946}
          alt="image"
        />
        <div className="absolute w-full inset-0 bg-[#0e122c] bg-opacity-85"></div>
      </div>
      <div className="absolute top-1/2 transform -translate-y-2/3 w-full z-10">
        <div className="container mx-auto w-full h-full flex justify-center items-center">
          {children}
        </div>
      </div>
    </section>
  );
}
