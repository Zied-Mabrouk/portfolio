import React from 'react';

const Footer = () => {
  return (
    <div className="h-24 overflow-hidden">
      <div className="bg-white rounded-[120px] w-full border px-[10vw] translate-y-4 pt-4 h-[15vh] md:h-[110vh]">
        <div className="h-16 flex items-center tracking-wider justify-between text-sm md:text-base">
          <span>© {new Date().getFullYear()} All rights reserved.</span>{' '}
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
      </div>
    </div>
  );
};

export default Footer;
