import whyChooseUs from '@/data/whyChooseUs';
import Image from 'next/image';
import DynamicButton from './dynamic-button';
import UpArrow from './svgs/up-arrow';

const WhyChooseUs = () => {
  return (
    <section
      className='bg-cover bg-center py-16 bg-[#0A0C0C]'
      style={{ backgroundImage: "url('/path-to-background-image.jpg')" }}>
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
              className={`flex flex-col md:flex-row ${
                card.imagePosition === 'right' ? 'md:flex-row-reverse' : ''
              } items-center bg-transparent px-[100px] py-[35px] border border-[#2D2D2D] rounded-xl shadow-lg`}>
              <div
                className={`md:w-1/2 flex ${
                  card.imagePosition === 'right' ? 'justify-end' : 'justify-start'
                } mb-4 md:mb-0`}>
                <Image src={card.image} alt={card.title} width={393} height={387} className='rounded-lg' />
              </div>
              <div className='md:w-1/2 text-center md:text-left space-y-[39px]'>
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
