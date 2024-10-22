import React, { useMemo } from 'react';
import data from '../../data';

const Navbar = () => {
  const items = useMemo(() => data.navbar.items, []);
  return (
    <nav className="fixed z-30 top-0 left-0 w-full py-4 bg-white bg-opacity-10 backdrop-blur-md">
      <div className="flex max-w-7xl items-center mx-auto justify-between">
        <a href="#home" className="text-lg">
          <span className="tracking-wider">zied</span>
          <span className="text-accent2 tracking-wider">.</span>
          <span className="tracking-wider">mabrouk</span>
        </a>
        <div className="flex items-center gap-8">
          {items.map(({ label, className, href }, index) => {
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
