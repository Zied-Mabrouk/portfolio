import React, { useCallback } from 'react';
import { FaRegClipboard, FaEnvelope } from 'react-icons/fa';
import Tooltip from './Tooltip';

const NavBar = () => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText('almabrouk.zied@gmail.com');
  }, []);

  return (
    <div className="flex items-center w-full px-4 md:px-[10vw] justify-between absolute top-12 left-0">
      <div className="flex items-center cursor-pointer tracking-wider gap-8 bg-second rounded-full py-1 sm:pl-4 pr-1 shadow-sm">
        <span className="text-sm sm:flex hidden">almabrouk.zied@gmail.com</span>

        <Tooltip>
          <span className="rounded-full bg-white p-3" onClick={onCopy}>
            <FaRegClipboard className="text-xl sm:flex hidden" />
            <FaEnvelope className="sm:hidden" />
          </span>
        </Tooltip>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/mabrouk-zied/"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer tracking-wider"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/zayyda13/"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer tracking-wider"
        >
          Instragram
        </a>
      </div>
    </div>
  );
};

export default NavBar;
