import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

type Props = {
  videos: string[];
  isOpen: boolean;
};

const VideoSlider = ({ videos, isOpen }: Props) => {
  return (
    <Swiper modules={[Navigation, Pagination]}>
      {isOpen &&
        videos.map((item, key) => {
          return (
            <SwiperSlide key={key}>
              <video autoPlay={true} muted={true} loop={true}>
                <source src={item} type="video/mp4" />
              </video>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default VideoSlider;
