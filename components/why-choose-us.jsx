import whyChooseUs from '@/data/whyChooseUs';
import Image from 'next/image';
import DynamicButton from './dynamic-button';
import UpArrow from './svgs/up-arrow';

const WhyChooseUs = () => {
  return (
    <section className='relative py-20'>
      {/* <div className='w-full rotate-90 absolute top-[5%] left-1/2 -translate-x-1/2 blur-3xl -z-10'>
        <div className='shadow-[0px_0px_200px_400px_rgba(6,39,41,.5)]'></div>
      </div> */}
      <div className='w-[30%] mx-auto absolute top-[5%] left-1/2 -translate-x-1/2 blur-2xl -z-10'>
        <div className='shadow-[0px_50px_300px_100px_rgba(6,39,41,.5)] '></div>
      </div>
      <div className='absolute top-[30%] left-0 -translate-x-1/2 blur-3xl -z-10'>
        <div className='shadow-[0px_0px_200px_200px_rgba(255,99,71,.5)]'></div>
      </div>
      <div className='absolute bottom-[50%] right-0 -translate-x-1/2 blur-3xl -z-10'>
        <div className='shadow-[0px_0px_200px_200px_rgba(255,99,71,.5)]'></div>
      </div>
      <div className='container mx-auto px-6 text-center'>
        <h2 className='text-4xl font-semibold text-white'>Why Choose Us</h2>
        <p className='mt-4 text-xl text-white'>
          Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
          tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed
          risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Norem ipsum dolor sit amet, consectetur
          adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla
          accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit,
          sit amet feugiat lectus.
        </p>

        <div className='mt-12 grid grid-cols-1 gap-8'>
          {whyChooseUs.map((card) => (
            <div
              key={card.id}
              className={` flex flex-col md:flex-row backdrop-blur-2xl overflow-hidden ${
                card.imagePosition === 'right' ? 'md:flex-row-reverse' : ''
              } items-center  px-[100px] py-[35px] border border-[#2D2D2D] rounded-xl shadow-lg`}>
              <div
                className={`relative  md:w-1/2 flex ${
                  card.imagePosition === 'right' ? 'justify-end' : 'justify-start'
                } mb-4 md:mb-0`}>
                <div className='w-full absolute top-0 right-0 -translate-x-1/2 blur-3xl -z-10'>
                  <div className='shadow-[0px_0px_200px_200px_rgba(6,39,41,.5)]'></div>
                </div>
                <Image src={card.image} alt={card.title} width={393} height={387} className='rounded-lg' />
              </div>
              <div className='md:w-1/2 text-center md:text-left space-y-[39px] overflow-hidden'>
                <button className='bg-white text-[var(--secondary)] px-[32px] py-2 rounded-full text-[16px] font-medium mb-4'>
                  {card.badge}
                </button>
                <h3 className='text-[56px] font-medium text-white'>{card.title}</h3>
                <p className='text-white text-[16px] leading-[35px]'>{card.description}</p>
                {/* Learn More Button */}
                <div className='mt-6'>
                  <DynamicButton svgIcon={<UpArrow />}>Learn More</DynamicButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
