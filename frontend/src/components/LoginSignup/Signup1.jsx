import React, { useState } from 'react';
// import { css } from '@emotion/css';
import ToggleSwitch from './ToggleSwitch';
import SignupInputName from "components/LoginSignup/Signup1InputName";

const Signup1 = () => {
  const [isVolunteer, setIsVolunteer] = useState(true);

  const handleToggleChange = (newValue) => {
    console.log("registered handleToggleChange in Login")
    setIsVolunteer(!newValue);
    console.log(isVolunteer, 'volunteer value');
  };

return (
  <div>
    <div class="absolute left-0 w-screen h-screen flex flex-col justify-start items-center pt-5 overflow-x-hidden">
      {/* Conditionally render the image on the left for large screens */}
      {/* replace this w image or better ui later */}
      <div class="hidden lg:block absolute left-0 w-1/2 h-full bg-blue-500 z-0" />        
        <div class="flex relative justify-center items-center my-auto lg:left-1/4 lg:w-[55vw] sm:w-[95vw] flex-col z-2">
          <div class="flex text-black text-center font-RecoletaAlt text-3xl font-bold pb-3 pt-12 -mb-5">
            Create an account.
          </div>
        <div class="py-12 items-center justify-center w-5/6">
          <ToggleSwitch handleToggleChange={handleToggleChange}/>
          {/* <ToggleSwitch /> */}
        </div>
        {/* <SignupInputName /> */}
        <SignupInputName 
          isVolunteer = {isVolunteer}/>
      </div>
    </div>
  </div>
  )
};

export default Signup1;
