import React from 'react';
import Table from './Table';

const Home = () => {
  return (
    <div id="home" className="h-[70vh] flex justify-center items-center">
      <div className="w-2/3 h-full p-4 flex flex-col justify-center gap-8">
        <h1 className="text-7xl font-semibold">
          I<span className="text-accent2 italic tracking-widest">&apos;</span>m
          Zied Mabrouk
          <span className="text-accent1">.</span>
        </h1>
        <p className="text-gray-400 text-lg">
          I&apos;m a full stack software engineer with a passion for building
          scalable and efficient applications.
        </p>
        <p className="text-gray-400 text-lg">
          The world is better with my code in it.
        </p>
      </div>
      <Table className="w-1/3 mx-16">
        <div className="py-8 px-12 flex">
          <div className="flex flex-col gap-4">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="tracking-wider pl-8">{'<stack>'}</span>
            <span className="tracking-wider pl-16">
              {'<'}
              <span className="text-accent3 tracking-wider">JavaScript</span>
              {'>'}
            </span>
            <span className="tracking-wider pl-16">
              {'<'}
              <span className="text-accent4 tracking-wider">React</span>
              {'>'}
            </span>
            <span className="tracking-wider pl-16">
              {'<'}
              <span className="text-accent2 tracking-wider">Node.JS</span>
              {'>'}
            </span>
            <span className="tracking-wider pl-16">
              {'<'}
              <span className="text-accent1 tracking-wider">TypeScript</span>
              {'>'}
            </span>
            <span className="tracking-wider pl-8">{'<and more...>'}</span>
          </div>
        </div>
      </Table>
    </div>
  );
};

export default Home;
