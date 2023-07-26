import React from "react";
// import { useLocation } from "react-router-dom";
import ProfilePost from "components/ProfilePost";
import { Button } from 'components/Button';

function Profile() {
  return (
    <div>
      <div className="absolute top-20 left-0 w-full h-full flex flex-col justify-start items-center pt-5">
        <div className="flex flex-row sm:w-4/5 lg:w-2/3">
          <div className="mr-20 max-w-[35%]">
          {/* left col */}
          <div>
            <img
              src={require("../resources/img/Siyu.png")}
              alt="Siyu"
              className="s:h-2/3 sm:w-2/3 lg:h-2/3 lg:w-2/3 rounded-md mb-15"
            />
            <div className="text-black font-DM font-semibold sm:text-xl lg:text-2xl mt-3 mb-5">
              Tay Si Yu
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row justify-between justify-items-start font-DM text-black font-semibold">
                <div>12 posts</div>
                <div>12.8k friends</div>
              </div>
                <div className="text-opacity-40 font-DM sm:text-10px lg:text-15px mb-10">
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
                Donec placerat volutpat magna,
                sed ornare nunc auctor et.
                Curabitur sed massa libero.
                Nullam ut sem libero.
                Nullam nec fermentum elit,
                sed ullamcorper elit.
                Curabitur tristique mollis.
              </div>
              <div className="w-202.002 h-1 bg-gray-300 mb-15" />
            </div>

            <div className="text-black font-DM font-semibold">Interests</div>
            <div className="text-opacity-40 font-DM text-15px font-normal">Youth Education, Environment Conservation</div>

            <div className="text-black font-DM font-semibold mt-3">Location</div>
            <div className="text-opacity-40 font-DM text-15px font-normal">Singapore, Singapore</div>

            <div className="flex flex-row mt-4 gap-3 max-w-[10%]">
              <img 
                src={require("../resources/img/Settings.png")} 
                alt='Settings' 
                className="w-24 h-25.711" />
              <img 
                src={require("../resources/img/Question.png")} 
                alt='Help' 
                className="w-24 h-25.711" />
            </div>
          </div>
          </div>
          {/* right side */}
          <div className="w-full flex flex-col">
            <div className="mt-15">
              <div className="flex justify-between">
                <div className="text-purple_4000C1 text-shadow-lg font-RecoletaAlt font-semibold text-4xl">
                  My Posts
                </div>
                <Button variant='yellow' size='small'>
                  All Time
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-5">
              <ProfilePost />
              <ProfilePost />
              <ProfilePost />
              <ProfilePost />
              <ProfilePost />
              <ProfilePost />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;