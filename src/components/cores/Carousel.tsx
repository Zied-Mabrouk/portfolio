import React, { useMemo } from 'react';
import CarouselComponent from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Carousel = () => {
  const images = useMemo(
    () => [
      { img: 'datawisp.png', link: 'https://datawisp.io' },
      { img: 'devino.png', link: 'https://devino.ca' },
      { img: 'dah.webp', link: 'https://dah-zied-mabrouk.vercel.app' },
      { img: 'montargis.png', link: 'https://chateaudemontargis.fr' },
      { img: 'tcb.webp', link: 'https://tcb.tn' },
      { img: 'etravsub.png', link: 'https://etravsub.com' },
      { img: 'vaporia.jpg', link: 'https://vaporia.vercel.app' },
    ],
    [],
  );

  return (
    <CarouselComponent
      additionalTransfrom={0}
      customLeftArrow={<></>}
      customRightArrow={<></>}
      infinite
      autoPlay
      centerMode
      shouldResetAutoplay
      customTransition="all 8s linear"
      pauseOnHover={false}
      rewindWithAnimation={false}
      responsive={{
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
        },
      }}
      transitionDuration={1000}
      className="h-full"
    >
      {images.map((image, index) => (
        <a
          className="flex items-center justify-center h-full overflow-hidden py-16 max-w-20 sm:max-w-40"
          key={index}
          href={image.link}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="h-full grayscale hover:grayscale-0 object-contain rounded-lg"
            src={`/img/${image.img}`}
            alt={image.img}
          />
        </a>
      ))}
    </CarouselComponent>
  );
};

export default Carousel;
