// import { css } from '@emotion/css';
import { Button } from 'components/Button';
import { ClickableImage } from 'components/ClickableImage';
import Carousel from 'components/Carousel';
import { EclipseBckgrnd } from 'components/EclipseBckgrnd';
import { TranslucentPurple } from 'components/TranslucentPurple';
import { useMedia } from 'react-use';
import React from "react";
// import { useLocation } from "react-router-dom";

const Home = () => {

  // const isLargeScreen = useMedia('(min-width: 1024px)');
  
  // const size = isLargeScreen ? 'large' : 'medium';

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
        <div className="absolute top-7 left-20 w-full h-full flex flex-col justify-center items-start p-4">
          <div className="text-white text-shadow-lg font-RecoletaAlt font-semibold sm:text-6xl lg:text-7xl">
            Giving hope through service.
            <div className="sm:pt-5 lg:pt-8">
              <Button variant="green" size="large">
                BROWSE OPPORTUNITIES
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className="w-full h-500 flex justify-center bg-purple_9663FC">
        <div className="top-1/2 left-1/2 sm:w-3/4 lg:w-2/3 h-486 flex-shrink-0 rounded-lg bg-white pb-8 mb-8 -mt-8 z-10">
          <div className="flex flex-col justify-center items-center mt-67 text-black text-center font-RecoletaAlt font-semibold text-4xl sm:p-5 lg:p-8">
            All-in-one Volunteering
          </div>
          <div className="flex flex-row justify-center items-center">
            <div className="flex justify-center items-center">
              <img
                src={require("../resources/img/Team.png")}
                alt="Team"
                className="lg:h-full lg:w-full sm:h-2/3 sm:w-2/3"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={require("../resources/img/Briefing.png")}
                alt="Briefing"
                className="lg:h-full lg:w-full sm:h-2/3 sm:w-2/3"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={require("../resources/img/Post.png")}
                alt="Post"
                className="lg:h-full lg:w-full sm:h-2/3 sm:w-2/3"
              />
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
      <div>
        <TranslucentPurple />
      </div>
    </div>
  );
};

export default Home;
