// import { Button } from "components/Button";
import Carousel from "components/Carousel";
import { useMedia } from "react-use";
// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { arrowForward } from "ionicons/icons";
// import { useLocation } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const isLargeScreen = useMedia("(min-width: 1024px)");
  const size3 = isLargeScreen ? "large" : "small";

  const handleProjectsClick = async () => {
    navigate("/projects");
  };

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
        <div className="absolute top-7 left-16 w-auto h-full flex flex-col justify-center items-start xs:p-2 md:p-4">
          <div className="text-white text-shadow-lg font-RecoletaAlt font-semibold xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Giving hope through service.
            <div className="xs:pt-2 lg:pt-8">
              <button
                className="font-DMSans xs:text-base md:text-2xl md:px-5 md:py-2 text-base xs:px-3 xs:py-1 text-black bg-green_C8F3D9 rounded-full"
                onClick={handleProjectsClick}
              >
                BROWSE OPPORTUNITIES
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className="hidden md:flex w-full h-500 justify-center bg-purple_9663FC">
        <div className="flex flex-col items-center top-1/2 left-1/2 w-3/4 h-486 flex-shrink-0 rounded-lg bg-white pb-8 mb-8 xs:-mt-4 sm:-mt-8 z-10">
          <div className="mt-67 text-black text-center font-RecoletaAlt font-semibold xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xs:p-3 sm:p-5 lg:p-8">
            All-in-one Volunteering
          </div>
          <div className="flex flex-row justify-end items-center w-full px-auto mr-3">
            <div className="container mx-auto flex flex-col justify-center items-center">
              <img
                src={require("../resources/img/Team.png")}
                alt="Team"
                className="xs:h-2/5 xs:w-2/5"
              />
              <div className="lg:mt-5 sm:mt-3">
                <button
                  className="bg-yellow_FFDA7A xs:text-sm sm: p-2 text-base px-3 py-2 lg:text-lg hover:bg-yellow-400 rounded-full font-semibold"
                  onClick={async () => navigate("/login")}
                >
                  VOLUNTEER
                </button>
              </div>
            </div>
            <div className="container lg:-mx-20 flex flex-col justify-center items-center pr-3">
              <img
                src={require("../resources/img/Briefing.png")}
                alt="Briefing"
                className="xs:h-2/5 xs:w-2/5"
              />
              <div className="lg:mt-5 sm:mt-3">
                <button
                  className="bg-yellow_FFDA7A xs:text-sm sm: p-2 text-base px-3 py-2 lg:text-lg hover:bg-yellow-400 rounded-full font-semibold"
                  onClick={async () => navigate("/projects")}
                >
                  EXPLORE PROJECTS
                </button>
              </div>
            </div>
            <div className="container mx-auto flex flex-col justify-center items-center">
              <img
                src={require("../resources/img/Post.png")}
                alt="Post"
                className="xs:h-2/5 xs:w-2/5"
              />
              <div className="lg:mt-5 sm:mt-3">
                <button
                  className="bg-yellow_FFDA7A xs:text-sm sm: p-2 text-base px-3 py-2 lg:text-lg hover:bg-yellow-400 rounded-full font-semibold"
                  onClick={async () => navigate("/community")}
                >
                  POST OPPORTUNITIES
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-1514 flex-col justify-center items-center mt-67 flex-shrink-0 text-purple_4000C1 text-center font-RecoletaAlt font-semibold xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xs:p-3 sm:p-5 lg:p-8">
        Trending Projects
      </div>
      <div className="flex flex-col ml-auto -mt-2 mb-10">
        <Carousel />
      </div>

      {/* third section -- not done */}
      {/* put the yellow design things in the bg */}
      <div className="flex justify-center items-start flex-row mt-85 flex-shrink-0 bg-yellow_FFDA7A overflow-hidden">
        <div className="flex xs:w-[170px] sm:w-[250px] lg:w-[300px] flex-col justify-center items-start mt-67 font-RecoletaAlt xs:text-2xl sm:text-3xl lg:text-5xl xs:py-3 sm:py-5 lg:py-8">
          Explore these Causes
          <img
            src={require("../resources/img/CurlyArrow.png")}
            alt="Curly Arrow"
            className="xs:w-1/3 sm:w-1/2 lg:w-3/5 xs:ml-20 sm:ml-24 mt-2 -rotate-6"
          ></img>
        </div>
        <div className="flex flex-row items-center">
          <div className="flex flex-col items-start sm:py-5 lg:py-8 sm:pl-0 lg:pl-10">
            <div className="sm:h-24 lg:h-40 w-full rounded-l-full bg-yellow_FFF497 sm:-mt-16 lg:-mt-28 mb-2" />
            <button
              className="my-1 xs:px-8 sm:px-10 lg:px-20 xs:py-2 sm:py-4 lg:py-5 bg-white text-black rounded-2xl hover:bg-gray-200 font-DMSans font-semibold xs:text-sm lg:text-xl"
              onClick={handleProjectsClick}
            >
              CAUSE 1
            </button>
            <button
              className="my-1 xs:px-8 sm:px-10 lg:px-20 xs:py-2 sm:py-4 lg:py-5 bg-white text-black rounded-2xl hover:bg-gray-200 font-DMSans font-semibold xs:text-sm lg:text-xl"
              onClick={handleProjectsClick}
            >
              CAUSE 2
            </button>
            <button
              className="my-1 xs:px-8 sm:px-10 lg:px-20 xs:py-2 sm:py-4 lg:py-5 bg-white text-black rounded-2xl hover:bg-gray-200 font-DMSans font-semibold xs:text-sm lg:text-xl"
              onClick={handleProjectsClick}
            >
              CAUSE 3
            </button>
            <button
              className="my-1 xs:px-8 sm:px-10 lg:px-20 xs:py-2 sm:py-4 lg:py-5 bg-white text-black rounded-2xl hover:bg-gray-200 font-DMSans font-semibold xs:text-sm lg:text-xl"
              onClick={handleProjectsClick}
            >
              CAUSE 4
            </button>
            <button
              className="xs:flex sm:hidden flex-row items-center mt-2 mb-1 text-black rounded-2xl hover:text-gray-600 font-DMSans font-semibold text-sm"
              onClick={handleProjectsClick}
            >
              DISCOVER MORE
              <IonIcon icon={arrowForward} size={size3}></IonIcon>
            </button>
            <div className="sm:h-24 lg:h-40 w-full rounded-full bg-yellow_FFF497 sm:-mb-24 lg:-mb-40 mt-2" />
          </div>

          <div className="hidden sm:flex flex-col items-start sm:py-5 lg:py-8 sm:pl-3 lg:pl-10">
            <div className="sm:h-24 lg:h-40 w-full rounded-full bg-yellow_FFF497 sm:-mt-24 lg:-mt-40 mb-2" />
            <button
              className="my-1 sm:px-10 lg:px-20 sm:py-4 lg:py-5 bg-white text-black rounded-2xl hover:bg-gray-200 font-DMSans font-semibold sm:text-sm lg:text-xl"
              onClick={handleProjectsClick}
            >
              CAUSE 5
            </button>
            <button
              className="my-1 sm:px-10 lg:px-20 sm:py-4 lg:py-5 bg-white text-black rounded-2xl hover:bg-gray-200 font-DMSans font-semibold sm:text-sm lg:text-xl"
              onClick={handleProjectsClick}
            >
              CAUSE 6
            </button>
            <button
              className="my-1 sm:px-10 lg:px-20 sm:py-4 lg:py-5 bg-white text-black rounded-2xl hover:bg-gray-200 font-DMSans font-semibold sm:text-sm lg:text-xl"
              onClick={handleProjectsClick}
            >
              CAUSE 7
            </button>
            <button
              className="flex flex-row items-center my-1 sm:px-1 lg:px-6 sm:py-4 lg:py-5 bg-white text-black rounded-2xl hover:bg-gray-200 font-DMSans font-semibold sm:text-sm lg:text-xl"
              onClick={handleProjectsClick}
            >
              DISCOVER MORE
              <IonIcon icon={arrowForward} size={size3}></IonIcon>
            </button>
            <div className="sm:h-24 lg:h-40 w-full rounded-r-full bg-yellow_FFF497 sm:-mb-16 lg:-mb-28 mt-2" />
          </div>
        </div>
      </div>

      {/* last section */}
      <div className="flex justify-center items-center">
        {/* edit max height and image overflow */}
        <div className="relative w-full h-full flex-shrink-1">
          <div className="absolute top-0 left-0 w-full h-full bg-purple_9663FC opacity-50 z-10"></div>
          <img
            src={require("../resources/img/FooterImg.png")}
            alt="FooterImg"
            className="relative z-1 w-full"
          />
        </div>
        <div className="absolute flex items-center w-1020 h-62.434 flex-col justify-center text-white text-center z-10">
          <div className="font-RecoletaAlt xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl z-3">
            You can make a difference today!
          </div>
          <div className="font-DMSans text-xl xs:text-base sm:text-xl lg:text-2xl z-3">
            There’s a lot more we can do, together.
          </div>
          <div className="z-3 mt-4">
            <button
              className=" bg-yellow_FFDA7A font-DMSans text-black font-semibold rounded-full xs:text-sm sm:text-base xs:py-1 xs:px-2 sm:py-2 sm:px-4"
              onClick={async () => navigate("/login")}
            >
              SIGN UP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
