import Link from 'next/link';
import React from 'react';

export default function Tag({
  text,
  count,
}: {
  text: string;
  count?: number;
}) {
  // <Link
  //   href={`/tag/${text}`}
  //   className="uppercase duration-150 divide-x-[1px] hover:divide-gold divide-text outline outline-text outline-1 hover:scale-105 hover:outline-gold hover:text-gold"
  // >
  //   <span className="px-2">{text}</span>
  //   {count && <span className="px-2">{count}</span>}
  // </Link>
  if (count) {
    return (
      <Link
        href={`/tag/${text}`}
        className="inline-flex flex-row items-center relative rounded border border-gray-700 hover:opacity-70 font-medium mt-2 mb-2 mr-2 bg-day bg-opacity-50"
      >
        <p className="px-2 py-1 sm:text-sm text-xs font-medium hover:text-primary-600">
          {text}
        </p>
        <p className="inline-flex items-center h-full border-gray-700 border-l px-2 bg-gray-300 rounded-r sm:text-sm text-xs font-semibold">
          {count}
        </p>
      </Link>
    );
  } else {
    return (
      <Link
        href={`/tag/${text}`}
        className="inline-flex flex-row items-center relative rounded border border-gray-700 hover:opacity-70 font-medium mt-2 mb-2 mr-2 bg-day bg-opacity-50"
      >
        <p className="px-2 py-1 sm:text-sm text-xs font-medium hover:text-primary-600">
          {text}
        </p>
      </Link>
    );
  }
}
