import { css } from '@emotion/css';
import { Button } from 'components/Button';
import { ClickableImage } from 'components/ClickableImage';
import { Carousel } from 'components/Carousel';
import { EclipseBckgrnd } from 'components/EclipseBckgrnd';
import { TranslucentPurple } from 'components/TranslucentPurple';
import React from "react";
// import { useLocation } from "react-router-dom";

// function Home() {
//   return (
//     <div>
//       <div
//         className={css`
//         position: relative;
//         width: 1514px;
//         height: 909px;
//         flex-shrink: 0;
//       `}>
//         <img
//           src={require("../resources/img/Billboard.png")}
//           alt="Billboard"
//           className={css`
//           width: 100%;
//           height: 100%;
//         `}
//         />
//         <div
//           className={css`
//           position: absolute;
//           top: 198px;
//           left: 105px;
//           width: 738px;
//           height: 242px;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           color: #FFF;
//           text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
//           font-family: Recoleta Alt;
//           font-size: 96px;
//           font-style: normal;
//           font-weight: 700;
//           line-height: normal;
//         `}
//         >
//           Giving hope through service.
//         </div>
//         <div
//           className={css`
//           position: absolute;
//           top: 470px;
//           left: 100px;
//         `}
//         >
//           <Button
//             variant="green"
//             size="large"
//           >
//             BROWSE OPPORTUNITIES
//           </Button>
//         </div>
//       </div>
//       <div //purple background
//         className={css`
//         width: 1514px;
//         height: 427px;
//         flex-shrink: 0;
//         background: #9663FC;
//       `}
//       ></div>
//       <div
//         className={css`
//         position: absolute;
//         top: 745px;
//         left: 106px;
//         width: 1300px;
//         height: 486px;
//         flex-shrink: 0;
//         border-radius: 24px;
//         background: #FFF;
//         `}
//       >
//         <div
//           className={css`
//           display: flex;
//           position: absolute;
//           top: 40px;
//           left: 281px;
//           width: 738px;
//           height: 68px;
//           flex-direction: column;
//           justify-content: center;
//           flex-shrink: 0;
//           color: #000;
//           text-align: center;
//           font-family: Recoleta Alt;
//           font-size: 48px;
//           font-style: normal;
//           font-weight: 700;
//           line-height: normal;
//         `}
//         >
//           All-in-one Volunteering
//         </div>
//         <ClickableImage />
//       </div>
//       <div
//         className={css`
//         display: flex;
//         width: 1514px;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         margin-top: 67px;
//         flex-shrink: 0;
//         color: #4000C1;
//         text-align: center;
//         font-family: Recoleta Alt;
//         font-size: 72px;
//         font-style: normal;
//         font-weight: 700;
//         line-height: normal;
//         `}
//       >
//         Trending Projects
//       </div>
//       <div
//         className={css`
//         margin-top: 67px;
//         `}
//       >
//         <Carousel />
//       </div>
//       <div
//         className={css`
//         margin-top: 85px;
//         height: 850px;
//         flex-shrink: 0;
//         background: #FFDA7A;
//         `}
//       >
//         <EclipseBckgrnd />
//       </div>
//       <TranslucentPurple />

//     </div>
//   )
// }

const Home = () => {
  return (
    // first section
    <div>
      <div className="relative flex flex-col items-center justify-center w-1514 h-909 flex-shrink-0">
        <img
          src={require("../resources/img/Billboard.png")}
          alt="Billboard"
          className="w-full h-full"
        />
        <div className="absolute top-0 left-20 w-full h-full flex flex-col justify-center items-start p-4">
          <div className="text-white text-shadow-lg font-RecoletaAlt font-semibold text-6xl">
            Giving hope through service.
            <div className="pt-10">
              <Button variant="green" size="large">
                BROWSE OPPORTUNITIES
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className="w-1514 h-427 flex-shrink-0 bg-purple-600"></div>
      <div className="absolute top-745 left-106 w-1300 h-486 flex-shrink-0 rounded-lg bg-white">
        <div className="flex w-1514 flex-col justify-center items-center mt-67 flex-shrink-0 text-black text-center font-RecoletaAlt font-semibold text-4xl sm:p-5 lg:p-8">
          All-in-one Volunteering
        </div>
        <ClickableImage />
      </div>
      {/* <div className="flex w-1514 flex-col justify-center items-center mt-67 flex-shrink-0 text-purple-600 text-center font-RecoletaAlt font-semibold text-5xl sm:p-5 lg:p-8">
        Trending Projects
      </div> */}
      {/* <div className="mt-67">
        <Carousel />
      </div>
      <div className="mt-85 h-850 flex-shrink-0 bg-yellow-300">
        <EclipseBckgrnd />
      </div>
      <TranslucentPurple /> */}
    </div>
  );
};

export default Home;
