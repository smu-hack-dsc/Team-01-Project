// import { css } from '@emotion/css';
// import { Button } from 'components/Button';

// const CarouselCard = () => (
//   <div
//     className={css`
//       display: flex;
//       flex-direction: column;
//       width: 424px;
//       height: 459.965px;
//       flex-shrink: 0;
//       border-radius: 30px;
//       background: #F5F5F7;
//     `}
//   >
//     <img src={require("../resources/img/Project.png")} alt="Project"
//       className={css`
//         width: 100%;
//         height: 187px;
//         overflow: hidden;
//       `}
//     />
//     <div
//       className={css`
//         display: flex;
//         justify-content: space-between;
//       `}
//     >
//       <div
//         className={css`
//         display: flex;
//         width: 247px;
//         height: 59.682px;
//         flex-direction: column;
//         justify-content: center;
//         flex-shrink: 0;
//         color: #000;
//         font-family: DM Sans;
//         font-size: 32px;
//         font-style: normal;
//         font-weight: 700;
//         line-height: normal;
//         margin-left: 16px;
//       `}
//       >
//         Project Name
//       </div>
//       <div
//         className={css`
//         display: flex;
//         width: 35.2px;
//         height: 39.514px;
//         flex-direction: column;
//         justify-content: center;
//         flex-shrink: 0;
//         color: #000;
//         text-align: center;
//         font-family: DM Sans;
//         font-size: 14px;
//         font-style: normal;
//         font-weight: 700;
//         line-height: normal;
//         margin-right: 32px;
//         margin-top: 12px;
//       `}
//       >
//         Org Logo
//       </div>
//     </div>
//     <p
//       className={css`
//         height: 82px;
//         color: #000;
//         font-family: DM Sans;
//         font-size: 20px;
//         font-style: normal;
//         font-weight: 400;
//         line-height: normal;
//         margin-left: 16px;
//         margin-top: 15px;
//       `}
//     >
//       Project description
//     </p>
//     <div
//       className={css`
//         margin-left: 11px;
//         margin-top: auto;
//         margin-bottom: 14px;
//       `}
//     >
//       <Button
//         variant="green" size="small"
//       >
//         LEARN MORE
//       </Button>
//     </div>
//   </div>
// )

// export { CarouselCard };

import React from 'react';
import { Button } from 'components/Button';
import { IonIcon } from '@ionic/react';
import { image } from 'ionicons/icons';

const CarouselCard = () => (
  <div className="flex flex-col sm:w-1/3 lg:w-1/5 sm:h-1/4 lg:h-2/5 bg-gray-100 rounded-lg my-2 mx-2">
    <img
      src={require("../resources/img/Project.png")}
      alt="Project"
      className="w-full h-187 object-cover rounded-lg"
    />
    <div className="flex justify-between">
      <div className="w-247 h-59.682 flex flex-col justify-center text-black font-DMSans sm:text-xl lg:text-2xl font-semibold ml-4 sm:mt-2 lg:mt-2.5">
        Project Name
      </div>
      <div className="w-35.2 h-39.514 flex flex-col justify-center text-black font-DMSans text-sm font-semibold mr-4 mt-2">
        <IonIcon icon={ image } size="large"></IonIcon>
      </div>
    </div>
    <p className="h-82 text-black font-DMSans text-sm font-normal ml-4 mt-1">
    Join us in our tree planting volunteer opportunity and make a positive impact on the environment by planting trees, promoting sustainability, and creating a greener future for our community.
    </p>
    <div className="ml-3 mt-2 mb-20">
      <Button variant="green" size="small">
        LEARN MORE
      </Button>
    </div>
  </div>
);

export { CarouselCard };
