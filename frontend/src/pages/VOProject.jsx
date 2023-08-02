// import React, { useState, useEffect } from "react";
// import api from '../api';
// import { useNavigate } from "react-router-dom";
// import ProfilePost from "components/ProfilePost";
import { Button } from 'components/Button';
import VOSignupRow from 'components/VOSignupRow';
// import Filter from "components/Filter";

function VOProject() {

  return (
    <div>
      <div className="absolute top-20 left-0 w-full h-full flex flex-col justify-start items-center pt-5">
        <div className="flex flex-row sm:w-4/5">
          <div className="mr-20 max-w-[35%]">
            {/* left col */}
            <div>
              <img
                src={require("../resources/img/ChristmasActivity.png")}
                // src={require = (profileData.imageInfo?.imagePath)}
                alt="Food Bank"
                className="s:h-2/3 sm:w-2/3 lg:h-2/3 lg:w-2/3 rounded-md mb-15"
              />
              <div className="text-black font-DM font-semibold sm:text-xl lg:text-2xl mt-3 mb-5">
                {/* {profileData.name} */}
                This Christmas, Change the Present
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
                {/* {profileData.description} */}
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="flex flex-col">
          <div className="w-full flex flex-col">
            <div className="mt-15">
              <div className="flex justify-between items-center">
                <div className="text-purple_4000C1 text-shadow-lg font-RecoletaAlt font-semibold text-4xl">
                  Pending Signups
                </div>
                {/* <Filter categorySubcategories={{
                  "Recent": null,
                }} /> */}
                <Button variant="yellow" size="small">
                  Accept
                </Button>
              </div>
            </div>
            <VOSignupRow />
          </div>

          <div className="mt-20">
            <div className="mt-15 flex justify-between items-center text-purple_4000C1 text-shadow-lg font-RecoletaAlt font-semibold text-4xl">
              Approved Signups
            </div>
            <VOSignupRow />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VOProject;