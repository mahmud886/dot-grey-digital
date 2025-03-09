import Image from 'next/image';
import DynamicButton from './dynamic-button';
import UpArrow from './svgs/up-arrow';

const Header = () => {
  return (
    <header className='relative w-full flex flex-col justify-center items-center'>
      {/* Background Image */}
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
      {/* Header Content */}
      <div className='relative z-10 container mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-20 md:py-32 mt-[100px]'>
        {/* Left - Content */}
        <div className='max-w-2xl text-center md:text-left text-white'>
          <h1 className='text-4xl md:text-[70px] font-bold leading-[64px]'>Email Development</h1>
          <p className='mt-[22px] text-[20px] max-w-[480px] font-sans font-normal leading-[32px]'>
            We build awesome emails! Send us your design,
            <br />
            We’ll make sure it looks perfect in all email clients
          </p>
          <div className='mt-[44px]'>
            <p className='font-sans font-normal leading-[25px]'>
              <span className='flex gap-2 items-center'>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='17' viewBox='0 0 16 17' fill='none'>
                  <circle cx='8' cy='8.5' r='8' fill='#FF6347' />
                </svg>
                Desktop & Responsive Emails{' '}
              </span>
            </p>
            <p className='font-sans font-normal leading-[25px]'>
              <span className='flex gap-2 items-center '>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='17' viewBox='0 0 16 17' fill='none'>
                  <circle cx='8' cy='8.5' r='8' fill='#FF6347' />
                </svg>
                Campaign Monitor & Mailchimp Integration{' '}
              </span>
            </p>
          </div>
          <div className='mt-[60px]'>
            <DynamicButton svgIcon={<UpArrow />}>Learn More</DynamicButton>
          </div>
        </div>

        {/* Right - Image */}
        <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
          <img src='/assets/product.png' alt='Hero' className='max-w-xs md:max-w-md' />
        </div>
      </div>
    </header>
  );
};

export default Header;
