import React, { useState, useEffect } from "react";
import CommunitiesPost from "components/CommunitiesPost";
import SearchBar from "components/SearchBar";
import TagCard from "components/TagCard";
import { useNavigate, Link } from "react-router-dom";

function Community() {
  const [getInterest, setGetInterest] = useState("");
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [communityData, setCommunityData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCommunity = (c) => {
    navigate("/posts", { state: { c } });
  };

  const handleTag = (interest) => {
    navigate("/posts", { state: { interest } });
  };

  const checkLoginStatus = async () => {
    setIsLoggedIn(localStorage.getItem("token"));
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const allInterests = [
    {
      title: "general",
      description:
        "Where all general discussions take place, covering a wide range of topics and interests within the community",
    },
    {
      title: "elderly",
      description:
        "A space for volunteers aiming to make a positive impact on the lives of the elderly in the community, discussing ways to support and assist them",
    },
    {
      title: "environment",
      description:
        "Dedicated to volunteers who are passionate about making a difference to the environment, sharing ideas and initiatives for a greener and sustainable future",
    },
    {
      title: "children",
      description:
        "Focused on the well-being and development of children, discussing ways to create a nurturing and supportive environment for the younger generation",
    },
    {
      title: "tutoring",
      description:
        "A platform for tutoring enthusiasts to exchange knowledge and strategies, helping each other become more effective educators and mentors",
    },
    {
      title: "animals",
      description:
        "Devoted to discussions about animal welfare, rescue efforts, and promoting compassion and care for our furry and feathered friends",
    },
  ];

  return (
    <div className="absolute top-16 overflow-x-clip w-[95vw] font-DMSans">
      <div className="hidden md:flex flex-col h-screen absolute border-gray-300 border-r-2 text-white w-[16%] lg:min-w-[170px] md:min-w-[148px] mx-auto">
        <div className="p-4 text-black mt-8">
          <div className="font-semibold md:text-base lg:text-xl">COMMUNITIES</div>
          <div className="flex flex-col sm:w-4/5 lg:w-2/3 justify-between">
            {allInterests
              // .filter((interest) =>
              //   interest.title.toLowerCase().includes(searchTerm.toLowerCase())
              // )
              .map((interest) => (
                <TagCard title={interest.title} handleTag={handleTag} />
              ))}
          </div>
        </div>
      </div>

      <div className="md:ml-[7%] w-screen flex flex-col justify-start items-center pt-7">
        <div className="flex flex-col justify-start items-end sm:w-[84%] md:w-[70%] pt-7">
          <div className="flex justify-center xs:items-center  xs:flex-col md:flex-row w-full pb-5">
            <div className="text-purple_4000C1 text-shadow-lg font-RecoletaAlt font-semibold text-5xl xs:mb-5 md:mb-0">
              Community
            </div>
            <div className="md:ml-10 grow">
              <SearchBar input={communityData.title} setInput={setSearchTerm} />
            </div>
          </div>
          {/* <div className="flex flex-wrap mx-auto sm:w-4/5 lg:w-2/3 justify-between pb-20">
        {allInterests
          .filter((interest) =>
            interest.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((interest) => (
            <TagCard
              title={interest.title}
              description={interest.description}
              handleTag={handleTag}
            />
          ))}
        </div>
      </div> */}
        </div>
      </div>
    </div>
  );
}

export default Community;
