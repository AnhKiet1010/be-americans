import { cards } from '@/constants/cards';
import React from 'react';

const PartnersTrustedList = ({ cardBg }) => {
  return (
    <div className="w-full mt-8 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 px-8">
      {cards.map((card) => (
        <div
          key={card.label}
          className={`group lg:w-60 lg:h-32 w-36 h-24 ${
            cardBg ? cardBg : 'bg-background'
          } [perspective:1000px]`}
        >
          <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div
              className={`absolute w-full h-full inset-0 ${
                cardBg ? cardBg : 'bg-background'
              } flex flex-col justify-center items-center`}
            >
              <h3 className="lg:text-4xl text-3xl font-accent font-medium">
                {card.label}
              </h3>
              <p className="w-2/3 font-semibold mt-2 text-center text-sm lg:text-md">
                {card.desc}
              </p>
            </div>
            <div className="absolute flex flex-col justify-center items-center bg-primary text-white inset-0 h-full w-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <h3 className="lg:text-4xl text-3xl font-accent font-medium">
                {card.label}
              </h3>
              <p className="w-2/3 font-semibold mt-2 text-center text-sm lg:text-md">
                {card.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartnersTrustedList;
