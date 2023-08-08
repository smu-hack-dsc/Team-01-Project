import React, { useEffect, useState } from "react";
import SearchBar from "components/SearchBar";
// import { useMedia } from 'react-use';
import ProjectCard from "components/ProjectCard";
import Filter from "components/Filter";
// import Popup from "reactjs-popup";
import api from "../api";
import "reactjs-popup/dist/index.css";
import { Grid } from "@mui/material";

function Projects() {
  const [projectData, setProjectData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProjects = async (userId, role) => {
      try {
        if (role === "volunteerOrg") {
          const response = await api.get(`activity/vo/${userId}`);
          setProjectData(response.data);
        } else {
          const response = await api.get("/activity/");
          setProjectData(response.data);
        }
      } catch (error) {
        console.log("Error fetching projects data: ", error);
      }
    };

    const fetchProfile = async () => {
      try {
        const profileResponse = await api.get("/user/profile");

        if (profileResponse) {
          await fetchProjects(
            profileResponse.data.id,
            profileResponse.data.role
          );
          // return {userId: profileResponse.data.id, userRole: profileResponse.data.role}
        }
      } catch (error) {
        console.log("Error fetching profile data: ", error);
      }
    };

    fetchProjects();
    fetchProfile();

    // const fetchData = async () => {
    //   await fetchProfile();
    // fetchProjects();
    // }

    // fetchProfile().then(() => {fetchProjects()}).catch((err) => {console.log(err)});
    // fetchData();
  }, []);

  return (
    <div>
      <div className="absolute top-20 left-0 w-full flex flex-col justify-start items-center pt-5 mb-20">
        <div className="text-purple_4000C1 font-RecoletaAlt font-semibold text-5xl pb-5">
          Projects
        </div>
        <div className="xs:w-4/5 lg:w-2/3 mb-4">
          <SearchBar
            input={projectData.activityName}
            setInput={setSearchTerm}
          />
        </div>
        {/* <div className="mt-2 mb-4">
          <Filter
            categorySubcategories={{
              "My Interests": ["interest1", "interest2", "interest3"],
              Cause: ["cause1", "cause2", "cause3"],
              VO: ["vo1", "vo2", "vo3"],
              Skill: ["skill1", "skill2", "skill3"],
            }}
          />
        </div> */}
        <div className="flex items-center w-4/5 xs:ml-[1%] sm:ml-0 md:ml-[1%] lg:ml-[3%]">
          <Grid container spacing={3}>
            {projectData
              .filter((project) =>
                project.activityName
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              )
              .map((project, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} xl={3}>
                  <ProjectCard
                    key={index}
                    id={project._id}
                    activityName={project.activityName}
                    description={project.description}
                    organiser={project.organiserId}
                    imageUrl={project.imageInfo?.imagePath}
                  />
                </Grid>
              ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Projects;
