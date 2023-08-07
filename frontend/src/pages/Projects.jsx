import React, { useEffect, useState } from "react";
import SearchBar from "components/SearchBar";
// import { useMedia } from 'react-use';
import ProjectCard from "components/ProjectCard";
import Filter from "components/Filter";
import Popup from "reactjs-popup";
import api from "../api";
import "reactjs-popup/dist/index.css";

function Projects() {
  const [projectData, setProjectData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("/activity/");
        setProjectData(response.data);
      } catch (error) {
        console.log("Error fetching projects data: ", error);
      }
    };

    fetchProjects();
  }, []);


  return (
    <div>
      <div className="absolute top-20 left-0 w-full h-full flex flex-col justify-start items-center pt-5">
        <div className="text-purple_4000C1 font-RecoletaAlt font-semibold text-5xl pb-5">
          Projects
        </div>
        <div className="sm:w-4/5 lg:w-2/3 sm:mb-2 lg:mb-0">
          <SearchBar
            input={projectData.activityName}
            setInput={setSearchTerm}
          />
        </div>
        <div className="lg:mt-2 -mb-2">
          <Filter
            categorySubcategories={{
              "My Interests": ["interest1", "interest2", "interest3"],
              Cause: ["cause1", "cause2", "cause3"],
              VO: ["vo1", "vo2", "vo3"],
              Skill: ["skill1", "skill2", "skill3"],
            }}
          />
        </div>
        <div className="flex flex-wrap justify-center content-start sm:w-4/5 lg:w-2/3 mt-4">
          {projectData
            .filter((project) =>
              project.activityName
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            )
            .map((project, index) => (
              <ProjectCard
                key={index}
                id={project._id}
                activityName={project.activityName}
                description={project.description}
                organiser={project.organiserId}
                imageUrl={project.imageInfo?.imagePath}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
