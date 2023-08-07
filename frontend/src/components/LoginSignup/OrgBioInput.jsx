import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";

const OrgBioInput = () => {
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    // perform logic here
    try {
      await api.put("/user/profile", {
        description: bio,
      });
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.log("error", error);
    }
  };

  const [bio, setBio] = useState("");
  const minRows = 4;

  const handleBioFocus = (e) => {
    if (e.target.placeholder === "Description") {
      e.target.placeholder = "";
    }
  };

  const calculateTextareaRows = (text) => {
    const lines = text.split("\n").length;
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
          placeholder="Description"
          rows={calculateTextareaRows(bio)} // Dynamically set the number of rows based on content
          className="-ml-1 w-full rounded-xl border border-black font-DMSans text-xl mx-10 py-5 px-6 md:px-20 lg:px-28 placeholder:text-gray-200 resize-none"
        />
        <div className="flex items-end mt-3">
          <div className="w-full flex justify-end items-center">
            <button class="px-4 py-2 justify-center items-center flex-shrink-0 bg-purple-500 hover:bg-purple-400 text-white rounded-full xs:text-sm md:text-base font-semibold">
              CREATE ORGANISATION
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrgBioInput;
