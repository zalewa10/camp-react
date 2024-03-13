import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import Marquee from "react-fast-marquee";

interface CampSiteProps {
  bgImg: string;
  title: string;
  subtitle: string;
  people: string;
  className?: string;
}

const CampSite = ({
  bgImg,
  title,
  subtitle,
  people,
  className,
}: CampSiteProps) => {
  return (
    <div
      className={`h-full w-full min-w-[500px] lg:min-w-[1100px] ${bgImg} bg-cover bg-no-repeat rounded-5xl ${className}`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((index) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                key={index}
                src={index}
                alt="People"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 text-white md:bold-20 ">{people}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:pt-20 xl:mb-20">
      <Marquee>
        <div className="hide-scrollbar bg-white/80 flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
          <CampSite
            bgImg="bg-bg-img-1"
            title="Putuk Truno Camp"
            subtitle="Prigen, Pasuruan"
            people="50+ Joined"
          />
          <CampSite
            bgImg="bg-bg-img-2"
            title="Mountain View"
            subtitle="Somewhere in the Wilderness"
            people="38+ Joined"
            className="mr-8"
          />
        </div>
      </Marquee>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6 z-20">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <b>Feeling Lost</b> Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            nam alias nesciunt a exercitationem, officiis quam cum, dicta
            voluptas consequuntur totam fuga blanditiis enim autem ut dolor?
            Enim, et eos.
          </p>

          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
