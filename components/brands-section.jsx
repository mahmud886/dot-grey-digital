import Image from 'next/image';

const BrandsSection = () => {
  const brands = [
    { id: 1, image: '/assets/images/brands/dell.png', name: 'Brand 1' },
    { id: 2, image: '/assets/images/brands/treehouse.png', name: 'Brand 2' },
    { id: 3, image: '/assets/images/brands/hsbc.png', name: 'Brand 3' },
    { id: 4, image: '/assets/images/brands/vodafone.png', name: 'Brand 4' },
    { id: 5, image: '/assets/images/brands/dyson.png', name: 'Brand 5' },
    { id: 6, image: '/assets/images/brands/motorola.png', name: 'Brand 6' },
  ];

  return (
    <section className='py-16 bg-[#E9E9E9]'>
      <div className='container mx-auto px-6 text-center'>
        {/* 🔹 Title */}
        <div className='mb-8 max-w-[50%] mx-auto'>
          <h2 className='text-[25px] font-bold text-black '>
            Some of the leading Brands, Advertising Agencies engage us to build their emails
          </h2>
        </div>

        {/* 🔹 Brands Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-24 items-center justify-center'>
          {brands.map((brand) => (
            <div key={brand.id} className='flex justify-center'>
              <Image
                src={brand.image}
                alt={brand.name}
                width={150}
                height={150}
                className='w-[150px] h-[150px] object-contain'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
