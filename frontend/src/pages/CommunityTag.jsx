import React, { useState, useEffect } from "react";
import CommunitiesPost from "components/CommunitiesPost";
import SearchBar from "components/SearchBar";
import { useNavigate, useLocation } from "react-router-dom";
import { IonIcon } from '@ionic/react';
import { image } from 'ionicons/icons';

function CommunityTag() {
  const navigate = useNavigate();
  const [interest, setInterest] = useState([]);

  const allInterests = [{
    title: 'general',
    description: 'Where all general discussions take place, covering a wide range of topics and interests within the community'
  },
  {
    title: 'elderly',
    description: 'A space for volunteers aiming to make a positive impact on the lives of the elderly in the community, discussing ways to support and assist them'
  },
  {
    title: 'environment',
    description: 'Dedicated to volunteers who are passionate about making a difference to the environment, sharing ideas and initiatives for a greener and sustainable future'
  }, {
    title: 'children',
    description: 'Focused on the well-being and development of children, discussing ways to create a nurturing and supportive environment for the younger generation'
  }, {
    title: 'tutoring',
    description: 'A platform for tutoring enthusiasts to exchange knowledge and strategies, helping each other become more effective educators and mentors'
  }, {
    title: 'animals',
    description: 'Devoted to discussions about animal welfare, rescue efforts, and promoting compassion and care for our furry and feathered friends'
  }];

  const location = useLocation();
  const interestTag = location.state?.interest;
  const currentInterest = allInterests.find((interest) => interest.title === interestTag);
  // setInterest(currentInterest);
  console.log('outside ue, currentInterest', currentInterest);
  useEffect(() => {
    if (!interestTag) {
      navigate('/community');
    }
  }, [])
  return (

    <div className="absolute top-20 left-0 w-full h-full flex flex-col justify-start items-center pt-5">
      <div className="flex flex-col flex-between sm:w-4/5 lg:w-2/3">
        {/* current interest information */}
        <div className="flex flex-row w-full bg-gray-100 rounded-lg mt-4 mx-2 flex-shrink-0 mb-4">
          {/* left side */}
          <div className="flex w-1/3">
            <img
              src={require("../resources/img/Project.png")}
              //   src = {imageUrl}
              alt="Project"
              className="sm:h-40 object-cover rounded-lg justify-center align-center"
            />
          </div>

          {/* right side */}
          <div className="flex flex-col justify-center w-2/3">
            <div className="flex justify-between p-2">
              <div className="flex justify-center text-black font-DMSans text-xl font-semibold ml-1">
                {currentInterest.title.toUpperCase()}
              </div>
              <div className="flex flex-col justify-center text-black font-DMSans text-sm font-semibold">
                <IonIcon icon={image} size="large" />
              </div>
            </div>
            <div className="flex flex-col h-1/3 justify-start text-black font-DMSans text-sm font-normal p-2 ml-1">
              <p>
                {currentInterest.description}
              </p>
            </div>
          </div>
        </div>

        <div> 
          <CommunitiesPost/>
        </div>
      </div>
    </div>
  );
}

export default CommunityTag;
