import React, { useState } from 'react';
// import { css } from '@emotion/css';
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
        <img
          src={require("../../resources/img/LoginScreen.png")}
          alt="GivingHands"
          className="hidden lg:block absolute left-0 w-1/2 h-full z-0 object-cover"
        /> 
        <div class="flex relative justify-center items-center my-auto lg:left-1/4 lg:w-[55vw] sm:w-[95vw] xs:w-[90vw] flex-col z-2 pb-12">
          <div class="flex text-black text-center font-RecoletaAlt text-3xl font-bold pb-3 pt-12">
            Hello again!
          </div>
          <div class="flex justify-center items-center xs:max-w-[300px] sm:max-w-[400px] whitespace-normal -mb-2 text-gray-600 text-center font-DMSans xs:text-base sm:text-lg">
            Please select your account type to proceed.
          </div>
          <div class="xs:py-8 sm:py-12 items-center justify-center w-5/6">
            <ToggleSwitch handleToggleChange={handleToggleChange}  /> 
          </div>
          <LoginInput />
        </div>
      </div>
    </div>
  )
};

export default Login1;
