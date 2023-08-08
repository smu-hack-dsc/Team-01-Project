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
      buttonClasses += "bg-green_C8F3D9 hover:bg-green-300 text-black ";
      textClasses += size === "large" ? "text-2xl p-3 " : size === "medium" ? "text-base px-3 py-2 " : "text-sm px-3 py-1 ";
      break;
    case "yellow":
      buttonClasses += "bg-yellow_FFDA7A hover:bg-yellow-400 text-black ";
      textClasses += size === "large" ? "text-2xl p-3 " : size === "medium" ? "text-base px-4 py-2 " : "text-sm px-3 py-1 ";
      break;
    case "purple":
      buttonClasses += "bg-purple-500 hover:bg-purple-400 text-white ";
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
      <div className={`${textClasses} font-semibold`}>
        {children}
      </div>
    </button>
  );
};

export {Button};
