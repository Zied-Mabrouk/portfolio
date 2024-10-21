import React, { useMemo } from 'react';

const Navbar = () => {
  const navItems = useMemo(
    () => [
      {
        label: 'about me',
        className: 'text-accent1',
        href: '#about',
      },
      {
        label: 'experience',
        className: 'text-accent2',
        href: '#experience',
      },
      {
        label: 'work',
        className: 'text-accent3',
        href: '#work',
      },
      {
        label: 'blog',
        className: 'text-accent4',
        href: '#blog',
      },
      {
        label: 'contact me',
        className: 'text-accent1',
        href: '#contact',
      },
    ],
    [],
  );
  return (
    <nav className="fixed top-0 left-0 w-full py-4">
      <div className="flex max-w-7xl items-center mx-auto justify-between">
        <a href="#home" className="text-lg">
          <span className="tracking-wider">zied</span>
          <span className="text-accent2 tracking-wider">.</span>
          <span className="tracking-wider">mabrouk</span>
        </a>
        <div className="flex items-center gap-8">
          {navItems.map(({ label, className, href }, index) => {
            return (
              <a href={href} key={index}>
                <span className={`mr-1 ${className}`}>0{index + 1}.</span>
                <span className="tracking-wider font-thin">{label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
