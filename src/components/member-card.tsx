import Image from 'next/image';
import React from 'react';

export default function MemberCard({ member }) {
  return (
    <div className="relative w-56 rounded-xl overflow-hidden max-h-min">
      <Image
        src={member.avatar}
        width={448}
        height={562}
        alt="image"
        className="w-56"
      />
      <div className="absolute w-full bottom-0 text-white px-6 pb-4 bg-gradient-to-t from-black/80 to-black/1">
        <p>{member.name}</p>
        <p className="text-xs">
          {member.position}
        </p>
      </div>
    </div>
  );
}
