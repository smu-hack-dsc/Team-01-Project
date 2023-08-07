import React, { useState, useEffect } from "react";
import { Button } from "components/Button";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../../api";
/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';

const UserSkillsInterestInput = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();
  const role = location.state?.role;

  const allInterests = [
    "elderly",
    "environment",
    "children",
    "tutoring",
    "animals",
  ];
  const allSkills = [
    "english",
    "chinese",
    "malay",
    "hindi",
    "teaching",
    "caregiving",
    "cooking",
    "driving",
  ];

  const handleLogin = async (e) => {
    e.preventDefault();

    // perform logic here
    try {
      await api.put("/user/profile", {
        interests: selectedInterests,
        skills: selectedSkills,
      });
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleInterestAdd = (interest) => {
    setSelectedInterests([...selectedInterests, interest]);
  };

  const handleInterestDelete = (interest) => {
    const updatedInterests = selectedInterests.filter(
      (selectInterest) => selectInterest !== interest
    );
    setSelectedInterests(updatedInterests);
  };

  const handleSkillAdd = (skill) => {
    setSelectedSkills([...selectedSkills, skill]);
  };

  const handleSkillDelete = (skill) => {
    const updatedSkills = selectedSkills.filter(
      (selectedSkill) => selectedSkill !== skill
    );
    setSelectedSkills(updatedSkills);
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div className="flex justify-center items-center">
          <div className=" w-4/5 bg-white border-2 rounded-2xl border-black px-2 py-2">
            <div className="flex flex-col">
              <div className="flex text-xl font-medium justify-center">
                Interests:
              </div>
              <div className="flex flex-wrap w-full">
                {allInterests.map((interest) => {
                  return !selectedInterests.includes(interest) ? (
                    <button
                      className="block text-black border-2 border-purple-500 hover:bg-gray-200 px-3 py-2 mx-2 my-2 rounded-md text-base font-medium"
                      onClick={() => handleInterestAdd(interest)}
                      type="button"
                    >
                      {interest}
                    </button>
                  ) : (
                    <button
                      className="block text-white border-2 border-purple-500 bg-purple-500 hover:bg-purple-700 px-3 py-2 mx-2 my-2 rounded-md text-base font-medium"
                      onClick={() => handleInterestDelete(interest)}
                      type="button"
                    >
                      {interest}
                    </button>
                  );
                })}
              </div>
            </div>

            {role === "user" ? (
              <>
                <div className="flex text-xl font-medium justify-center">
                  Skills:
                </div>
                <div className="flex flex-wrap w-full">
                  {allSkills.map((skill) => {
                    return !selectedSkills.includes(skill) ? (
                      <button
                        className="block text-black border-2 border-purple-500 hover:bg-gray-200 px-3 py-2 mx-2 my-2 rounded-md text-base font-medium"
                        onClick={() => handleSkillAdd(skill)}
                        type="button"
                      >
                        {skill}
                      </button>
                    ) : (
                      <button
                        className="block text-white border-2 border-purple-500 bg-purple-500 hover:bg-purple-700 px-3 py-2 mx-2 my-2 rounded-md text-base font-medium"
                        onClick={() => handleSkillDelete(skill)}
                        type="button"
                      >
                        {skill}
                      </button>
                    );
                  })}
                </div>
              </>
            ) : null}
          </div>
        </div>

        {/* to submit files */}
        <div className="flex flex-row justify-between items-center ">
          <button class="px-4 py-2 justify-center items-center flex-shrink-0 bg-gray-400 hover:bg-gray-300 text-white rounded-full text-base font-semibold my-4 mx-[10%]">
            SKIP
          </button>
          <div className="w-full flex justify-end items-center">
            {/* <Button variant='purple' size='large'>
                CREATE ACCOUNT
              </Button> */}
            <button class="px-4 py-2 justify-center items-center flex-shrink-0 bg-purple-500 hover:bg-purple-400 text-white rounded-full text-base font-semibold my-4 mx-[10%]">
              CREATE ACCOUNT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserSkillsInterestInput;
