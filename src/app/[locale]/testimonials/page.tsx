'use client';

import { Button } from '@/components/ui/button';

export default function Testimonials() {
  const testimonials = [
    {
      text: 'Our I-829 petition was approved today! Thank you very much for being there for every step of the EB-5 process. I truly recommend Be Americans to anyone using the EB-5 program and searching for a good project. We also enjoyed our visit to the project last year and hope to see you all again soon.',
      author: 'J. Wang',
      status: 'I-829 Approved',
      year: '2023',
    },
    {
      text: `I stayed at the Marriott Residence Inn last night for the first time and I wanted to drop a note to congratulate you on the fantastic property, location and execution.
Also to thank you, both Asha and I are super glad that we invested through Be Americans and this property.`,
      author: 'Rahul S.',
      status: 'I-829 Approved',
      year: '2023',
    },
    {
      text: 'My (EB-5) investment in Seattle not only resulted in our family’s green cards, but the profits from the project paid for our son’s university education! Thank you so much for helping us find our new life here in the United States.',
      author: 'C. Jeong',
      status: 'I-829 Approved',
      year: '2022',
    },
    {
      text: 'It may seem like a giant leap for a UK citizen to hand over a large sum of money to an “unknown” organization nearly 6,000 miles away, but if my experience is anything as a guide and you really want to fulfill your dream of moving to the States, I cannot think of a better firm to help you do just that.',
      author: 'John B.',
      status: 'I-829 Approved',
      year: '2022',
    },
    {
      text: 'Three of our family members have invested in Be Americans over the past ten years, and all have received their green cards and goods profits from the projects. Thank you for taking care of us. We consider you all friends and family. We recommend Henry and Be Americans to anyone considering the Regional Center EB-5 visa.',
      author: 'A. Singh',
      status: 'I-829 Approved',
      year: '2021',
    },
    {
      text: 'We were very nervous at the outset because we had heard of so many people who had invested in other opportunities which had turned out badly. However, we did our research, met with Henry Liebman and decided to take the risk. Having just received a substantial profit on our original investment with the sale of the building we invested in, we couldn’t be happier.',
      author: 'Fran & David H.',
      status: 'I-829 Approved',
      year: '2020',
    },
    {
      text: 'After spending months trying to decipher the complexity of other EB-5 projects, I found myself still feeling insecure and skeptical. Then, I started to research Be Americans Inc’s reputation. Check! Experience. Check! Moreover, the CEO of Be Americans, Henry, is a lawyer who’s familiar with Immigration Law. This gave me extra confidence in investing.',
      author: 'Jin X.',
      status: 'I-829 Approved',
      year: '2019',
    },
  ];
  return (
    <>
      <section className="py-16">
        <div className="container mx-auto space-y-16">
          <div className=" flex flex-col items-center gap-8">
            <p className="text-highlight uppercase font-bold text-sm">
              Testimonials
            </p>
            <h1 className="text-5xl font-medium text-center">
              The People & Partners That Put Their
              Trust in{' '}
              <span className=" text-highlight font-accent">
                Be Americans
              </span>
            </h1>
            <p className="text-center text-lg">
              We know that participating in the
              EB-5 program is a monumental life
              decision. That’s why it’s so
              important that you work with a
              partner you can trust. And there’s
              no better way to get to know us,
              than to hear directly from the
              people who have successfully gone on
              the EB-5 journey with us. Take a
              look through our testimonials and
              find out if we’re the right partner
              to help you achieve your own EB-5
              success story.
            </p>
            <Button size="lg">
              Schedule a Call
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div className="border px-4 py-8 rounded-lg bg-white shadow-2xl text-gray-600 space-y-4">
                <p>{testimonial.text}</p>
                <div>
                  <p>{testimonial.author}</p>
                  <p>{testimonial.status}</p>
                </div>
                <p className="text-xs font-semibold">
                  {testimonial.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
