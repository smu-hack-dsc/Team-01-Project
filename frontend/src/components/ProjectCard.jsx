import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { IonIcon } from "@ionic/react";
import { image } from "ionicons/icons";

const ProjectCard = ({ id, activityName, description, imageUrl }) => {
  const navigate = useNavigate();
  const handleButtonClick = async () => {
    // get information about the user using token
    if (localStorage.getItem("token")) {
      let user;
      try {
        const response = await api.get("/user/profile");
        user = response.data;
      } catch (error) {
        console.log("Error fetching profile data: ", error);

        if (error.response && error.response.status === 401) {
          navigate("/login");
        }
      } finally {
        if (user && user.role === "user") {
          navigate("/projectsignup", { state: { id } });
        } else if (user && user.role === "volunteerOrg") {
          navigate("/voproject", { state: { id } });
        }
      }
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="flex flex-col sm:w-1/3 lg:w-1/4 sm:h-[23%] lg:h-[40%] bg-gray-100 rounded-lg mt-4 sm:mb-5 lg:mb-0 mx-2 grow pb-24">
      <img
        src={imageUrl}
        alt="Project"
        className="w-full max-h-[150px] object-cover rounded-t-lg"
      />
      {/* <div className="max-h-[60%]"> */}
      <div className="flex flex-row justify-between min-h-[20%] mx-4 sm:my-2 lg:my-3  ">
        <div className="w-2/3 flex flex-col justify-center text-black font-DMSans text-wrap sm:text-xl lg:text-2xl font-semibold">
          <p className="line-clamp-2">{activityName}</p>
        </div>
        <div className="w-1/6 flex flex-col justify-center">
          <IonIcon icon={image} size="large"></IonIcon>
        </div>
      </div>
      <div className="flex flex-col min-h-[30%] whitespace-normal justify-start text-black font-DMSans text-sm font-normal mx-4 mt-1">
        {/* {(description.split(" ").length >= 20) ? 
            (`
            <> {description.split(" ").slice(0, 20).join(" ") + ' ...'}
            </>): (<>
          {description}</>)} */}
        <p class="line-clamp-5">{description}</p>
      </div>
      {/* </div> */}
      <div className="self-end mt-auto pr-3 pt-3 lg:pb-[10%] sm:pb-[20%]">
        <button
          className="bg-green-200 hover:bg-green-300 text-black font-DMSans font-semibold text-base px-3 py-2 rounded-full border-none "
          onClick={handleButtonClick}
        >
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
