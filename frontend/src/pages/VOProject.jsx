import React, { useState, useEffect } from "react";
import api from '../api';
import { useNavigate, useLocation } from "react-router-dom";
// import ProfilePost from "components/ProfilePost";
import { Button } from 'components/Button';
import VOSignupRow from 'components/VOSignupRow';
import VOApprovedRow from 'components/VOApprovedRow'
// import Filter from "components/Filter";

const VOProject = () => {
  const location = useLocation();
  const [projectData, setProjectData] = useState([]);
  const [toAccept, setToAccept] = useState(false);

  //get the project that was selected
  const projectId = location.state?.id;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get(`/activity/${projectId}`);
        setProjectData(response.data);
      } catch (error) {
        console.log('error project', error);
      }
    }

    fetchProjects();
  }, [])

  const handleAccept = () => {
    //logic to change all the userDetails.acceptanceIndication into true
    setToAccept(true);
  }

  const handleDone = () => {
    setToAccept(false);
  }

  return (
    <div>
      <div className="absolute top-20 left-0 w-full h-full flex flex-col justify-start items-center pt-5">
        <div className="flex flex-row sm:w-4/5">
          <div className="flex flex-col mr-10 w-1/4">
            {/* left col */}
            <img
              // src={require("../resources/img/ChristmasActivity.png")}
              src={projectData.imageUrl}
              alt="Food Bank"
              className="rounded-md mb-15"
            />
            <div className="text-black font-DM font-semibold sm:text-xl lg:text-2xl mt-3 mb-5">
              {projectData.activityName}
              {/* This Christmas, Change the Present */}
            </div>
            <div className="text-opacity-40 font-DM sm:text-10px lg:text-15px mb-10">
              {/* Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
                Donec placerat volutpat magna,
                sed ornare nunc auctor et.
                Curabitur sed massa libero.
                Nullam ut sem libero.
                Nullam nec fermentum elit,
                sed ullamcorper elit.
                Curabitur tristique mollis. */}
              {projectData.description}
            </div>
          </div>

          {/* right side */}
          <div className="flex flex-col w-3/4">
            <div className="w-full flex flex-col">
              <div className="mt-15">
                <div className="flex justify-between items-center">
                  <div className="text-purple_4000C1 text-shadow-lg font-RecoletaAlt font-semibold text-4xl">
                    Pending Signups
                  </div>
                  {/* <Filter categorySubcategories={{
                  "Recent": null,
                }} /> */}
                  <button className="bg-yellow-300 hover:bg-yellow-400 text-black flex flex-col justify-center flex-shrink-0 text-center font-DMSans rounded-full border-none font-inherit whitespace-nowrap p-2"
                    onClick={handleAccept}>
                    Accept
                  </button>
                </div>
              </div>
              <VOSignupRow 
                toAccept={toAccept}
                handleDone = {handleDone}/>
            </div>

            <div className="mt-20">
              <div className="mt-15 flex justify-between items-center text-purple_4000C1 text-shadow-lg font-RecoletaAlt font-semibold text-4xl">
                Approved Signups
              </div>
              <VOApprovedRow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VOProject;