import Image from 'next/image';
import Button from '../buttons/button';

const Herobox = ({ title, description, desktopHeroImage, mobileHeroImage }) => {
  return (
    <div className="relative pt-[180px] text-center text-white isolate h-full md:h-screen">
      <div className="container-fluid h-full">
        <div className="min-h-[380px] md:min-h-full flex flex-col justify-between">
          <div>
            <h1 className="text-[2rem] md:text-[4rem]">{title}</h1>
            <p className="text-base md:text-[2rem]">{description}</p>
          </div>

          <div className="text-center mb-20">
            <Button
              title="Browse Product"
              color="text-white"
              bgColor="bg-transparent"
              smWidth="w-[15.125rem]"
              mdWidth="md:w-[28.3125rem]"
            />
          </div>
        </div>
      </div>

      <Image
        src={desktopHeroImage}
        alt="heroImage"
        className="hidden md:inline-block max-w-full h-full absolute top-0 left-0 bottom-0 right-0 -z-20 object-cover"
        priority
      />
      <Image
        src={mobileHeroImage}
        alt="heroImage"
        className="inline-block md:hidden max-w-full h-full absolute top-0 left-0 bottom-0 right-0 -z-20 object-cover"
        priority
      />
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-dark-gradient -z-10"></div>
    </div>
  );
};

export default Herobox;
