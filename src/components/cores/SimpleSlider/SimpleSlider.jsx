import React, { useState } from "react";
import Slider from "react-slick";
import "./SimpleSlider.scss";

const SimpleSlider = (props) => {
  let [muted, setMuted] = useState(true);
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
  };
 
  return (
    <Slider {...settings}>
      {props.videos.map((item, key) => {
        let changeMute = () => setMuted(!muted);
        return (
          <div className="mySlider" key={key} onClick={changeMute}>
            <video autoPlay={1} muted={muted} loop={true}>
              <source src={item} type="video/mp4" />
            </video>
          </div>
        );
      })}
    </Slider>
  );
};

export default SimpleSlider;
