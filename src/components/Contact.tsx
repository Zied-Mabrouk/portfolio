import React from 'react';
import Table from './Table';
import { FaPhone, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Contact = () => {
  return (
    <div id="contact" className="py-8">
      <div className="flex items-center gap-8 pb-4">
        <div className="text-accent4 text-3xl">04.</div>
        <h2 className="text-3xl font-medium tracking-wider">Contact</h2>
      </div>

      <div className="w-full grid grid-cols-4 justify-center items-center gap-16 px-16">
        <Table className="aspect-square">
          <a
            href="tel:+33695016276"
            className="bg-accent1 grid place-items-center h-full"
          >
            <FaPhone className="text-7xl" />
          </a>
        </Table>
        <Table className="aspect-square">
          <a
            href="mailto:almabrouk.zied@gmail.com"
            className="bg-accent4 grid place-items-center h-full"
          >
            <IoMdMail className="text-7xl" />
          </a>
        </Table>
        <Table className="aspect-square">
          <a
            href="https://www.linkedin.com/in/zied-mabrouk-6401bb201/"
            className="bg-accent2 grid place-items-center h-full"
          >
            <FaGithub className="text-7xl" />
          </a>
        </Table>
        <Table className="aspect-square">
          <a
            href="https://www.linkedin.com/in/zied-mabrouk-6401bb201/"
            className="bg-accent3 grid place-items-center h-full"
          >
            <FaLinkedinIn className="text-7xl" />
          </a>
        </Table>
      </div>
    </div>
  );
};

export default Contact;
