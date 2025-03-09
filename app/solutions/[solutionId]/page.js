import BrandsSection from '@/components/brands-section';
import OurServiceWork from '@/components/our-service-work';
import Testimonials from '@/components/testimonials';
import WhatWeDo from '@/components/what-we-do';
import WhatYouGet from '@/components/what-you-get';
import { services } from '@/data/services';

const ServicesPage = async ({ params }) => {
  const { solutionId } = await params;
  const service = services?.find((service) => service.serviceId === solutionId);
  return (
    <>
      <WhatWeDo image={service.whatWeDo.image} list={service.whatWeDo.list} />
      <OurServiceWork
        badge={'Our Works'}
        title={service.ourWorks.title}
        shortDescription={service.ourWorks.shortDescription}
        works={service.ourWorks.listItems}
      />
      <WhatYouGet data={service.whatWeGet} />
      <BrandsSection />
      <Testimonials />
    </>
  );
};

export default ServicesPage;
