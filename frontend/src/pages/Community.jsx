import React, { useState, useEffect } from "react";
import api from '../api';
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

    const fetchCommunityData = async () => {
      try {
        const response = await api.get('/post/');
        console.log(response.data);
        const updatedPosts = await Promise.all(
          response.data.map(async (post) => {
            const profileData = await api.get(`/user/profile/${post.user}`);
            // console.log(profileData.data)
            return {
              ...post,
              username: profileData.data.name,
              userPictUrl: profileData.data.imageUrl,
            };
          })
        );
        setCommunityData(updatedPosts);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCommunityData();
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
          {communityData.map((post, index) => (
            <div
              key={index}
              className="p-4 border border-gray-300 rounded-md mb-4 mt-4 font-DMSans w-full"
            >
              <div className="flex items-center mb-2">
                <img
                  className="w-8 h-8 rounded-full mr-2"
                  src={post.userPictUrl}
                  alt="User"
                />
                <span className="text-lg font-bold">{post.postTitle}</span>
                <span className="text-gray-500 ml-2">{post.username}</span>
              </div>
              <p className="mb-2">{post.postContent}</p>

              {/* tags */}
              <div className="mb-2">
                {post.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-block py-1 text-gray-500 rounded-md mr-2 text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              {post.imageInfo && (
                <img
                  className="max-h-56 rounded-md mb-2"
                  src={post.imageInfo.imagePath}
                  alt="Post"
                />
              )}
              <div className="flex justify-between">
                <button className="text-purple_9663FC">Like</button>
                <button className="text-purple_9663FC">Comment</button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Community;
