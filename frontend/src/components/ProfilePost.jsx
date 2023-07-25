// tailwind attempt
import React from 'react';
const ProfilePost = () => {
  const handleClick = () => {
    // Handle click event here
    console.log('Image clicked!');
  };

    return (
      <div className="w-350 h-242 flex-shrink-0 rounded-13 bg-gray-300 overflow-hidden">
        <a href="UserPost" onClick={handleClick}>
          <img
            src={require("../resources/img/ProfilePost.png")}
            alt="ProfilePost"
          />
        </a>
      </div>
    );
}

export default ProfilePost;


// import { css } from '@emotion/css';

// const ProfilePost = () => {
//   const handleClick = () => {
//     // Handle click event here
//     console.log('Image clicked!');
//   };

//     return (
//       <div
//         className={css`
//       width: 350px;
//       height: 242px;
//       flex-shrink: 0;
//       border-radius: 13px;
//       background: #D9D9D9;
//       overflow: hidden;
//       `}
//       >
//         <a href="UserPost" onClick={handleClick}>
//           <img
//             src={require("../resources/img/ProfilePost.png")}
//             alt="ProfilePost"
//           />
//         </a>
//       </div>
//     );
// }

// export default ProfilePost;