'use client';
import DynamicButton from '@/components/dynamic-button';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navItems = [
    { label: 'Home', href: '/' },
    {
      label: 'Solution',
      dropdown: [
        { label: 'Email Development', href: '/solutions/email-development' },
        { label: 'FrontEnd Development', href: '/solutions/frontend-development' },
        { label: 'Digital Banner Ads', href: '/solutions/digital-banners' },
        { label: 'Veeva', href: '/solutions/veeva' },
      ],
    },
    { label: 'Works', href: '/works' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact-us' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownItemClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className='fixed left-0 w-full bg-transparent z-50'>
      <div className='container mx-auto p-4'>
        <div className='flex justify-between items-center h-16'>
          {/* Left - Logo */}
          <div className='flex items-center'>
            <Link href='/'>
              <img src='/assets/logo.svg' alt='Logo' />
            </Link>
          </div>

          {/* Middle - Nav Items */}
          <div className='hidden md:flex space-x-6'>
            {navItems.map((item, index) =>
              item.dropdown ? (
                <div key={index} className='relative' ref={dropdownRef}>
                  <button
                    onClick={handleDropdownToggle}
                    className='flex items-center cursor-pointer gap-1 text-gray-700 dark:text-white hover:text-[var(--primary)]'>
                    {item.label} <ChevronDown size={16} />
                  </button>
                  {isDropdownOpen && (
                    <div className='absolute left-0 mt-2 w-[200px] bg-[var(--primary)] shadow-md rounded-md'>
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className='block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                          onClick={handleDropdownItemClick}>
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
                  className='text-gray-700 dark:text-white hover:text-[var(--primary)] font-sans font-normal'>
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
                  onClick={handleDropdownToggle}
                  className='w-full text-left px-4 py-2 flex justify-between items-center'>
                  {item.label} <ChevronDown size={16} />
                </button>
                {isDropdownOpen && (
                  <div className='pl-6'>
                    {item.dropdown.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className='block px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                        onClick={handleDropdownItemClick}>
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
