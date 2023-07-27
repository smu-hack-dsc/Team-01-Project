import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselCard } from "components/CarouselCard";
import { useMedia } from 'react-use';

const Carousel = () => {

  const isLargeScreen = useMedia('(min-width: 1224px)');

  const slidesToShow = isLargeScreen ? 5 : 3;

  const sliderRef = React.useRef(null);

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
      <Slider {...carouselSettings} ref={sliderRef}>
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
      </Slider>
    </div>
  );
};

export default Carousel;

