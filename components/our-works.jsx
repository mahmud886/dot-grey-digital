'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import DynamicButton from './dynamic-button';
import UpArrow from './svgs/up-arrow';

const images = [
  '/assets/images/our-works/our-works-1.png',
  '/assets/images/our-works/our-works-2.png',
  '/assets/images/our-works/our-works-3.png',
];

const OurWorks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className='relative py-20'>
      {/* Background Glow */}
      <div className='absolute top-[350px] left-3/5 -translate-x-1/2 blur-3xl -z-10'>
        <div className='shadow-[0px_0px_200px_200px_rgba(255,99,71,1)]'></div>
      </div>

      <div className='container mx-auto px-4'>
        <div className='md:flex md:justify-between mb-12 gap-6'>
          {/* Left Side */}
          <div>
            <button className='bg-white text-[var(--secondary)] px-8 py-2 rounded-full text-[16px] font-medium mb-4'>
              Featured Work
            </button>
            <h2 className='text-[56px] font-semibold text-white mb-4'>Our Works</h2>
            <p className='text-[12px] text-white mb-6 max-w-[472px]'>
              Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
              tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
              sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
            </p>
            <div className='flex flex-col gap-6'>
              <DynamicButton svgIcon={<UpArrow />}>Request a Proposal</DynamicButton>
              <DynamicButton svgIcon={<UpArrow />} isOutline={true} bgColor='bg-[var(--primary)]'>
                See all Work
              </DynamicButton>
            </div>
          </div>

          {/* Right Side - Click to Change Image */}
          <div className='mt-8 md:mt-0 relative w-full md:w-auto flex justify-center'>
            <div className='relative w-[968px] h-[542px]' onClick={handleNextImage}>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentIndex}
                  className='absolute w-full h-full rounded-lg overflow-hidden shadow-2xl cursor-pointer'
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 1.05 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}>
                  <Image
                    src={images[currentIndex]}
                    alt={`Work ${currentIndex + 1}`}
                    layout='fill'
                    className='object-cover rounded-lg'
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
