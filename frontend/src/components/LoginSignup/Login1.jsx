import React from 'react';
import { css } from '@emotion/css';
import ToggleSwitch from './ToggleSwitch';
import LoginInput from "components/LoginSignup/LoginInput";

  // const [isVolunteer, setIsVolunteer] = useState(false);

  // const handleToggleChange = (newValue) => {
  //   setIsVolunteer(!newValue);
  // };
const Login1 = () => {

  return (
    <div>
      <div class="absolute left-0 w-screen h-screen flex flex-col justify-start items-center pt-5 overflow-x-hidden">
        <div class="absolute w-[200vw] h-full -rotate-12 -top-2/3 -left-1/3 bg-gray-200 z-1" />
        <div class="flex relative top-[120px] w-[80vw] flex-col justify-center items-center z-2 pb-12">
          <div class="flex text-black text-center font-RecoletaAlt text-2xl font-bold pb-12 pt-12">
            Choose an account
          </div>
          <div class="pb-16 pt-4 items-center justify-center w-5/6">
            <ToggleSwitch />
            {/* onChange={handleToggleChange}  /> */}
          </div>
          <LoginInput />
        </div>
      </div>
    </div>
  )
};

export default Login1;
