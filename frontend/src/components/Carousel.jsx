import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import api from "../api"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "components/CarouselCard";
import { useMedia } from 'react-use';

const Carousel = () => {

  const isLargeScreen = useMedia('(min-width: 1224px)');
  const isSmScreen = useMedia('(min-width: 740px)');

  const slidesToShow = isLargeScreen ? 5 : isSmScreen ? 3 : 2;

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

  const [projectData, setProjectData] = useState([])

  useEffect(() => {

    const fetchProject = async () => {
      try {
        const response = await api.get('/activity/');
        setProjectData(response.data);
      } catch (error) {
        console.log('Error fetching project carousel: ', error);
      }
    }

    fetchProject();
  }, []);

  return (
    <div>
      <Slider {...carouselSettings}>
        {projectData.map((project) => (
          <CarouselCard
            key={project._id}
            id={project._id}
            activityName={project.activityName}
            description={project.description}
            imageUrl={project.imageInfo?.imagePath}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;