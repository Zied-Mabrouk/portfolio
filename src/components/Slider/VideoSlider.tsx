import React from "react";
import Slider from "react-slick";

type Props = {
  videos: string[];
};

const VideoSlider = ({ videos }: Props) => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  };
  const [activeSlide, setActiveSlide] = React.useState<string>();

  const [showGalery, setShowGalery] = React.useState(false);

  const handleClick = (k: number) => {
    if (videos && videos.length <= 0) return;
    setShowGalery(true);
  };

  const closeGalery = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = "target" in e ? (e.target as HTMLElement) : null;
    if (!target) return;

    if (target.tagName !== "IMG" && target.tagName !== "BUTTON") {
      setShowGalery(false);
    }
  };

  return (
    <>
      {showGalery && (
        <div className="galery" onClick={closeGalery}>
          <Slider {...settings}>
            {videos.map((item, key) => {
              return (
                <div className="mySlider" key={key}>
                  <video autoPlay={true} muted={true} loop={true}>
                    <source src={item} type="video/mp4" />
                  </video>
                </div>
              );
            })}
          </Slider>
        </div>
      )}
      <Slider {...settings}>
        {videos.map((item, key) => {
          return (
            <div
              className="mySlider"
              key={key}
              onClick={() => handleClick(key)}
            >
              <video autoPlay={true} muted={true} loop={true}>
                <source src={item} type="video/mp4" />
              </video>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default VideoSlider;
