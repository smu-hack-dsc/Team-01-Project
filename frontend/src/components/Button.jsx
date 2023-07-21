import React from 'react';

const Button = ({
  children,
  variant = "green",
  size = "small",
  icon,
}) => {
  let buttonClasses = "flex flex-col justify-center items-center flex-shrink-0 ";
  let textClasses = "flex flex-col justify-center flex-shrink-0 text-center font-DMSans p-3 ";

  switch (variant) {
    case "green":
      buttonClasses += "bg-green-300 ";
      textClasses += "text-";
      textClasses += size === "large" ? "lg" : "sm";
      textClasses += size === "medium" ? "base" : "sm";
      textClasses += " ";
      break;
    case "yellow":
      buttonClasses += "bg-yellow-300 ";
      textClasses += "text-";
      textClasses += size === "large" ? "lg" : "sm";
      textClasses += size === "medium" ? "base" : "sm";
      textClasses += " ";
      break;
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
      <div className={`${textClasses} ${size === "large" ? "text-2xl" : "text-xl"} font-semibold text-black`}>
        {children}
      </div>
    </button>
  );
};

export {Button};
