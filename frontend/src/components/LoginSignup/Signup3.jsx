import React from 'react';
import Signup3Input from "components/LoginSignup/Signup3Input";

const Signup3 = () => (
  <div>
  <div class="absolute left-0 w-screen h-screen flex flex-col justify-start items-center pt-5 overflow-x-hidden">
    <div class="flex relative top-[120px] w-[80vw] flex-col justify-center items-center z-2 pb-12">
      <div class="flex text-black text-center font-RecoletaAlt text-2xl font-bold pb-12 pt-12">
        What are your interests and skills?
      </div>
      <Signup3Input />
    </div>
  </div>
</div>
);

export default Signup3;
