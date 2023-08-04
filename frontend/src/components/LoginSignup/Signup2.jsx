import React from 'react';
import SignupInputDOB from "components/LoginSignup/Signup2InputDOB";

const Signup2 = () => (
  <div>
  <div class="absolute left-0 w-screen h-screen flex flex-col justify-start items-center pt-5 overflow-x-hidden">
    <div class="flex relative justify-center items-center my-auto lg:w-[55vw] sm:w-[95vw] flex-col z-2">
      <div class="flex text-black text-center font-RecoletaAlt text-3xl font-bold pb-3 pt-12">
        Basic information
      </div>
      <div class="flex justify-center items-center max-w-[300px] whitespace-normal -mb-1 text-gray-600 text-center font-DMSans text-xl">
        Please enter your preferred name and birthday.
      </div>
      <div className="pt-12">
        <SignupInputDOB />
      </div>
    </div>
  </div>
</div>
);

export default Signup2;
