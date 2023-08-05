import React, { useState, useRef } from "react";
import api from '../api';
import SearchBar from "./SearchBar";

const CommunitiesPost = ({ tag }) => {
  const [posts, setPosts] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [selectedInterests, setSelectedInterests] = useState([]);

  const allInterests = ['general', 'elderly', 'environment', 'children', 'tutoring', 'animals'];

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
    const updatedInterests = selectedInterests.filter((selectInterest) => selectInterest !== interest);
    setSelectedInterests(updatedInterests);
  }

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    console.log(fileInputRef.target?.files[0])
    // logic to handle the post submission and add it to the posts state
    if (fileInputRef.target?.files[0]) {
      const selectedFile = fileInputRef.target.files[0];
      try {
        await api.post('/post/', {
          postTitle: postTitle,
          postContent: postContent,
          tags: selectedInterests,
          image: selectedFile
        });
      } catch (error) {
        console.log('error', error);
      }
    } else {
      console.log(postTitle);
      console.log(postContent);
      console.log(selectedInterests);
      try {
        await api.post('/post/', {
          postTitle: postTitle,
          postContent: postContent,
          tags: selectedInterests,
        });
      } catch (error) {
        console.log('error', error);
      }

    }
    // const newPost = {
    //   postText,
    //   tags: tags.map((tag) => tag.toLowerCase()),
    //   image,
    //   username: "sample person", // replace w username
    //   timestamp: new Date().toISOString(), // timestamp
    // };
    // setPosts([...posts, newPost]);
  };



  return (
    <div className="container mx-2">
      {/* post input/creation */}
      <div className="p-4 border border-gray-300 rounded-md mb-4">
        <form onSubmit={handlePostSubmit}>
          {/* input fields for tags and image upload */}
          <input
            type="title" // Change the input type to 'password' for Password
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            required
            placeholder='Title'
            class="w-full rounded-md border border-gray-300 font-DMSans px-3 py-1 mb-2 placeholder:text-gray-300"
          />
          <textarea
            type="content" // Change the input type to 'password' for Password
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            required
            placeholder="What's on your mind?"
            class="w-full rounded-md border border-gray-300 font-DMSans px-3 py-1 text-wrap placeholder:text-gray-300"
          />
          <div className="flex flex-wrap w-full my-1">
            <div>
              tags:
            </div>
            {allInterests.map((interest) => {
              return (
                !selectedInterests.includes(interest) ?
                  <button className="block text-black border-2 border-purple-500 px-1 mx-1 rounded-md text-base font-medium"
                    onClick={() => handleInterestAdd(interest)}
                    type="button">
                    {interest}
                  </button> :
                  <button className="block text-white border-2 border-purple-500 bg-purple-500 px-1 mx-1 rounded-md text-base font-medium"
                    onClick={() => handleInterestDelete(interest)}
                    type="button">
                    {interest}
                  </button>)
            })}

          </div>
          <div className="flex flex-row justify-between mt-2">
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: 'none' }}
            />
            <label>
              <button
                type="button"
                className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300 font-DMSans"
                onClick={handleButtonClick}
              >
                Add a Picture!
              </button>
            </label>
            <button
              className="px-4 py-2 bg-purple_9663FC text-white rounded-md hover:bg-purple-500 font-DMSans"
            >
              Post
            </button>
          </div>
        </form>
      </div>

      {/* post */}
      <SearchBar />
      {posts.map((post, index) => (
        <div
          key={index}
          className="p-4 border border-gray-300 rounded-md mb-4 font-DMSans"
        >
          <div className="flex items-center mb-2">
            <img
              className="w-8 h-8 rounded-full mr-2"
              src="https://via.placeholder.com/50"
              alt="User"
            />
            <span className="text-lg font-bold">{post.username}</span>
            <span className="text-gray-500 ml-2">{post.timestamp}</span>
          </div>
          <p className="mb-2">{post.postText}</p>

          {/* tags */}
          <div className="mb-2">
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-block py-1 text-gray-500 rounded-md mr-2 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          {post.image && (
            <img
              className="w-full rounded-md mb-2"
              src={post.image}
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
