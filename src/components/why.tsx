import { Button } from '@/components/ui/button';
import PartnersTrustedList from '@/components/partners-trusted';
import RealEstateProtfolio from '@/components/real-estate-portfolio';

export default function WhySection({ cardBg }) {
  return (
    <section className="my-10">
      <div className="">
        <div className="container flex flex-col justify-center items-center gap-4">
          <p className="text-highlight font-semibold uppercase text-sm">
            Why Be Americans?
          </p>
          <h1 className="text-4xl font-semibold text-center">
            Partner with the Trusted Name in EB-5
            Immigration
          </h1>
          <p className="text-center">
            Be Americans is the longest
            established EB-5 program in the United
            States, helping thousands of investors
            and their families achieve their
            American Dream.
          </p>
          <p>Are you ready to get started?</p>
          <Button size="lg">
            Schedule a Call
          </Button>
          <div className="container video mx-auto mt-8 lg:max-w-[900px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/qyirogTKVpk"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen={true}
              className="h-64 lg:h-[500px] rounded-xl"
            ></iframe>
          </div>
        </div>
        <div className="container">
          <PartnersTrustedList cardBg={cardBg} />
        </div>
        <RealEstateProtfolio />
      </div>
    </section>
  );
}
