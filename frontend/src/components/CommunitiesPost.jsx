import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import SearchBar from "./SearchBar";

const CommunitiesPost = ({ tag }) => {
  const tagArray = (tag) => {
    return [tag.title];
  };
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

  // image adding logic
  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    // Trigger the click event of the hidden file input element
    fileInputRef.current.click();
  };

  const handleInterestAdd = (interest) => {
    setSelectedInterests([...selectedInterests, interest]);
  };

  const handleInterestDelete = (interest) => {
    const updatedInterests = selectedInterests.filter(
      (selectInterest) => selectInterest !== interest
    );
    setSelectedInterests(updatedInterests);
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    // logic to handle the post submission and add it to the posts state
    console.log(selectedInterests);
    const updatedInterests =
      selectedInterests.length === 0 || selectedInterests[0] == undefined ? ["general"] : selectedInterests;
    const formData = new FormData();
    formData.append("postTitle", postTitle);
    formData.append("postContent", postContent);
    updatedInterests.forEach((interest) => {
      if (interest) {
        formData.append('tags', interest);
      }
    });
    if (fileInputRef.current?.files[0]) {
      formData.append("image", fileInputRef.current.files[0]);
    }
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

    setSelectedInterests(tagArray(tag));

    const fetchPosts = async () => {
      try {
        const response = await api.post("/post/communities", {
          tags: tagArray(tag),
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
  }, [tag]);

  return (
    <div className="container mx-2">
      {/* post input/creation --> need to check if user is logged in before you show this! */}
      <div className="p-4 border border-gray-300 rounded-md mb-4">
        {isLoggedIn ? (
          <form onSubmit={handlePostSubmit}>
            {/* input fields for tags and image upload */}
            <input
              type="title" // Change the input type to 'password' for Password
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
              required
              placeholder="Title"
              class="w-full rounded-md border border-gray-300 font-DMSans px-3 py-1 mb-2 placeholder:text-gray-300"
            />
            <textarea
              type="content" // Change the input type to 'password' for Password
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              required
              placeholder="What's on your mind?"
              class="w-full rounded-md border border-gray-300 font-DMSans px-3 p-1 text-wrap placeholder:text-gray-300"
            />

            <div className="flex flex-wrap w-full py-2">
              tags:
              {allInterests.map((interest) => {
                return !selectedInterests.includes(interest) ? (
                  <button
                    className="block text-black border-[1px] border-gray-300 px-1 mx-1 rounded-md text-base font-medium"
                    onClick={() => handleInterestAdd(interest)}
                    type="button"
                  >
                    {interest}
                  </button>
                ) : (
                  <button
                    className="block text-white border-[1px] border-purple-500 bg-purple-500 px-1 mx-1 rounded-md text-base font-medium"
                    onClick={() => handleInterestDelete(interest)}
                    type="button"
                  >
                    {interest}
                  </button>
                );
              })}
            </div>
            <div className="flex flex-row justify-between pt-1">
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
              />
              <label>
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300 font-DMSans"
                  onClick={handleButtonClick}
                >
                  Upload pictures
                </button>
              </label>
              <button className="px-4 py-2 bg-purple_9663FC text-white rounded-md hover:bg-purple-500 font-DMSans">
                Post
              </button>
            </div>
          </form>
        ) : (
          <div>Login to post something!</div>
        )}
      </div>

      {/* post */}
      <SearchBar />
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
            {/* add logic how to handle likes and comments later */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunitiesPost;
