import React from "react";
import SearchBar from 'components/SearchBar';
import { useMedia } from 'react-use';
import { ProjectCard } from "components/ProjectCard";
// import { useLocation } from "react-router-dom";

function Projects() {
  
  const isLargeScreen = useMedia('(min-width: 1024px)');
  
  const size = isLargeScreen ? 'large' : 'medium';

  return (
    // first section
    <div>
        <div className="absolute top-20 left-0 w-full h-full flex flex-col justify-start items-center pt-5">
          <div className="text-purple_4000C1 text-shadow-lg font-RecoletaAlt font-semibold text-5xl pb-5">
            Projects
          </div>
          <SearchBar />
          <div className="flex flex-wrap justify-center content-start sm:w-4/5 lg:w-2/3 mt-4">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
    </div>);
}

export default Projects;