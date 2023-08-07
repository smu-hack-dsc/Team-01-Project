import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { IonIcon } from "@ionic/react";
import { image } from "ionicons/icons";

const CarouselCard = ({ id, activityName, description, imageUrl }) => {
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
    <div className="flex flex-col w-48 sm:w-60 bg-gray-100 rounded-lg mt-4 mx-auto flex-shrink-0 pb-4">
      <img
        // src={require("../resources/img/Project.png")}
        src={imageUrl}
        alt="Project"
        className="w-full h-32 sm:h-40 object-cover rounded-t-lg"
      />
      <div className="flex justify-between p-2 h-[72px]">
        <div className="flex flex-col justify-center text-black font-DMSans text-xl font-semibold ml-1 line-clamp-1">
          {/* Project Name */}
          {activityName}
        </div>
        <div className="flex flex-col justify-center text-black font-DMSans text-sm font-semibold">
          <IonIcon icon={image} size="large" />
        </div>
      </div>
      <div className="flex flex-col justify-start h-20 text-black font-DMSans text-sm font-normal p-2 ml-1">
        <p className="line-clamp-3">
          {/* {(description.split(" ").length >= 10) ? 
        (
        <> {description.split(" ").slice(0, 10).join(" ") + ' ...'}
        </>): (<>
        {description}</>)} */}
          {/* short description */}
          {description}
        </p>
      </div>
      <div className="pl-2 pt-1">
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

export default CarouselCard;
