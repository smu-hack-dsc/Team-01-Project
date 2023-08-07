import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import Axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "components/CarouselCard";
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

  const [projectData, setProjectData] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:4001/activity/")
      .then((response) => {
        setProjectData(response.data);
      })
      .catch((error) => {
        console.log('Error fetching projects data: ', error);
      });
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <Slider {...carouselSettings} ref={sliderRef}>
        {projectData.map((project) => (
          <CarouselCard 
            id={project._id}
            activityName = {project.activityName}
            description = {project.description}
            imageUrl = {project.imageInfo?.imagePath}
          />
        ))}

        {/* <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard /> */}
      </Slider>
    </div>
  );
};

export default Carousel;

