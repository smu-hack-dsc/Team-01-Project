import React from 'react';

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
      buttonClasses += "bg-green_C8F3D9 ";
      textClasses += "text-";
      textClasses += size === "large" ? "lg" : "sm";
      textClasses += size === "medium" ? "base" : "sm";
      textClasses += " ";
      break;
    case "yellow":
      buttonClasses += "bg-yellow_FFDA7A ";
      textClasses += "text-";
      textClasses += size === "large" ? "lg" : "sm";
      textClasses += size === "medium" ? "base" : "sm";
      textClasses += " ";
      break;
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

    case "white":
    default:
      buttonClasses += "bg-white ";
      textClasses += "text-";
      textClasses += size === "large" ? "lg" : "sm";
      textClasses += size === "medium" ? "base" : "sm";
      textClasses += " ";
      break;
  }

  return (
    <button className={`${buttonClasses} w-443 h-78 rounded-full border-none hover:bg-gray-300 font-inherit whitespace-nowrap`}>
      {icon}
      <div className={`${textClasses} ${size === "large" ? "text-2xl p-3" : "text-lg px-3 py-1"} font-semibold text-black`}>
        {children}
      </div>
    </button>
  );
};

export {Button};
