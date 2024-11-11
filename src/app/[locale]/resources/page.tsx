'use client';

import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import Link from 'next/link';

export default function Resource() {
  const resources = [
    {
      icon: <Globe color="gray" size={48} />,
      title: 'USCIS EB-5 Program Website',
      desc: 'The United States Citizenship & Immigration Service (USCIS) official information on the EB-5 Program.',
      link: 'https://www.uscis.gov/working-in-the-united-states/permanent-workers/eb-5-immigrant-investor-program',
    },
    {
      icon: <Globe color="gray" size={48} />,
      title:
        'American Immigration Lawyers Association (AILA) Website',
      desc: 'American Immigration Lawyers Association Website',
      link: 'https://www.aila.org/',
    },
    {
      icon: <Globe color="gray" size={48} />,
      title: 'Visa Bulletin',
      desc: 'The U.S. Department of State’s monthly notice showing visa availability by category and country.',
      link: 'https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html',
    },
    {
      icon: <Globe color="gray" size={48} />,
      title:
        'Invest in the USA (IIUSA) | National Trade Association of EB-5',
      desc: 'Invest in the USA (IIUSA) is the EB-5 regional center industry trade group.',
      link: 'https://iiusa.org/',
    },
  ];
  return (
    <>
      <section className="py-16">
        <div className="container mx-auto space-y-16">
          <div className=" flex flex-col gap-8">
            <p className="text-highlight uppercase font-bold text-sm">
              Education & Downloads
            </p>
            <h1 className="text-5xl font-medium">
              Resources to Help You Make an
              Informed Decision
            </h1>
            <p className="text-lg">
              As the longest established EB-5
              program in the United States, we
              have amassed a library of resources
              through the years with the goal of
              helping investors better understand
              the EB-5 process. We want you to
              feel as prepared and knowledgeable
              as possible during your entire
              investment journey. And of course,
              you can always schedule a call with
              a member of our team if you have any
              additional questions.
            </p>
          </div>
          <div className="space-y-8">
            {resources.map((resource) => (
              <div className="flex flex-col md:flex-row justify-between bg-gray-200 p-8 gap-4 md:gap-8 border rounded-xl border-gray-400">
                <div className="w-16 h-16 flex items-center justify-center bg-white border rounded-xl border-gray-400 p-4">
                  {resource.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-gray-700">
                    {resource.title}
                  </h4>
                  <p className="text-lg mt-4">
                    {resource.desc}
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="border-gray-400 max-w-min"
                >
                  <Link href={resource.link}>
                    View
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
