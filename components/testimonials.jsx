// TestimonialSection.js
import testimonialsData from '@/data/testimonialsData';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className='py-16'>
      <div className='container mx-auto px-4'>
        {/* Title and Description */}
        <div className='text-center mb-12'>
          <h2 className='text-[70px] font-normal text-white mb-4'>Testimonials</h2>
          <p className='text-[16px] text-white text-center mx-auto leading-[25px] max-w-[70%]'>
            Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
            tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
            sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Norem ipsum dolor sit amet, consectetur
            adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla
            accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit,
            sit amet feugiat lectus.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className='border border-[#4F4F4F] p-6 rounded-lg shadow-lg bg-transparent '>
              {/* Testimonial Description */}
              <p className='text-[16px] text-white mb-4 leading-[25px]'>
                <span className='font-bold text-[22px]'>{`“`}</span>
                {testimonial.description}
                <span className='font-bold text-[22px]'>{`”`}</span>
              </p>

              {/* User Information */}
              <div className='flex flex-col justify-center items-center mt-4 space-y-2'>
                <Image src={testimonial.image} alt={testimonial.name} width={50} height={50} className='rounded-full' />
                <div className='text-center'>
                  <p className='font-bold text-white text-[12px]'>{testimonial.name}</p>
                  <p className='font-normal text-white text-[12px]'>{testimonial.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
