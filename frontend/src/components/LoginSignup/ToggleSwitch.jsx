/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';

const ToggleSwitch = ({handleToggleChange}) => {
  const [isOption1Selected, setOption1Selected] = useState(true);

  const handleChange = () => {
    setOption1Selected(!isOption1Selected);
    handleToggleChange(!isOption1Selected);
  };


  return (
    <div class="flex flex-row justify-center items-center">
      <div class="w-3/5 h-20 bg-gray-400 cursor-pointer items-center rounded-3xl" onClick={handleChange}>
        {isOption1Selected ? (
          <div class="flex flex-row">
            <div class="flex w-3/6 h-20 items-center justify-center text-center font-DMSans text-2xl bg-purple-500 text-white rounded-l-3xl">Volunteer</div>
            <div class="flex w-3/6 h-20 items-center justify-center text-center font-DMSans text-2xl ">Organisation</div>
          </div>
        ) : (
          <div class="flex flex-row">
            <div class="flex w-3/6 h-20 items-center justify-center text-center font-DMSans text-2xl">Volunteer</div>
            <div class="flex w-3/6 h-20 items-center justify-center text-center font-DMSans text-2xl bg-purple-500 text-white rounded-r-3xl">Organisation</div>
          </div>
        )}

      </div>
    </div>

  );
};

export default ToggleSwitch;