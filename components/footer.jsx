import { connectWithUs, quickLinks, services, socialLinks } from '@/data/footerData';
import Image from 'next/image';
import Link from 'next/link';
import DynamicButton from './dynamic-button';
import UpArrow from './svgs/up-arrow';

const Footer = () => {
  return (
    <footer className='bg-[#0A0A0A] text-white pt-12'>
      {/* 🔹 Top Section */}
      <div className='container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center '>
        <div className=''>
          <h3 className='text-[70px] font-normal leading-[82px] max-w-[554px]'>Get Started With Your Project</h3>
          <p className='text-[24px] text-white font-normal leading-[82px]'>
            No Obligations <span className='mx-2'>•</span> Free Review & Quote <span className='mx-2'>•</span>
            Money Back Guarantee & NDA
          </p>
        </div>
        <button className='min-w-[370px] bg-[var(--primary)] py-[35px] text-[36px] font-bold leading-[48px] rounded-lg'>
          Get Your Quote
        </button>
      </div>

      {/* 🔹 Middle Section: Social Media Icons */}
      <div className='container mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4'>
        {socialLinks.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target='_blank'
            rel='noopener noreferrer'
            className='flex justify-center items-center p-12 border  hover:bg-[var(--primary)] transition'>
            <Image src={social.icon} alt='Social Icon' width={44} height={44} />
          </a>
        ))}
      </div>

      {/* 🔹 Search & Quick Action Section */}
      <div className='container mx-auto px-6 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 border-b border-gray-700'>
        {/* Left: Title */}
        <div className='flex items-center justify-center md:justify-start'>
          <h4 className='text-[28px] md:text-[36px] font-normal leading-normal text-center md:text-left'>
            Get Started With Your Project
          </h4>
        </div>

        {/* Middle: Search Bar */}
        <div className='flex items-center justify-center'>
          <input
            type='text'
            placeholder='Enter your email'
            className='w-full max-w-[450px] px-5 py-3 rounded-lg text-gray-900 border border-[#6D6D6D] focus:ring focus:ring-red-400'
          />
        </div>

        {/* Right: Button */}
        <div className='flex items-center justify-center md:justify-end'>
          <DynamicButton svgIcon={<UpArrow />}>Get Your Qoute</DynamicButton>
        </div>
      </div>

      {/* 🔹 Bottom Section: 4 Columns */}
      <div className='container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-6'>
        {/* Logo Section */}
        <div>
          <Image src='/assets/logo.svg' alt='Logo' width={150} height={50} />
        </div>

        {/* Quick Links */}
        <div>
          <h5 className='text-[18px] font-semibold mb-4'>Quick Links</h5>
          <ul>
            {quickLinks.map((link, index) => (
              <li key={index} className='mb-2'>
                <Link href='#'>
                  <span className='text-[16px] hover:text-[var(--primary)] transition'>{link}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h5 className='text-lg font-semibold mb-4'>Our Services</h5>
          <ul>
            {services.map((service, index) => (
              <li key={index} className='mb-2'>
                <Link href='#'>
                  <span className='hover:text-gray-400 transition'>{service}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h5 className='text-lg font-semibold mb-4'>Connect With Us</h5>
          <ul>
            {connectWithUs.map((item, index) => (
              <li key={index} className='mb-2'>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 🔹 Copyright */}
      <div className='text-center py-8 border-t border-[#C3C3C3]'>
        <p className='text-[16px] font-normal text-white'>
          © {new Date().getFullYear()} Dotgrey digital, Inc. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
