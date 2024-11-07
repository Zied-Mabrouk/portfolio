import React from 'react';
import { FaRegClipboard } from 'react-icons/fa';

const NavBar = () => {
  return (
    <div className="flex items-center w-full px-[10vw] justify-between absolute top-12 left-0">
      <div className="flex items-center cursor-pointer tracking-wider gap-8 bg-second rounded-full py-1 pl-4 pr-1 shadow-sm">
        <span className="text-sm">almabrouk.zied@gmail.com</span>
        <span className="rounded-full bg-white p-3">
          <FaRegClipboard className="text-xl" />
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="cursor-pointer tracking-wider">LinkedIn</span>
        <span className="cursor-pointer tracking-wider">Instragram</span>
      </div>
    </div>
  );
};

export default NavBar;
