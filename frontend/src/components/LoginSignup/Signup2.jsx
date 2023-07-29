import React from 'react';
import { css } from '@emotion/css';
import SignupInputDOB from "components/LoginSignup/Signup2InputDOB";

const Signup2 = () => (
  // <div
  //   className={css`
  //     width: 100%;
  //     background: #FFF;
  //     max-width: 1514px;
  //     position: relative; /* Add relative positioning for the nested div */
  //     margin: 0;
  //     padding: 0;
  //     height: 100vh; /* Set the height of the body to the viewport height */
  //     overflow: hidden; /* Hide both horizontal and vertical scrollbars */
  //   `}
  // >
  //   <div
  //     className={css`
  //       width: 1587.099px;
  //       height: 544.196px;
  //       transform: rotate(-3.819deg);
  //       flex-shrink: 0;
  //       background: #EDEDED;
  //       position: absolute;
  //       top: -229px;
  //       left: -63px;
  //       z-index: 1;
  //     `}
  //   />
  //   <div
  //     className={css`
  //       display: flex;
  //       position: relative;
  //       top: 170px;
  //       flex-direction: column;
  //       justify-content: center;
  //       align-items: center;
  //       flex-shrink: 0;
  //       z-index: 2;
  //       `}
  //   >
  //     <div
  //       className={css`
  //         color: #000;
  //         text-align: center;
  //         font-family: Uncut Sans;
  //         font-size: 40px;
  //         font-style: normal;
  //         font-weight: 700;
  //         line-height: 16px; /* 40.001% */
  //         letter-spacing: -0.12px;
  //         margin-bottom: 50px;
  //       `}
  //     >
  //       Basic Information
  //     </div>

  //     <div
  //       className={css`
  //       color: #000;
  //       text-align: center;
  //       font-family: Uncut Sans;
  //       font-size: 20px;
  //       font-style: normal;
  //       font-weight: 500;
  //       line-height: 23px; /* 115% */
  //       letter-spacing: -0.12px;
  //       margin-bottom: 100px;
  //       `}
  //     >
  //       Enter your birthday and gender
  //     </div>
  //     <SignupInputDOB />
  //   </div>

  // </div>
  <div>
  <div class="absolute left-0 w-screen h-screen flex flex-col justify-start items-center pt-5 overflow-x-hidden">
    <div class="absolute w-[200vw] h-full -rotate-12 -top-2/3 -left-1/3 bg-gray-200 z-1" />
    <div class="flex relative top-[120px] w-[80vw] flex-col justify-center items-center z-2">
      <div class="flex text-black text-center font-RecoletaAlt text-2xl font-bold pb-12 pt-12">
        Basic Information
      </div>
      <div class="flex text-black text-center font-RecoletaAlt text-2xl font-bold pb-12">
        Enter your name and birthday
      </div>
      <SignupInputDOB />
    </div>
  </div>
</div>
);

export default Signup2;
