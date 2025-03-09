const WhatYouGet = ({ data }) => {
  return (
    <section className='container mx-auto px-6 py-20 text-white'>
      {/* Section Title */}
      <div className='text-center mb-10'>
        <h2 className='text-3xl font-semibold'>{data.title}</h2>
        <p className='text-gray-400 mt-2'>{data.shortDescription}</p>
      </div>

      {/* Grid Layout */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 relative'>
        {/* Left Column */}
        <div className='p-2 pb-20 '>
          {data.list.slice(0, Math.ceil(data.list.length / 2)).map((item, index) => (
            <div key={index} className='min-h-[272px] bg-transparent border-b border-[#5B5B5B]'>
              <div className='p-10'>
                <h3 className='text-[48px] font-medium tracking-tighter leading-[58px]'>{item.title}</h3>
                <p className='text-white text-[16px] mt-1'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Middle Divider */}
        <div className='hidden md:block absolute left-1/2 top-0 h-full w-[1px] bg-[#5B5B5B]'></div>

        {/* Right Column */}
        <div className='p-2 pb-20 '>
          {data.list.slice(Math.ceil(data.list.length / 2)).map((item, index) => (
            <div key={index} className='min-h-[272px] bg-transparent border-b border-[#5B5B5B]'>
              <div className='p-10'>
                <h3 className='text-[48px] font-medium tracking-tighter leading-[58px]'>{item.title}</h3>
                <p className='text-white text-[16px] mt-1 '>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
