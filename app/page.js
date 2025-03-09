import DynamicButton from '@/components/dynamic-button';
import FeatureSection from '@/components/feature-section';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Navbar from '@/components/navbar';
import OurServices from '@/components/our-services';
import OurWorks from '@/components/our-works';
import UpArrow from '@/components/svgs/up-arrow';
import Testimonials from '@/components/testimonials';
import WhyChooseUs from '@/components/why-choose-us';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <FeatureSection />
      <OurServices />
      <WhyChooseUs />
      <OurWorks />
      <Testimonials />
      <Footer />

      <DynamicButton svgIcon={<UpArrow />}>Learn More</DynamicButton>
      <DynamicButton svgIcon={<UpArrow />} isOutline={true}>
        Learn More
      </DynamicButton>
      <DynamicButton bgColor='bg-white'>White BG Button</DynamicButton>
      <DynamicButton fontWeight='font-medium' fontSize='text-[36px]' width='min-w-[136px]' borderRadius='rounded-2xl'>
        Get a Quote
      </DynamicButton>
    </>
  );
}
