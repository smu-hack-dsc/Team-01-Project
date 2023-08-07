/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';

const ToggleSwitch = ({handleToggleChange}) => {
  const [isOption2Selected, setOption2Selected] = useState(false);

  const handleChange = () => {
    setOption2Selected(!isOption2Selected);
    handleToggleChange(!isOption2Selected);
  };

  return (
    <div class="flex flex-row justify-center items-center">
      <div class="xs:w-[85%] sm:w-1/2 cursor-pointer items-center rounded-3xl" onClick={handleChange}>
          <div class="flex flex-row h-10 sm:-mx-4 lg:mx-2">
            <div className={`flex w-1/2 items-center justify-center text-center font-DMSans xs:text-base sm:text-lg ${isOption2Selected ? "bg-purple-500 text-white" : "bg-white text-black border-[1px] border-gray-400"} rounded-l-3xl`}>Volunteer</div>
            <div className={`flex w-1/2 items-center justify-center text-center font-DMSans xs:text-base sm:text-lg ${!isOption2Selected ? "bg-purple-500 text-white" : "bg-white text-black border-[1px] border-gray-400"} rounded-r-3xl`}>Organisation</div>
          </div>

      </div>
    </div>

  );
};

export default ToggleSwitch;