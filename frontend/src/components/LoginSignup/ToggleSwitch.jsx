/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';

const ToggleSwitch = ({handleToggleChange}) => {
  const [isOption1Selected, setOption1Selected] = useState(true);

  const handleChange = () => {
    setOption1Selected(!isOption1Selected);
    handleToggleChange(!isOption1Selected);
  };

  return (
    <div class="flex flex-row justify-center items-center">
      <div class="w-1/2 cursor-pointer items-center rounded-3xl" onClick={handleChange}>
          <div class="flex flex-row h-10 sm:-mx-4 lg:mx-2">
            <div className={`flex w-1/2 items-center justify-center text-center font-DMSans text-lg ${isOption1Selected ? "bg-purple-500 text-white" : "bg-white text-black border-[1px] border-gray-400"} rounded-l-3xl`}>Volunteer</div>
            <div className={`flex w-1/2 items-center justify-center text-center font-DMSans text-lg ${!isOption1Selected ? "bg-purple-500 text-white" : "bg-white text-black border-[1px] border-gray-400"} rounded-r-3xl`}>Organisation</div>
          </div>

      </div>
    </div>

  );
};

export default ToggleSwitch;