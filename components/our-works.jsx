import Image from 'next/image';
import DynamicButton from './dynamic-button';
import UpArrow from './svgs/up-arrow';

const OurWorks = () => {
  return (
    <section className='py-16 bg-[#0A0A0A]'>
      <div className='container mx-auto px-4'>
        {/* Left side */}
        <div className='md:flex md:justify-between mb-12 gap-6'>
          <div className=''>
            <button className='bg-white text-[var(--secondary)] px-[32px] py-2 rounded-full text-[16px] font-medium mb-4'>
              Featured Work
            </button>
            <h2 className='text-[56px] font-semibold text-white mb-4'>Our Works</h2>
            <p className='text-[12px] text-white mb-6 max-w-[472px]'>
              Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
              tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
              sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Norem ipsum dolor sit amet,
              consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget
              condimentum velit, sit amet feugiat lectus.
            </p>
            <div className='flex flex-col gap-6'>
              <DynamicButton svgIcon={<UpArrow />}>Request a Proposal</DynamicButton>
              <DynamicButton svgIcon={<UpArrow />} isOutline={true} bgColor='bg-[var(--primary)]'>
                See all Work
              </DynamicButton>
            </div>
          </div>

          {/* Right side */}
          <div className=' mt-8 md:mt-0'>
            <div className='grid grid-cols-1 gap-6'>
              {/* Image 1 */}
              <div className='relative'>
                <Image
                  src='/assets/images/our-works/our-works-1.png'
                  alt='Work 1'
                  width={968}
                  height={542}
                  className='object-cover rounded-lg'
                />
              </div>

              {/* Image 2 */}
              <div className='relative'>
                <Image
                  src='/assets/images/our-works/our-works-2.png'
                  alt='Work 2'
                  width={968}
                  height={542}
                  className='object-cover rounded-lg'
                />
              </div>

              {/* Image 3 */}
              <div className='relative'>
                <Image
                  src='/assets/images/our-works/our-works-3.png'
                  alt='Work 3'
                  width={968}
                  height={542}
                  className='object-cover rounded-lg'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
