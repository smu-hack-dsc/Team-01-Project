// tailwind attempt
import React from 'react';
import { Button } from 'components/Button';

const ProfileHeader = () => {
  return (
    <div className="mt-15">
      <div className="flex justify-between">
        <div className="text-purple_4000C1 text-shadow-lg font-RecoletaAlt font-semibold text-4xl">
          My Posts
        </div>
        <Button variant='yellow' size='small'>
          All Time
        </Button>
      </div>
    </div>
  );
};

export default ProfileHeader;


// import { css } from '@emotion/css';
// import { Button } from 'components/Button';

// const ProfileHeader = () => {

//   return (
//     <div
//       className={css`
//       margin-top: 15px;
//       `}
//     >
//       <div
//         className={css`
//         display: flex;
//         justify-content: space-between;
//       `}
//       >
//         <div className="text-purple_4000C1 text-shadow-lg font-RecoletaAlt font-semibold text-4xl">
//           My Posts
//         </div>
//         <Button variant='yellow' size='small'>
//           All Time
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default ProfileHeader;