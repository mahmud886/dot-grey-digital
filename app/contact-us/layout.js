import Image from 'next/image';

const ContactUsRoot = ({ children }) => {
  return (
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
          <h1 className='text-4xl md:text-[70px] font-bold leading-[64px]'>Contact Us</h1>
        </div>

        {/* Right - Image */}
        <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
          <img src='/assets/product.png' alt='Hero' className='max-w-xs md:max-w-md' />
        </div>
      </div>
      <div className='relative z-10'>{children}</div>
    </div>
  );
};
export default ContactUsRoot;
