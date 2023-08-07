import React, { useState, useEffect } from "react";
import api from '../api'

const VOSignupRow = ({ projectData, toAccept, handleDone }) => {
  //get all the signups
  const [signupData, setSignupData] = useState([]);
  const [selectedSignup, setSelectedSignup] = useState([]);

  useEffect(() => {
    const fetchSignups = async () => {
      try {
        const response = await api.post('/signup/activity', {
          activityId: projectData.id
        });
        const updatedSignups = await Promise.all(
          response.data.map(async (signup) => {

            if (!signup.userDetails.acceptanceIndication) {
              const profileData = await api.get(`/user/profile/${signup.user}`);
              return {
                ...signup, // Spread the individual signup object
                username: profileData.data.name,
                skills: profileData.data.skills,
                check: false
              };
            }
          })
        );
        setSignupData(updatedSignups); // Set the updated signup data
      } catch (error) {
        console.log('error signup', error);
      }
    };
    fetchSignups();
  }, [projectData.id]);


  const [headerCheckboxChecked, setHeaderCheckboxChecked] = useState(false);


  const handleHeaderCheckboxChange = () => {
    // go through all to accept
    setSelectedSignup([]);
    if (!headerCheckboxChecked) {
      (signupData).map((signup) => {
        setSelectedSignup([...selectedSignup, signup._id]);
      })
    }
    setHeaderCheckboxChecked(!headerCheckboxChecked);
  };

  const checkSelected = (signupId) => {
    return selectedSignup.includes(signupId);
  }

  const handleIndivCheck = (signupId) => {
    if (selectedSignup.includes(signupId)) {
      const updatedSignups = selectedSignup.filter(
        (selectedSignup) => selectedSignup !== signupId
      );
      setSelectedSignup(updatedSignups);
    } else {
      setSelectedSignup([...selectedSignup, signupId]);
    }
  };

  const updateAccept = () => {
    try {
      (selectedSignup).map(async (signupId) => {
        await api.put(`/signup/${signupId}`, {
          userDetails: {
            acceptanceIndication: true
          }
        })
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {/* header row */}
      <div className="flex items-center justify-around w-full h-[50px] flex-shrink-0 rounded-t-md bg-gray-300 mt-5 px-5">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-1/4 text-indigo-600 rounded-6 transition duration-150 ease-in-out px-8"
          onChange={() => handleHeaderCheckboxChange()}
          checked={headerCheckboxChecked}
        />
        <div className="text-black w-1/4 font-dm-sans text-14 font-semibold truncate">Name</div>
        <div className="text-black w-1/4 font-dm-sans text-14 font-semibold truncate">Skills</div>
        <div className="text-black w-1/4 font-dm-sans text-14 font-semibold truncate">Date Applied</div>
      </div>

      {/* extra rows for each signup */}
      {signupData.map((signup, index) => {
        if (signup === undefined) return;
        return (
          <div
            key={index}
            className="flex items-center justify-around w-full min-h-[50px] flex-shrink-0 border border-gray-300 bg-white mt-0 px-5"
          >
            <input
              type="checkbox"
              className="container-checkbox form-checkbox h-5 w-1/4 text-indigo-600 rounded-6 transition duration-150 ease-in-out pr-8"
              onChange={() => handleIndivCheck(signup._id)}
              checked={checkSelected(signup._id)}
            />
            <div className="text-black w-1/4 font-dm-sans text-14 font-semibold truncate">
              {signup.username}
            </div>
            <div className="text-black w-1/4 font-dm-sans text-14 font-semibold">
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
            <div className="text-black w-1/4 font-dm-sans text-14 font-semibold truncate">
              {`${new Date(signup.createdAt).toLocaleDateString()}`}
            </div>
          </div>
        )
      })}
      <div className="flex flex-row justify-end mt-5">
      <button className="bg-yellow-300 hover:bg-yellow-400 text-black flex flex-col justify-center flex-shrink-0 text-center font-DMSans rounded-full border-none font-inherit whitespace-nowrap p-2"
        onClick={updateAccept}>
        Accept
      </button>

      </div>
    </div>
  );
};

export default VOSignupRow;