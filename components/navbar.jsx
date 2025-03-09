'use client';
import DynamicButton from '@/components/dynamic-button';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    {
      label: 'Solution',
      dropdown: [
        { label: 'Email Development', href: '/solutions/email-development' },
        { label: 'FrontEnd Development', href: '/solutions/frontend-development' },
        { label: 'Digital Banner Ads', href: '/solutions/digital-banners' },
        { label: 'Veeva', href: '/solutions/veeva' },
      ],
    },
    { label: 'Works', href: '/works' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className='fixed left-0 w-full bg-transparent z-50'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          {/* Left - Logo */}
          <div className='flex items-center'>
            <a href='/' className='text-xl font-bold text-gray-900 dark:text-white'>
              <img src='/assets/logo.svg' alt='Logo' />
            </a>
          </div>

          {/* Middle - Nav Items */}
          <div className='hidden md:flex space-x-6'>
            {navItems.map((item, index) =>
              item.dropdown ? (
                <div key={index} className='relative'>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className='flex items-center gap-1 text-gray-700 dark:text-white hover:text-blue-500'>
                    {item.label} <ChevronDown size={16} />
                  </button>
                  {isDropdownOpen && (
                    <div className='absolute left-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-md rounded-md'>
                      {item.dropdown.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className='block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  className='text-gray-700 dark:text-white hover:text-blue-500 font-sans font-normal'>
                  {item.label}
                </a>
              )
            )}
          </div>

          {/* Right - Button */}
          <div className='hidden md:flex'>
            <DynamicButton fontWeight='font-normal' width='min-w-[136px]' borderRadius='rounded-2xl'>
              Get a Quote
            </DynamicButton>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-white dark:bg-gray-900'>
          {navItems.map((item, index) =>
            item.dropdown ? (
              <div key={index} className='border-b border-gray-200 dark:border-gray-700'>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className='w-full text-left px-4 py-2 flex justify-between items-center'>
                  {item.label} <ChevronDown size={16} />
                </button>
                {isDropdownOpen && (
                  <div className='pl-6'>
                    {item.dropdown.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className='block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={index}
                href={item.href}
                className='block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                {item.label}
              </a>
            )
          )}
          <div className='p-4'>
            <button className='w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition'>
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
