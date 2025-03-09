import DynamicButton from '@/components/dynamic-button';
import UpArrow from '@/components/svgs/up-arrow';
import { services } from '@/data/services';
import Image from 'next/image';

const Servicelayout = async ({ children, params }) => {
  const { solutionId } = await params;
  const service = services?.find((service) => service.serviceId === solutionId);
  return (
    <>
      <div className='relative w-full flex flex-col justify-center items-center'>
        <div className='absolute inset-0 w-full h-full bg-[#0A0A0A]'>
          <Image
            src='/assets/hero-image.png'
            alt='Header Background'
            width={1920}
            height={950}
            className='w-full h-full object-cover'
            priority
          />
        </div>
        <div className='relative z-10 container mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-20 md:py-32 mt-[100px]'>
          {/* Left - Content */}
          <div className='max-w-2xl text-center md:text-left text-white'>
            <h1 className='text-4xl md:text-[70px] font-bold leading-[64px]'>{service?.header?.title}</h1>
            <p className='mt-[22px] text-[20px] max-w-[480px] font-sans font-normal leading-[32px]'>
              {service?.header?.shortDescription}
            </p>
            <div className='mt-[44px]'>
              {service?.header?.list.map((serviceList) => (
                <p className='font-sans font-normal leading-[25px]' key={serviceList}>
                  <span className='flex gap-2 items-center'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='17' viewBox='0 0 16 17' fill='none'>
                      <circle cx='8' cy='8.5' r='8' fill='#FF6347' />
                    </svg>
                    {serviceList}
                  </span>
                </p>
              ))}
            </div>
            <div className='mt-[60px]'>
              <DynamicButton svgIcon={<UpArrow />}>Learn More</DynamicButton>
            </div>
          </div>

          {/* Right - Image */}
          <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
            <Image src={service.header?.image} width={800} height={576} alt='Hero' className='w-full h-auto' />
          </div>
        </div>
      </div>
      <div className='bg-black'>{children}</div>
    </>
  );
};

export default Servicelayout;
