import React, { useState } from "react";
import "./Carousel.css";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { sliderDB } from "../../db/sliderDB";

const Carousel = () => {
  const [carouselState, setCarouselState] = useState({
    index: 0,
    data: sliderDB[0],
  });

  const nextSlide = () => {
    // Check if reached the end of data
    const nextSlideCheck = (state) =>
      state.index === sliderDB.length - 1 ? 0 : state.index + 1;

    setCarouselState((state) => ({
      ...state,
      index: nextSlideCheck(state),
      data: sliderDB[nextSlideCheck(state)],
    }));
  };

  const prevSlide = () => {
    // Check if reached the begining of data
    const prevSlideCheck = (state) =>
      state.index === 0 ? sliderDB.length - 1 : state.index - 1;

    setCarouselState((state) => ({
      ...state,
      index: prevSlideCheck(state),
      data: sliderDB[prevSlideCheck(state)],
    }));
  };

  return (
    <div className="carousel-container">
      <div>
        <img
          className="carousel-img"
          src={carouselState?.data?.img}
          alt="carousel"
        />
      </div>
      <>
        <div
          className="carousel-icon-container flex-center left-control pointer"
          onClick={prevSlide}
        >
          <IoChevronBack className="t3" />
        </div>
        <div
          className="carousel-icon-container flex-center right-control pointer"
          onClick={nextSlide}
        >
          <IoChevronForward className="t3" />
        </div>
        <p className="carousel-title t2">{carouselState?.data?.categoryName}</p>
      </>
    </div>
  );
};

export default Carousel;
