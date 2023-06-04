'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import HomeImage from '@/assets/images/home.png';
import HospitalityImage from '@/assets/images/hospitality.png';
import LogoImage from '@/assets/images/logo.svg';
import BotanikaLogo from '@/assets/images/botanika.svg';
import SenseLogo from '@/assets/images/sense.svg';
import OmniaLogo from '@/assets/images/omnia.svg';
import HolidayLogo from '@/assets/images/holiday_care.svg';
import FerragamoLogo from '@/assets/images/ferragamo.svg';
import SmoosLogo from '@/assets/images/smoos.svg';
import SapunLogo from '@/assets/images/sapun.svg';
import WauberLogo from '@/assets/images/wauber.svg';

const Page = () => {
  const handlerRoute = (e, value) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(value, '_blank');
  };
  return (
    <main className="relative flex justify-between items-center h-full flex-col md:flex-row">
      <Link href={'/pages/hospitality'} className="w-full h-[80vh]">
        <section className="relative h-full cursor-pointer isolate hover:after:hidden after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-black-50%">
          <Image
            className="relative block max-w-full h-full object-cover"
            src={HospitalityImage}
            alt="Hospitality Image"
            priority
          />
          <div className="absolute bottom-6 left-0 text-white px-6 z-10 md:top-0 md:bottom-auto md:left-0 md:ml-10 md:px-0 md:mt-12">
            <h1 className="text-[2.5rem] font-medium"> Hospitality </h1>
            <p className="text-base font-normal md:w-[32ch] md:text-xl">
              Certified sustainable hotel amenities and accessories
            </p>
          </div>

          <div className="absolute top-6 left-0 inline-flex items-center gap-4 px-6 z-10 md:top-auto md:bottom-0 md:gap-7 md:ml-10 md:px-0 md:mb-4">
            <p
              onClick={(e) => {
                handlerRoute(e, 'https://google.com');
              }}
            >
              <Image
                src={BotanikaLogo}
                alt="Botanika Logo"
                className="inline-block"
              />
            </p>
            <p
              onClick={(e) => {
                handlerRoute(e, 'https://google.com');
              }}
            >
              <Image
                src={SenseLogo}
                alt="Sense Logo"
                className="inline-block"
              />
            </p>
            <p
              onClick={(e) => {
                handlerRoute(e, 'https://google.com');
              }}
            >
              <Image
                src={OmniaLogo}
                alt="Omnia Logo"
                className="inline-block"
              />
            </p>
            <p
              onClick={(e) => {
                handlerRoute(e, 'https://google.com');
              }}
            >
              <Image
                src={HolidayLogo}
                alt="Holiday Care Logo"
                className="inline-block"
              />
            </p>
            <p
              onClick={(e) => {
                handlerRoute(e, 'https://google.com');
              }}
            >
              <Image
                src={FerragamoLogo}
                alt="Ferragamo Logo"
                className="inline-block"
              />
            </p>
          </div>
        </section>
      </Link>
      <Link href={'/pages/home'} className="w-full h-[80vh]">
        <section className="relative h-full cursor-pointer isolate hover:after:hidden after:content-[''] after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-black-50%">
          <Image
            className="inline max-w-full h-full object-cover"
            src={HomeImage}
            alt="Home Image"
            priority
          />
          <div className="absolute bottom-6 left-0 text-white px-6 z-10 md:top-0 md:bottom-auto md:left-0 md:ml-10 md:px-0 md:mt-12">
            <h1 className="text-[2.5rem] font-medium"> Home </h1>
            <p className="text-base font-normal md:w-[32ch] md:text-xl">
              Innovative personal care
            </p>
          </div>

          <div className="absolute top-6 left-0 inline-flex items-center gap-4 px-6 z-10 md:top-auto md:bottom-0 md:gap-7 md:ml-10 md:px-0 md:mb-4">
            <p
              onClick={(e) => {
                handlerRoute(e, 'https://google.com');
              }}
            >
              <Image
                src={SenseLogo}
                alt="Sense Logo"
                className="inline-block"
              />
            </p>
            <p
              onClick={(e) => {
                handlerRoute(e, 'https://google.com');
              }}
            >
              <Image
                src={SmoosLogo}
                alt="Smoos Logo"
                className="inline-block"
              />
            </p>
            <p
              onClick={(e) => {
                handlerRoute(e, 'https://google.com');
              }}
            >
              <Image
                src={SapunLogo}
                alt="Sapun Logo"
                className="inline-block"
              />
            </p>
            <p
              onClick={(e) => {
                handlerRoute(e, 'https://google.com');
              }}
            >
              <Image
                src={WauberLogo}
                alt="Wauber Logo"
                className="inline-block"
              />
            </p>
          </div>
        </section>
      </Link>
      <div className="absolute inline-flex justify-center w-12 h-12 bottom-4 right-4 items-center bg-white rounded-full md:w-[140px] md:h-[140px] md:left-1/2 md:top-1/2 md:-translate-x-2/4 md:-translate-y-2/4">
        <Image
          src={LogoImage}
          alt="Logo"
          priority
          className="inline-block max-w-[70%]"
        />
      </div>
    </main>
  );
};

export default Page;
