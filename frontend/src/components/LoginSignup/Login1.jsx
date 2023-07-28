import React from 'react';
import { css } from '@emotion/css';
import ToggleSwitch from './ToggleSwitch';
import LoginInput from "components/LoginSignup/LoginInput";

const Login1 = () => {
  console.log("login1");
  return (
    <div>
      <div class="w-full bg-gray-200 max-w-1514 relative m-0 p-0 h-100vh overflow-hidden"  >
        <div class="w-full h-25vh rotate-25 flex-shrink-0 bg-color-gray-200 absolute z-1 top-[-299px] left-[-63px]" />
          <div class="flex relative top-[120px] flex-col justify-center items-center flex-shrink-0 z-2">
            <div class="text-black text-center font-sans text-2xl font-bold leading-[16px] tracking-tighter">
              Choose an account
            </div>
            <div class="mb-[100px]">
              <ToggleSwitch />
            </div>
            <LoginInput />
          </div>
        {/* </div> */}
      </div>
    </div>
  )
};

export default Login1;
