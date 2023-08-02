import React, { useEffect, useState } from 'react';
import SearchBar from 'components/SearchBar';
// import { useMedia } from 'react-use';
import ProjectCard from "components/ProjectCard";
import Filter from "components/Filter";
import Popup from 'reactjs-popup';
import api from '../api';
import 'reactjs-popup/dist/index.css';

function Projects() {
  const [showPopup, setShowPopup] = useState(false);

  const handleLearnMoreClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const [projectData, setProjectData] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get('/activity/');
        setProjectData(response.data);
      } catch (error) {
        console.log('Error fetching projects data: ', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
        <div className="absolute top-20 left-0 w-full h-full flex flex-col justify-start items-center pt-5">
          <div className="text-purple_4000C1 text-shadow-lg font-RecoletaAlt font-semibold text-5xl pb-5">
            Projects
          </div>
          <div className="sm:w-4/5 lg:w-2/3 sm:mb-2 lg:mb-0">
            <SearchBar />
          </div>
          <div className="lg:mt-2 -mb-2">
            <Filter categorySubcategories={{
              'My Interests': ['interest1', 'interest2', 'interest3'],
              'VO': ['vo1', 'vo2', 'vo3'],
              'Skill': ['skill1', 'skill2', 'skill3'],
              'Date': ['idk what to do for date lol'],
            }}/>
          </div>
          <div className="flex flex-wrap justify-center content-start sm:w-4/5 lg:w-2/3 mt-4">
            {projectData.map((project) => (
              <ProjectCard
                key={project._id}
                activityName = {project.activityName}
                description = {project.description}
                imageUrl = {project.imageInfo?.imagePath}
                onLearnMoreClick = {handleLearnMoreClick}
              />
            ))}
            {/* <ProjectCard onLearnMoreClick={handleLearnMoreClick} />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard /> */}
          </div>

          <Popup open={showPopup} onClose={handleClosePopup} modal>
          {(close) => (
            <div className="p-4 bg-white rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Popup Content</h2>
              <p className="text-lg mb-4">This is the content of the popup.</p>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                onClick={() => {
                  handleClosePopup();
                  close();
                }}
              >
                Close
              </button>
            </div>
          )}
        </Popup>

        </div>
    </div>);
}

export default Projects;