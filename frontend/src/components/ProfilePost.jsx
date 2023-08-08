import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import SearchBar from "./SearchBar";

const ProfilePost = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const allInterests = [
    "elderly",
    "environment",
    "children",
    "tutoring",
    "animals",
  ];

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    // logic to handle the post submission and add it to the posts state
    const updatedInterests =
      selectedInterests.length === 0 ? ["general"] : selectedInterests;
    const formData = new FormData();
    formData.append("postTitle", postTitle);
    formData.append("postContent", postContent);
    // (updatedInterests).map((interest) => {
    //   if (interest) {
    //     formData.append('categories', interest);
    //   }
    // })
    
    let response;
    try {
      response = await api.post("/post/", formData);
    } catch (error) {
      console.log("error", error);
    } finally {
      // Ensure form reset even if the API call fails
      // setPostTitle('');
      // setPostContent('');
      // setSelectedInterests([]);
      window.location.reload();
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log(localStorage.getItem("token"));
      setIsLoggedIn(true);
    }

    const fetchPosts = async () => {
      try {
        const response = await api.get("/post/user", {
          params: { userId: userId }, // Replace 'userId' with the actual userId you want to fetch
        });
        const updatedPosts = await Promise.all(
          response.data.map(async (post) => {
            const profileData = await api.get(`/user/profile/${post.user}`);
            console.log(profileData);
            return {
              ...post,
              username: profileData.data.name,
              userPictUrl: profileData.data.imageUrl,
            };
          })
        );
        setPosts(updatedPosts);
      } catch (error) {
        console.log("Error fetching post data: ", error);
      }
    };

    fetchPosts();
  }, [userId]);

  return (
    <div className="container mx-2">
      {/* ... */}
      {posts.map((post, index) => (
        <div
          key={index}
          className="p-4 border border-gray-300 rounded-md mb-4 mt-4 font-DMSans"
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
          {/* ... */}
        </div>
      ))}
    </div>
  );
};


export default ProfilePost;
