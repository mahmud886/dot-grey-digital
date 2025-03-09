'use client';
import servicesData from '@/data/servicesData';
import Image from 'next/image';
import DynamicButton from './dynamic-button';
import UpArrow from './svgs/up-arrow';

const OurServices = () => {
  return (
    <section className='w-full py-20 bg-[#062729]'>
      <div className='container mx-auto px-6'>
        {/* Section Title */}
        <h2 className='text-[70px] font-normal text-center text-gray-900 dark:text-white'>Our Services</h2>
        <p className='mt-4 text-[16px] text-center text-gray-600 dark:text-gray-300 max-w-[70%] mx-auto'>
          Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
          tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed
          risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Norem ipsum dolor sit amet, consectetur
          adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla
          accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit,
          sit amet feugiat lectus.
        </p>

        {/* Services Grid */}
        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-8'>
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`relative p-[44px] bg-transparent rounded-xl shadow-md border-2 ${service.border}`}>
              {/* Top-Left Border Indicator */}
              {/* <span className={` w-10 h-1 bg-current ${service.color}`}></span> */}

              {/* Service Icon */}
              <div className='absolute -top-[24px] bg-[#062729] px-2'>
                <Image src={service.icon} alt={service.name} width={50} height={50} />
              </div>

              {/* Service Name */}
              <h3 className={`text-[36px] font-normal ${service.color}`}>{service.name}</h3>
              {/* Short Description */}
              <p className='mt-2 text-gray-600 dark:text-gray-300'>{service.shortDescription}</p>
              {/* What We Do */}
              <ul className='mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2'>
                {service.whatWeDo.map((item, i) => (
                  <li
                    key={i}
                    className='text-gray-700 dark:text-gray-300 flex items-center pb-2 border-b border-gray-300 dark:border-gray-700'>
                    ✅ <span className='ml-2'>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <div className='mt-6'>
                <DynamicButton svgIcon={<UpArrow />}>Learn More</DynamicButton>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Gradient Borders */}
      {/* <style jsx>{`
        .border-gradient-blue {
          border-image: linear-gradient(45deg, #2563eb, #9333ea) 1;
        }
        .border-gradient-red {
          border-image: linear-gradient(45deg, #ef4444, #f59e0b) 1;
        }
      `}</style> */}
    </section>
  );
};

export default OurServices;
