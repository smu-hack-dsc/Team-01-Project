import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import Axios from 'axios';
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
    Axios.get("http://localhost:4001/activity/")
      .then((response) => {
        setProjectData(response.data);
      })
      .catch((error) => {
        console.log('Error fetching projects data: ', error);
      });
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