import React from 'react';
import NavBar from '../cores/NavBar';
import Carousel from '../cores/Carousel';

const Home = () => {
  return (
    <div className="h-[110vh] bg-white rounded-t-none rounded-[120px] border overflow-hidden">
      <div className="h-5/6 rounded-b-[120px] w-full -mt-16 pt-16 border-b bg-primary flex items-center justify-center">
        <NavBar />
        <div className="flex flex-col w-[600px] px-4">
          <img
            className="rounded-full w-48 mx-auto grayscale border-4 border-white hover:grayscale-0"
            src="/img/me.png"
            alt=""
          />
          <h1 className="linear-gradient text-center text-6xl tracking-tight leading-tight font-bold">
            Building digital products, brands, and experience.
          </h1>
        </div>
      </div>
      <div className="h-[calc((100%/6)+64px)] flex items-center">
        <div className="w-full h-full">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Home;
