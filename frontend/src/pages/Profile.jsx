import React from "react";
// import { useLocation } from "react-router-dom";
import ProfileDescr from "components/ProfileDescr";
import ProfileHeader from "components/ProfileHeader";
import ProfilePost from "components/ProfilePost";

function Profile() {
  return (
    <div>
      <div className="absolute top-20 left-0 w-full h-full flex flex-col justify-start items-center pt-5">
        <div className="flex flex-row sm:w-4/5 lg:w-2/3">
          <div className="mr-20">
            <ProfileDescr />
          </div>
          <div className="w-full flex flex-col">
            <ProfileHeader />
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