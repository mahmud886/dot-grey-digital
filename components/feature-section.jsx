import featuresData from '@/data/featuresData'; // Importing JSON data
import Image from 'next/image';

const FeatureSection = () => {
  return (
    <section
      className='relative w-full py-20 bg-cover bg-center bg-[#1D1D1D]'
      style={{ backgroundImage: "url('/assets/feature-bg.jpg')" }}>
      {/* Overlay for better readability */}
      <div className='absolute inset-0 bg-[#1D1D1D] bg-opacity-50'></div>

      <div className='relative z-10 container mx-auto px-6'>
        {/* Features Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className='bg-transparent p-[20px] rounded-[16px] shadow-md flex flex-col border border-[#444444]'>
              <div className='inline-flex justify-start items-center gap-2'>
                {/* Icon */}
                <Image src={feature.icon} alt={feature.name} width={24} height={24} />

                {/* Title */}
                <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>{feature.name}</h3>
              </div>

              {/* Description */}
              <p className='mt-2 text-[16px] text-gray-600 dark:text-gray-300'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
