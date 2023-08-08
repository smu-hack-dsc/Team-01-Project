import React, { useState } from "react";
import { useMedia } from "react-use";
import { useNavigate } from "react-router-dom";
import api from "../api";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CarouselCard = ({ id, activityName, description, imageUrl }) => {
  const isLargeScreen = useMedia("(min-width: 1024px)");

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
    <Card sx={{ maxWidth: 250, height: 250 }}>
      <CardMedia sx={{ height: 100 }} image={imageUrl} title="Project" />
      <CardContent sx={{ height: 105 }}>
        <Typography
          gutterBottom
          variant={isLargeScreen ? "body1" : "body2"}
          component="div"
          sx={{ fontFamily: "DMSans, sans-serif", fontWeight: 600 }}
        >
          {activityName}
        </Typography>
        <Typography
          variant={isLargeScreen ? "body2" : "caption"}
          color="text.secondary"
          className="line-clamp-3 overflow-hidden text-ellipsis"
          sx={{ fontFamily: "DMSans, sans-serif" }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "flex-start" }}>
        <button
          className="bg-green-200 hover:bg-green-300 text-black font-DMSans font-semibold xs:text-sm xs:px-2 xs:py-1 rounded-full border-none "
          onClick={handleButtonClick}
        >
          LEARN MORE
        </button>
      </CardActions>
    </Card>
  );
};

export default CarouselCard;
