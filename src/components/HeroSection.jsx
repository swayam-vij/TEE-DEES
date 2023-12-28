import React, { useState, useEffect } from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
const images = [image1, image2, image3];

function HeroSection({ mode }) {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  const bgColor = mode === "dark" ? "black" : "white";

  useEffect(() => {
    // Auto change slide every 5 seconds
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3500);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [current]);

  return (
    <div className={bgColor}>
      <div className="slider flex justify-evenly p-5 items-center">
        <div
          className="left-arrow bg-gray-200 hover:bg-gray-400 hover:text-white p-2 rounded-lg cursor-pointer"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        {images.map(
          (image, index) =>
            current === index && (
              <div key={image} className="slide flex justify-center">
                <img className="w-[80%] rounded-2xl" src={image} alt="images" />
              </div>
            )
        )}
        <div
          className="right-arrow bg-gray-200 hover:bg-gray-400 hover:text-white p-2 rounded-lg cursor-pointer"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
