import React, { useState } from 'react';
import { css } from '@emotion/css';
import ToggleSwitch from './ToggleSwitch';
import LoginInput from "components/LoginSignup/LoginInput";

const Login1 = () => {
  const [isVolunteer, setIsVolunteer] = useState(false);

  const handleToggleChange = (newValue) => {
    console.log("registered handleToggleChange in Login")
    setIsVolunteer(!newValue);
  };

  return (
    <div>
      <div class="absolute left-0 w-screen h-screen flex flex-col justify-start items-center pt-5 overflow-x-hidden">
        {/* Conditionally render the image on the left for large screens */}
        {/* replace this w image or better ui later */}
        <div class="hidden lg:block absolute left-0 w-1/2 h-full bg-blue-500 z-0" />        
        <div class="flex relative justify-center items-center my-auto lg:left-1/4 lg:w-[55vw] sm:w-[95vw] flex-col z-2 pb-12">
          <div class="flex text-black text-center font-RecoletaAlt text-3xl font-bold pb-3 pt-12">
            Hello Again!
          </div>
          <div class="flex justify-center items-center max-w-[300px] whitespace-normal -mb-1 text-gray-600 text-center font-DMSans text-xl">
            Please select your account type to proceed.
          </div>
          <div class="py-12 items-center justify-center w-5/6">
            <ToggleSwitch handleToggleChange={handleToggleChange}  /> 
          </div>
          <LoginInput />
        </div>
      </div>
    </div>
  )
};

export default Login1;
