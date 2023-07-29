import React from 'react';

// fix medium size buttons

// case "purple":
      // const purple = (
      //   <button
      //     className={css`
      //     width: ${size === "large" ? "230px" : "130px"};
      //     height: 60px;
      //     flex-shrink: 0;
      //     background-color: #9663FC;
      //     display: flex;
      //     flex-direction: column;
      //     justify-content: center;
      //     align-items: center;
      //     padding: 0;
      //     border-radius: 20px;
      //     border: none;
      //     font-family: inherit;
      //     white-space: nowrap;
      //     &:hover{
      //       background-color: #732ffb;
      //       color: #D9D9D9;
      //     }
      //     display: flex;
      //     flex-direction: column;
      //     justify-content: center;
      //     flex-shrink: 0;
      //     color: #FFF;
      //     text-align: center;
      //     font-family: Uncut Sans;
      //     font-size: 24px;
      //     font-style: normal;
      //     font-weight: 600;
      //     line-height: 16px; /* 66.668% */
      //     letter-spacing: -0.12px;
      //     `}
      //   >
      //     {children}
      //   </button>
      // )

const Button = ({
  children,
  variant = "green",
  size = "small",
  icon,
}) => {
  let buttonClasses = "flex flex-col justify-center items-center flex-shrink-0 ";
  let textClasses = "flex flex-col justify-center flex-shrink-0 text-center font-DMSans ";

  switch (variant) {
    case "green":
      buttonClasses += "bg-green_C8F3D9 hover:bg-green-300 ";
      textClasses += size === "large" ? "text-2xl p-3 " : size === "medium" ? "text-base px-3 py-2 " : "text-sm px-3 py-1 ";
      break;
    case "yellow":
      buttonClasses += "bg-yellow_FFDA7A hover:bg-yellow-400 ";
      textClasses += size === "large" ? "text-2xl p-3 " : size === "medium" ? "text-base px-4 py-2 " : "text-sm px-3 py-1 ";
      break;
    case "purple":
      buttonClasses += "bg-purple-400 hover:bg-purple-400 ";
      textClasses += "text-";
      textClasses += size === "large" ? "text-2xl p-3 " : size === "medium" ? "text-base px-4 py-2 " : "text-sm px-3 py-1 ";
      break;
    case "white":
    default:
      buttonClasses += "bg-white hover:bg-gray-200 ";
      textClasses += "text-";
      textClasses += size === "large" ? "text-2xl p-3 " : size === "medium" ? "text-base px-4 py-2 " : "text-sm px-3 py-1 ";
      break;
  }

  return (
    <button className={`${buttonClasses} w-443 h-78 rounded-full border-none font-inherit whitespace-nowrap`}>
      {icon}
      <div className={`${textClasses} font-semibold text-black`}>
        {children}
      </div>
    </button>
  );
};

export {Button};
