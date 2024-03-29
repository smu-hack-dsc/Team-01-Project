import React, { useState, useEffect } from "react";
import api from '../api';
import { useNavigate, useLocation } from "react-router-dom";
// import ProfilePost from "components/ProfilePost";
// import { Button } from 'components/Button';
import VOSignupRow from 'components/VOSignupRow';
import VOApprovedRow from 'components/VOApprovedRow'
// import Filter from "components/Filter";

const VOProject = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState([]);

  //get the project that was selected
  const projectId = location.state?.id;

  useEffect(() => {
    if (!projectId) {
      navigate('/projects');
    }
    const fetchProject = async () => {
      try {
        const response = await api.get(`/activity/${projectId}`);
        setProjectData(response.data);
      } catch (error) {
        console.log('error project', error);
      }
    }

    fetchProject();
  }, [])


  return (
    <div>
      <div className="absolute top-20 left-0 w-full h-full flex flex-col justify-start items-center pt-5 font-DMSans">
        <div className="flex xs:flex-col sm:flex-row w-4/5">
          <div className="flex flex-col sm:mr-10 sm:w-1/4">
            {/* left col */}
            <img
              src={projectData.imageUrl}
              alt={projectData.activityName}
              className="h-[200px] w-[200px] object-cover object-center rounded-lg mb-15"
            />
            <div className="text-black font-DM font-semibold xs:text-xl lg:text-2xl mt-3 mb-5">
              {projectData.activityName}
            </div>
            <div className="text-opacity-40 font-DM sm:text-10px lg:text-15px mb-10">
              {projectData.description}
            </div>
          </div>

          {/* right side */}
          <div className="flex flex-col sm:w-3/4">
            <div className="w-full flex flex-col">
              <div className="mt-15">
                <div className="flex justify-between items-center">
                  <div className="text-purple_4000C1 text-shadow-lg font-RecoletaAlt font-semibold text-4xl">
                    Pending Signups
                  </div>
                </div>
              </div>
              <VOSignupRow
                projectData={projectData}/>
            </div>

            <div className="xs:mt-10 sm:mt-20">
              <div className="mt-15 flex justify-between items-center text-purple_4000C1 text-shadow-lg font-RecoletaAlt font-semibold text-4xl">
                Approved Signups
              </div>
              <VOApprovedRow
                projectData={projectData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VOProject;