import React from "react";
import "./ButtonSVG.scss";

const ButtonSVG = (props) => {
  let path =
    props.type === "download"
      ? "./assets/Zied_MABROUK_CV.pdf"
      : "mailto:almabrouk.zied@gmail.com";
  return (
    <a href={path} className="btn-track" download={props.type === "download"}>
      {props.type === "download" && (
        <div className="--icon">
          <div className="circle-inner"></div>
          <div className="circle-outer"></div>
          <svg
            width="35"
            height="35"
            viewBox="0 0 508 508"
            style={{ enableBackground: "new 0 0 508 508" }}
            id="box"
          >
            <path
              style={{ fill: "#7e7e7e" }}
              d="M74,433.2c46,46.4,109.6,74.8,180,74.8s134-28.8,180-74.8H74z"
            />
            <path
              style={{ fill: "#2B3B4E" }}
              d="M338.8,431.2H173.2l0,0c0-12,10-22,22-22h121.6C328.8,409.2,338.8,419.2,338.8,431.2L338.8,431.2z"
            />
            <polygon
              style={{ fill: "#324A5E" }}
              points="298.8,409.2 212.8,409.2 193.2,347.2 318.8,347.2 "
            />
            <polygon
              style={{ fill: "#2B3B4E" }}
              points="308.4,379.2 318.8,347.2 193.2,347.2 203.2,379.2 "
            />
            <path
              style={{ fill: "#324A5E" }}
              d="M421.2,369.2H86.8c-9.2,0-16.4-7.2-16.4-16.4V140.4c0-9.2,7.2-16.4,16.4-16.4h334.4
	c9.2,0,16.4,7.2,16.4,16.4v212.4C437.6,361.6,430.4,369.2,421.2,369.2z"
            />
            <rect
              x="84.4"
              y="137.2"
              style={{ fill: "#54C0EB" }}
              width="338.8"
              height="200.8"
            />
            <polygon
              style={{ fill: "#84DBFF" }}
              points="382,137.2 84.4,137.2 84.4,338 206,338 "
            />
          </svg>
          <svg width="10" height="14" viewBox="0 0 32 32" id="pin">
            <path
              d="M32,16.016l-5.672-5.664c0,0-3.18,3.18-6.312,6.312V0h-8.023v16.664l-6.32-6.32L0,16.016L16,32
           L32,16.016z"
              fill="#1f1f38"
            />
          </svg>
        </div>
      )}
      {props.type === "contact" && (
        <div className="--icon">
          <svg
            width="55"
            height="55"
            viewBox="0 0 508 508"
            style={{ enableBackground: "new 0 0 508 508" }}
            id="talk"
          >
            <path
              d="M174.697,171.743c-6.642,0-12.029,5.384-12.029,12.024c0,6.643,5.387,12.029,12.029,12.029
				c6.639,0,12.024-5.386,12.024-12.029C186.721,177.128,181.336,171.743,174.697,171.743z"
            />
            <path
              d="M166.289,197.522H53.252c-4.142,0-7.5,3.358-7.5,7.5c0,35.3,28.718,64.018,64.018,64.018s64.018-28.718,64.018-64.018
				C173.789,200.881,170.431,197.522,166.289,197.522z M109.771,254.042c-24.48,0-44.826-18.036-48.445-41.518h96.891
				C154.596,236.006,134.25,254.042,109.771,254.042z"
            />
            <path
              d="M276.858,56.412c-43.409,0-80.058,29.472-91.005,69.457c-20.329-19.617-47.315-30.618-76.083-30.618
				C49.243,95.251,0,144.495,0,205.022c0,60.528,49.243,109.771,109.771,109.771c45.009,0,85.214-27.417,101.847-68.792
				c10.326-0.334,20.393-3.057,29.442-7.957c11.378,4.683,23.401,7.055,35.799,7.055c52.023,0,94.347-42.322,94.347-94.342
				C371.205,98.735,328.881,56.412,276.858,56.412z M182.982,236.522c0.429,2.753,2.349,5.042,4.986,5.942
				c2.6,0.888,5.241,1.613,7.913,2.171c-15.326,33.345-48.805,55.158-86.11,55.158C57.514,299.793,15,257.28,15,205.022
				c0-52.257,42.514-94.771,94.771-94.771c28.44,0,54.866,12.456,72.956,34.276c-0.135,2.06-0.211,4.136-0.211,6.229
				c0,21.005,7.035,41.397,19.896,57.916c-3.593,8.199-9.235,15.29-16.488,20.672C183.686,231.006,182.553,233.769,182.982,236.522z
				 M276.858,230.1c-11.538,0-22.689-2.442-33.144-7.257c-2.292-1.056-4.96-0.888-7.102,0.445c-8.143,5.07-17.532,7.75-27.154,7.75
				c-1.145,0-2.288-0.038-3.426-0.114c5.252-6.203,9.334-13.344,12.043-21.144c0.876-2.524,0.344-5.323-1.397-7.349
				c-12.358-14.378-19.164-32.729-19.164-51.673c0-43.751,35.593-79.345,79.343-79.345c43.752,0,79.347,35.594,79.347,79.345
				C356.205,194.506,320.61,230.1,276.858,230.1z"
            />
            <path
              d="M56.873,183.769c0-6.64-5.382-12.024-12.025-12.024c-6.644,0-12.027,5.384-12.027,12.024
				c0,6.643,5.383,12.029,12.027,12.029C51.491,195.797,56.873,190.41,56.873,183.769z"
            />
            <path
              d="M322.17,131.199h-90.624c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h90.624c4.142,0,7.5-3.358,7.5-7.5
				C329.67,134.556,326.313,131.199,322.17,131.199z"
            />
            <path
              d="M316.084,154.701h-78.451c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h78.451c4.142,0,7.5-3.358,7.5-7.5
				C323.584,158.058,320.226,154.701,316.084,154.701z"
            />
            <path
              d="M303.564,178.204h-53.411c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h53.411c4.142,0,7.5-3.358,7.5-7.5
				C311.064,181.561,307.706,178.204,303.564,178.204z"
            />
            <path
              d="M250.153,122.696h53.411c4.142,0,7.5-3.358,7.5-7.5c0-4.142-3.358-7.5-7.5-7.5h-53.411c-4.142,0-7.5,3.358-7.5,7.5
				C242.653,119.337,246.011,122.696,250.153,122.696z"
            />
          </svg>
        </div>
      )}

      <div className="--text">{props.content}</div>
    </a>
  );
};

export default ButtonSVG;
