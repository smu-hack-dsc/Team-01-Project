import React, { useState, useEffect } from "react";
import { css } from "@emotion/css";
import api from '../api'

const VOApprovedRow = () => {
  //get all the signups
  const [signupData, setSignupData] = useState([]);
  const fetchSignups = async () => {
    try {
      const response = await api.post('/signup/activity');
      const updatedSignups = await Promise.all(
        response.data.map(async (signup) => {
          if (signup.userDetails.acceptanceIndication) {
            const profileData = await api.get(`/user/profile/${signup.user}`);
            return {
              ...signupData,
              username: profileData.data.name,
              skills: profileData.data.skills,
              check: false
            };
          }
        })
      );
      setSignupData(response.data);
    } catch (error) {
      console.log('error signup', error);
    }
  }
  fetchSignups();


  return (
    <div>
      {/* header row */}
      <div className="flex items-center justify-between w-full h-[50px] flex-shrink-0 rounded-t-md bg-gray-300 mt-5 px-5">
        <div className="text-black font-dm-sans text-14 font-semibold truncate">Name</div>
        <div className="text-black font-dm-sans text-14 font-semibold truncate">Skills</div>
        <div className="text-black font-dm-sans text-14 font-semibold truncate">Date Applied</div>
      </div>

      {/* extra rows for each signup */}
      {signupData.map((signup) => {
        <div className="flex items-center justify-between w-full h-[50px] flex-shrink-0 border border-gray-300 bg-white mt-0 px-5">
          <div className="text-black font-dm-sans text-14 font-semibold truncate">{signupData.username}</div>
          <div className="text-black font-dm-sans text-14 font-semibold truncate">{signupData.skills}</div>
          <div className="text-black font-dm-sans text-14 font-semibold truncate">{signupData.createdAt}</div>
        </div>

      })

      }
    </div>
  );
};

export default VOApprovedRow;