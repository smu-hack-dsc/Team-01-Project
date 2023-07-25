// // tailwind attempt LOL
// import React from 'react';

// const ProfileDescr = () => {

//   const headerStyles = 'flex flex-col flex-shrink-0 text-black font-DMSans font-bold text-18 leading-normal';
//   const contentStyles = 'flex-shrink-0 text-gray-400 font-normal text-15 leading-18 mb-20';
//   const iconStyles = 'w-24 h-25.711 flex-shrink-0 mt-10';

//   return (
//     <div className="w-219 h-661.711 flex-shrink-0">
//       <img
//         src={require("../resources/img/Siyu.png")}
//         alt="Siyu"
//         className="h-214 rounded-13 mb-15" // doesnt show up
//       />

//       {/*error with tailwind -- styling doesnt match*/}
//       <div className="text-black text-25 font-DMSans font-bold leading-normal mb-10">
//         Tay Si Yu
//       </div>

//       <div className="flex justify-between">
//         <div className={headerStyles}>
//           <div className="flex justify-between gap-20 mb-15">
//             <div>12 posts</div>
//             <div>12.8k friends</div>
//           </div>
//         </div>
//       </div>

//       <div className={contentStyles}>
//         Lorem ipsum dolor sit amet,
//         consectetur adipiscing elit.
//         Donec placerat volutpat magna,
//         sed ornare nunc auctor et.
//         Curabitur sed massa libero.
//         Nullam ut sem libero.
//         Nullam nec fermentum elit,
//         sed ullamcorper elit.
//         Curabitur tristique mollis.
//       </div>

//       {/*this is weird*/}
//       <div className="w-202.002 h-1 bg-gray-300 mb-15" />

//       <div className={headerStyles}>Interests</div>
//       <div className={contentStyles}>Youth Education, Environment Conservation</div>

//       <div className={headerStyles}>Location</div>
//       <div className={contentStyles}>Singapore, Singapore</div>

//       <div className="flex gap-20">
//         <img //looks hella weird
//           src={require("../resources/img/Settings.png")}
//           alt='Settings'
//           className={iconStyles}
//         />
//         <img
//           src={require("../resources/img/Question.png")}
//           alt='Help'
//           className={iconStyles}
//         />
//       </div>
//     </div>
//   );
// };

// export default ProfileDescr;



import { css } from '@emotion/css';

const ProfileDescr = () => {

  const headerStyles = css`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  color: #000;
  font-family: DM Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  `;

  const contentStyles = css`
  flex-shrink: 0;
  color: rgba(0, 0, 0, 0.40);
  font-family: DM Sans;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 138.462% */
  margin-bottom: 20px;
  `;

  const iconStyles = css`
  width: 24px;
  height: 25.711px;
  flex-shrink: 0;
  margin-top: 10px;
  `;

  return (
    <div
      className={css`
      width: 219px;
      height: 661.711px;
      flex-shrink: 0;
    `}
    >
      <img
        src={require("../resources/img/Siyu.png")}
        alt="Siyu"
        className={css`
        height: 214px;
        border-radius: 13px;
        margin-bottom: 15px;
        `}
      />

      <div
        className={css`
        color: #000;
        font-family: DM Sans;
        font-size: 25px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 10px;
        `}
      >
        Tay Si Yu
      </div>

      <div className={css`
        display: flex;
        justify-content: space-between;
      `}
      >
        <div className={headerStyles}>
          <div className={css`
            display: flex;
            justify-content: space-between;
            width: 100%;
            gap: 20px;
            margin-bottom: 15px;
          `}
          >
            <div>12 posts</div>
            <div>12.8k friends</div>
          </div>
        </div>
      </div>

      <div
        className={contentStyles}
      >
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
        Donec placerat volutpat magna,
        sed ornare nunc auctor et.
        Curabitur sed massa libero.
        Nullam ut sem libero.
        Nullam nec fermentum elit,
        sed ullamcorper elit.
        Curabitur tristique mollis.
      </div>

      <div
        className={css`
        width: 202.002px;
        height: 1px;
        background: #EDEDED;
        margin-bottom: 15px;
        `}
      />

      <div className={headerStyles}>Interests</div>
      <div className={contentStyles}>Youth Education, Environment Conservation</div>

      <div className={headerStyles}>Location</div>
      <div className={contentStyles}>Singapore, Singapore</div>

      <div className={css`
        display: flex;
        gap: 20px;
      `}
      >
        <img
          src={require("../resources/img/Settings.png")}
          alt='Settings'
          className={iconStyles}
        />
        <img
          src={require("../resources/img/Question.png")}
          alt='Help'
          className={iconStyles}
        />
      </div>

    </div>
  );
};

export default ProfileDescr;