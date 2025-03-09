import Image from 'next/image';
import Circle from './svgs/circle';

const WhatWeDo = ({ image, list }) => {
  return (
    <section className='container mx-auto px-6 py-12'>
      <div className='flex gap-8 items-center'>
        {/* Left: Image */}
        <div className='flex justify-start w-1/3'>
          <Image src={image} alt='What We Do' width={448} height={448} className='w-[448px] h-[448px]' />
        </div>

        {/* Right: List */}
        <div className='w-2/3'>
          <ul className='space-y-[24px] text-white'>
            {list.map((item, index) => (
              <li
                key={index}
                className='inline-flex justify-items-start items-center gap-4 text-[32px] font-medium leading-[64px]'>
                <Circle /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
