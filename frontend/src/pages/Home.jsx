import { Button } from 'components/Button';
import Carousel from 'components/Carousel';
import { EclipseBckgrnd } from 'components/EclipseBckgrnd';
import { useMedia } from 'react-use';
import React from "react";
// import { useLocation } from "react-router-dom";

const Home = () => {

  const isLargeScreen = useMedia('(min-width: 1024px)');
  
  const size1 = isLargeScreen ? 'large' : 'medium';
  const size2 = isLargeScreen ? 'medium' : 'small';

  return (
    // first section
    <div>
      <div className="relative flex flex-col items-center justify-center w-full sm:h-full lg:h-1/2">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
        <img
          src={require("../resources/img/Billboard.png")}
          alt="Billboard"
          className="w-full h-full"
        />
        <div className="absolute top-7 left-20 w-93vw h-full flex flex-col justify-center items-start p-4">
          <div className="text-white text-shadow-lg font-RecoletaAlt font-semibold sm:text-6xl lg:text-7xl">
            Giving hope through service.
            <div className="sm:pt-5 lg:pt-8">
              <Button variant="green" size={size1}>
                BROWSE OPPORTUNITIES
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className="w-full h-500 flex justify-center bg-purple_9663FC">
        <div className="flex flex-col items-center top-1/2 left-1/2 w-3/4 h-486 flex-shrink-0 rounded-lg bg-white pb-8 mb-8 -mt-8 z-10">
          <div className="mt-67 text-black text-center font-RecoletaAlt font-semibold text-4xl sm:p-5 lg:p-8">
            All-in-one Volunteering
          </div>
          <div className="flex flex-row justify-end items-center w-full px-auto mr-3">
            <div className="container mx-auto flex flex-col justify-center items-center">
              <img
                src={require("../resources/img/Team.png")}
                alt="Team"
                className="lg:h-2/5 lg:w-2/5 sm:h-2/5 sm:w-2/5"
              />
              <div className="lg:mt-5 sm:mt-3">
                <Button variant="yellow" size={size2}>BE A VOLUNTEER</Button>
              </div>
            </div>
            <div className="container lg:-mx-20 flex flex-col justify-center items-center pr-3">
              <img
                src={require("../resources/img/Briefing.png")}
                alt="Briefing"
                className="lg:h-2/5 lg:w-2/5 sm:h-2/5 sm:w-2/5"
              />
              <div className="lg:mt-5 sm:mt-3">
                <Button variant="yellow" size={size2}>EXPLORE PROJECTS</Button>
              </div>
            </div>
            <div className="container mx-auto flex flex-col justify-center items-center">
              <img
                src={require("../resources/img/Post.png")}
                alt="Post"
                className="lg:h-2/5 lg:w-2/5 sm:h-2/5 sm:w-2/5"
              />
              <div className="lg:mt-5 sm:mt-3">
                <Button variant="yellow" size={size2}>POST OPPORTUNITIES</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-1514 flex-col justify-center items-center mt-67 flex-shrink-0 text-purple_4000C1 text-center font-RecoletaAlt font-semibold text-5xl sm:p-5 lg:p-8">
        Trending Projects
      </div>
      <div className="mt-67 mb-10">
        <Carousel />
      </div>

      {/* third section -- not done */}
      <div className="mt-85 h-850 flex-shrink-0 bg-yellow-300">
        {/* <EclipseBckgrnd /> */}
      </div>

      {/* last section */}
      <div className="flex justify-center items-center">
        {/* edit max height and image overflow */}
        <div className="relative w-full h-full flex-shrink-1">
          <div className="absolute top-0 left-0 w-full h-full bg-purple_9663FC opacity-50 z-10"></div>
          <img
            src={require("../resources/img/FooterImg.png")}
            alt="FooterImg"
            className="relative z-1"
          />
        </div>
        <div className="absolute flex items-center w-1020 h-62.434 flex-col justify-center text-white text-center z-10">
          <div className="font-RecoletaAlt text-4xl lg:text-5xl z-3">
            You can make a difference today!
          </div>
          <div className="font-DMSans text-xl lg:text-2xl z-3">
            There’s a lot more we can do, together.
          </div>
          <div className="z-3 mt-4">
            <Button variant="yellow" size={size1}>
              SIGN UP NOW
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
