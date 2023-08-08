import React, { useState, useEffect } from "react";
import api from '../api'

const VOApprovedRow = ({ projectData }) => {
  //get all the signups
  const [signupData, setSignupData] = useState([]);
  useEffect(() => {
    const fetchSignups = async () => {
      try {
        const response = await api.post('/signup/activity', {
          activityId: projectData.id
        });
        const updatedSignups = await Promise.all(
          response.data.map(async (signup) => {
            if (signup.userDetails.acceptanceIndication) {
              const profileData = await api.get(`/user/profile/${signup.user}`);
              return {
                ...signup, // Spread the individual signup object
                username: profileData.data.name,
                skills: profileData.data.skills,
              };
            }
          })
        );

        if (updatedSignups.length !== 0) {
          setSignupData(updatedSignups)
        }
      } catch (error) {
        console.log('error signup', error);
      }
    };
    fetchSignups();
  }, [projectData.id]);


  return (
    <div>
      {/* header row */}
      <div className="flex items-center justify-between w-full h-[50px] flex-shrink-0 rounded-t-md bg-gray-300 mt-5 px-5">
        <div className="text-black w-1/3 font-dm-sans text-14 font-semibold truncate">Name</div>
        <div className="text-black w-1/3 font-dm-sans text-14 font-semibold truncate">Skills</div>
        <div className="text-black w-1/3 font-dm-sans text-14 font-semibold truncate">Date Applied</div>
      </div>

      {/* extra rows for each signup */}
      {signupData.length === 0 || signupData[0] === undefined ? (
        <div> No signup data available.</div>
      ) : signupData.map((signup, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-around w-full min-h-[50px] flex-shrink-0 border border-gray-300 bg-white mt-0 px-5"
          >
            <div className="text-black w-1/3 font-dm-sans text-14 truncate">
              {signup.username}
            </div>
            <div className="text-black w-1/3 font-dm-sans text-14">
              {signup.skills?.length ? (
                <div>
                  <ul>
                    {signup.skills.map((skill, index) => (
                      <li key={index} className="truncate">{skill}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div>No required skills.</div>
              )}
            </div>
            <div className="text-black w-1/3 font-dm-sans text-14 truncate">
              {`${new Date(signup.createdAt).toLocaleDateString()}`}
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default VOApprovedRow;