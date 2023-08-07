import React from "react";
import UserSkillsInterestInput from "components/LoginSignup/UserSkillsInterestInput";
import OrgBioInput from "components/LoginSignup/OrgBioInput";

const Signup3 = () => {
  const userType = localStorage.getItem("type");

  return (
    <div class="absolute left-0 w-screen h-screen flex flex-col justify-start items-center pt-5 overflow-x-hidden">
      <div class="flex relative top-[120px] w-[80vw] flex-col justify-center items-center z-2 pb-12">
        {userType === "user" ? (
          <>
            <div className="flex text-black text-center font-RecoletaAlt text-3xl font-bold pb-3 pt-12">
              Almost there!
            </div>
            <div className="flex justify-center items-center max-w-[400px] whitespace-normal -mb-1 text-gray-600 text-center font-DMSans text-lg">
              Please select some of your interests and skills. This will help us
              find the best projects for you.
            </div>
            <div className="flex justify-center items-center py-12">
              <UserSkillsInterestInput />
            </div>
          </>
        ) : (
          <>
            <div class="flex justify-center items-center my-auto lg:left-1/4 lg:w-[55vw] xs:w-[90vw] flex-col z-2">
              <div class="flex text-black text-center font-RecoletaAlt text-3xl font-bold pb-3 pt-12">
                Almost there!
              </div>
              <div class="flex justify-center items-center xs:max-w-[300px] sm:max-w-[400px] whitespace-normal mb-5 text-gray-600 text-center font-DMSans xs:text-base sm:text-lg">
                Please share a brief description about your organisation.
              </div>
              <div>
                <OrgBioInput />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Signup3;
