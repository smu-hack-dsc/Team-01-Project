import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import api from "../../api";

const OrgBioInput = () => {
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    // perform logic here
    try {
      await api.put("/user/profile", {
        bio: bio,
      });
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.log("error", error);
    }
  };

  const [bio, setBio] = useState('');
  const minRows = 4;

  const handleBioFocus = (e) => {
    if (e.target.placeholder === 'Bio') {
      e.target.placeholder = '';
    }
  };

  const calculateTextareaRows = (text) => {
    const lines = text.split('\n').length;
    return Math.max(minRows, lines);
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
      <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                onFocus={handleBioFocus}
                required
                placeholder='Bio'
                rows={calculateTextareaRows(bio)} // Dynamically set the number of rows based on content
                className="rounded-xl border border-black font-DMSans text-xl mx-10 py-10 px-12 md:px-20 lg:px-28 placeholder:text-gray-200 resize-none"
              />
              <div className="flex flex-row justify-between items-center">
          <button class="px-4 py-2 justify-center items-center flex-shrink-0 bg-gray-400 hover:bg-gray-300 text-white rounded-full text-base font-semibold">
            SKIP
          </button>
          <div className="w-full flex justify-end items-center">
            <button class="px-4 py-2 justify-center items-center flex-shrink-0 bg-gray-400 hover:bg-gray-300 text-white rounded-full text-base font-semibold">
              CREATE ORGANISATION
            </button>
          </div>
        </div>
        </form>
    </div>
    
      
  )
};

export default OrgBioInput;