import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const OurServiceWork = ({ badge, title, shortDescription, works }) => {
  return (
    <section className='container mx-auto px-6 py-12 text-center'>
      {/* Top Section */}
      <div className='mb-10'>
        <button className='px-8 py-2 text-sm font-semibold uppercase bg-white text-black rounded-full'>{badge}</button>
        <h2 className='text-3xl md:text-4xl font-semibold mt-4'>{title}</h2>
        <p className='text-gray-300 text-lg mt-2 max-w-3xl mx-auto'>{shortDescription}</p>
      </div>

      {/* Work Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {works.map((work, index) => (
          <Link href={work.link} key={index} className='group block '>
            {/* Work Image */}
            <div className='relative overflow-hidden rounded-2xl'>
              <Image
                src={work.image}
                alt={work.title}
                width={698}
                height={440}
                className='rounded-xl object-cover transition-transform duration-300 group-hover:scale-105'
              />
            </div>
            {/* Title & Icon */}
            <div className=' bg-black/60 text-white flex items-center justify-between px-4 py-3 rounded-b-lg transition-all duration-300 group-hover:text-[var(--primary)]'>
              <h3 className='text-[24px] font-normal transition duration-300 group-hover:text-[var(--primary)]'>
                {work.title}
              </h3>
              <span className='text-white transition duration-300 group-hover:text-[var(--primary)]'>
                <ArrowRight size={24} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OurServiceWork;
