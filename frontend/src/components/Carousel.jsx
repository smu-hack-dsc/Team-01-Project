// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { CarouselCard } from "components/CarouselCard";
// import ArrowAngleLeft from "resources/img/ArrowAngleLeft";
// import ArrowAngleRight from "resources/img/ArrowAngleRight";
// import { css } from "@emotion/css";

// const Carousel = () => {
//   const sliderRef = React.useRef(null);

//   const handlePrevious = () => {
//     sliderRef.current?.slickPrev();
//   };

//   const handleNext = () => {
//     sliderRef.current?.slickNext();
//   }

//   const carouselSettings = {
//     dots: true, // Show navigation dots
//     infinite: true, // Enable infinite looping
//     speed: 500, // Transition speed in milliseconds
//     slidesToShow: 3, // Number of slides to show at once
//     slidesToScroll: 1, // Number of slides to scroll per swipe
//     prevArrow: <></>, // Remove the default previous arrow
//     nextArrow: <></>, // Remove the default next arrow
//   };

//   return (
//     <div
//       className={css`
//         display: flex;
//         align-items: center;
//     `}>
//       <button
//         onClick={handlePrevious}
//         className={css`
//         display: flex;
//         align-items: flex-start;
//         margin-left: 20px;
//         margin-right: 20px;
//         padding: 8px;
//         background: #FFF;
//         border: none;
//         border-radius: 25px;
//         box-shadow: 0 2px 3px -1px rgba(79, 81, 89, 0.29),
//           0px 2px 5px -1px rgba(79, 81, 89, 0.03),
//           0px 1px 0px 0px rgba(255, 255, 255, 0.06) inset,
//           0px 0.5px 0px 0px rgba(255, 255, 255, 0.06) inset;
//         transition: background 0.2s;

//         &:hover {
//           background: #F5F5F7;
//         }
//     `}>
//         <ArrowAngleLeft />
//       </button>

//       <div
//         className={css`
//           width: 1387px; // Set a width for the Slider component
//         `}
//       >
//       <Slider {...carouselSettings} ref={sliderRef}>
//         <CarouselCard />
//         <CarouselCard />
//         <CarouselCard />
//         <CarouselCard />
//         <CarouselCard />
//         <CarouselCard />
//         <CarouselCard />
//         <CarouselCard />
//         <CarouselCard />
//         <CarouselCard />
//       </Slider>
//       </div>

//       <button
//       onClick={handleNext}
//       className={css`
//         display: flex;
//         align-items: flex-start;
//         margin-right: 20px;
//         padding: 8px;
//         background: #FFF;
//         border: none;
//         border-radius: 25px;
//         box-shadow: 0 2px 3px -1px rgba(79, 81, 89, 0.29),
//           0px 2px 5px -1px rgba(79, 81, 89, 0.03),
//           0px 1px 0px 0px rgba(255, 255, 255, 0.06) inset,
//           0px 0.5px 0px 0px rgba(255, 255, 255, 0.06) inset;
//         transition: background 0.2s;

//         &:hover {
//           background: #F5F5F7;
//         }
//       `}>
//         <ArrowAngleRight />
//       </button>

//     </div>
//   );
// };

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselCard } from "components/CarouselCard";
import PrevButton from "components/PrevButton";
import NextButton from "components/NextButton";
import { useMedia } from 'react-use';

const Carousel = () => {

  const isLargeScreen = useMedia('(min-width: 1224px)');

  const slidesToShow = isLargeScreen ? 5 : 3;

  const sliderRef = React.useRef(null);

  const handlePrevious = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  }

  const carouselSettings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: slidesToShow, 
    slidesToScroll: 1, 
    prevArrow: <></>, 
    nextArrow: <></>, 
  };

  return (
    <div className="flex flex-col justify-center">
      {/* <PrevButton />       */}
      <Slider {...carouselSettings} ref={sliderRef}>
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
      </Slider>
      {/* <NextButton />       */}
    </div>
  );
};

export default Carousel;

