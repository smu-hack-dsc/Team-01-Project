import React from 'react';
import UserSkillsInterestInput from "components/LoginSignup/UserSkillsInterestInput";
import OrgBioInput from "components/LoginSignup/OrgBioInput";


const Signup3 = () => {
  const userType = localStorage.getItem('type');
  
  return (
  <div class="absolute left-0 w-screen h-screen flex flex-col justify-start items-center pt-5 overflow-x-hidden">
    <div class="flex relative top-[120px] w-[80vw] flex-col justify-center items-center z-2 pb-12">
    {userType === 'user' ? (
          <>
            <div className="flex text-black text-center font-RecoletaAlt text-3xl font-bold pb-3 pt-12">
              Please select your skills and interests.
            </div>
            <div className="flex justify-center items-center max-w-[400px] whitespace-normal -mb-1 text-gray-600 text-center font-DMSans text-lg">
              This will help us find the best projects for you. Don't worry, you can always change this later.
            </div>
            <div className="flex justify-center items-center py-12">
              <UserSkillsInterestInput />
            </div>
          </>
        ) : (
          <>
            <div className="flex text-black text-center font-RecoletaAlt text-3xl font-bold pb-3 pt-12">
              Please enter your organization bio.
            </div>
            <div class="">
              <OrgBioInput/>
            </div>
            
          </>
        )}
    </div>
  </div>
)};

export default Signup3;
