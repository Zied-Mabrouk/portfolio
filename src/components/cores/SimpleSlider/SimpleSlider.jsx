import React, { useState } from "react";
import Slider from "react-slick";
import "./SimpleSlider.scss";

const SimpleSlider = (props) => {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  };

  let [showGalery, setShowGalery] = useState(false);
  let [galeryPics,setGaleryPics] = useState([]);

  let handleClick = (e, k) => {
    setShowGalery(true);
    if(k)
    {
      let tmp = [];
      for(let i=0,index=k;i<props.photos.length;i++,index++)
      {
        if(index===props.photos.length)
        {
          index=0;
        }
        tmp.push(props.photos[index]);
      }
      setGaleryPics(tmp);
    }
    else
    setGaleryPics(props.photos);
  };
  let closeGalery = (e) => {
    if(e.target.tagName !== "IMG"){
      setShowGalery(false);
    }
  };

  return props.videos?.length ? (
    <Slider {...settings}>
      {props.videos.map((item, key) => {
        return (
          <div className="mySlider" key={key}>
            <video autoPlay={1} muted={true} loop={true}>
              <source src={item} type="video/mp4" />
            </video>
          </div>
        );
      })}
    </Slider>
  ) : (
    <>
      {showGalery && (
        <div  className="galery" onClick={closeGalery}>
          <Slider {...settings}>
            {galeryPics.map((item, key) => {
              return (
                <div className="mySlider" key={key}>
                  <img src={item} alt={key} />
                </div>
              );
            })}
          </Slider>
        </div>
      )}
      <Slider  {...settings}>
        {props.photos.map((item, key) => {
          return (
            <div
              className="mySlider"
              key={key}
              onClick={(event) => handleClick(event, key)}
            >
              <img src={item} alt={key} />
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default SimpleSlider;
