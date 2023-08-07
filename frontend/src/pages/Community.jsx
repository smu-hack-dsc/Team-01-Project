import React, { useState, useEffect } from "react";
import CommunitiesPost from "components/CommunitiesPost";
import SearchBar from "components/SearchBar";
import TagCard from "components/TagCard";
import { useNavigate, Link } from "react-router-dom";

function Community() {
  const [getInterest, setGetInterest] = useState('');
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const checkLoginStatus = async () => {
    setIsLoggedIn(localStorage.getItem('token'));
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

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

  const tempCommunities = ["community1", "community2", "community3"];

  const handleCommunity = (c) => {
    navigate('/posts', {state: {c}});
  }

  const handleTag = (interest) => {
    navigate('/posts', {state: {interest}});
  }

  return (
    <div className="absolute top-20">
      <div className="left-0 w-full h-full flex flex-col justify-start items-center pt-5">
        <div className="flex flex-row sm:w-4/5 lg:w-2/3">
          <div className="text-purple_4000C1 text-shadow-lg font-RecoletaAlt font-semibold text-5xl pb-5">
            Community
          </div>
          <div className="ml-10 grow">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* put user's communities here */}
      <div className="flex flex-col sm:ml-[11%] lg:ml-[17.2%] items-start sm:w-4/5 lg:w-2/3 pb-2 font-DMSans text-gray-600">
        {/* add an extra bool to fetch the users communities. if fetch returns 0 or null,
        display "Explore and participate in active volunteering communities. You aren't part of any communities right now.
        or smth similar" */}
        Explore and participate in active volunteering communities.
        {/* **for logged in users** Your communities */}
        {/* i want to put scrollable clickable images here like ig story */}
        {/* <div>
          {allInterests.map((interest) => (
            interest.title
          ))} 
        </div> */}
      </div>

      <div className="flex flex-wrap mx-auto sm:w-4/5 lg:w-2/3 justify-between pb-20">
        {allInterests.map((interest) => (
          <TagCard
            title={interest.title}
            description={interest.description}
            handleTag={handleTag}
          />
        ))
        }
      </div>
      {/* <CommunitiesPost /> */}
    
    </div>
  );
}

export default Community;
