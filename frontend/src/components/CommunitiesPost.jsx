import React, { useState } from "react";

const CommunitiesPost = () => {
  const [posts, setPosts] = useState([]);

  const handlePostSubmit = (postText, tags, image) => {
    // Logic to handle the post submission and add it to the posts state
    const newPost = {
      postText,
      tags,
      image,
      username: "JohnDoe", // Replace this with the actual username of the current user
      timestamp: new Date().toISOString(), // Add a timestamp to the post
    };
    setPosts([...posts, newPost]);
  };

  return (
    <div className="container mx-auto sm:w-4/5 lg:w-2/3">
      {/* Post Input Section */}
      <div className="p-4 border border-gray-300 rounded-md mb-4">
        {/* Replace the form with your own form handling logic */}
        <form onSubmit={(e) => e.preventDefault()}>
          <textarea
            className="w-full px-3 py-2 mb-2 resize-none border border-gray-300 rounded-md focus:outline-none"
            placeholder="What's on your mind?"
            onChange={(e) => console.log(e.target.value)}
            // You can store the post text in state using useState and onChange
          />
          {/* Add input fields for tags and image upload */}
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={() => handlePostSubmit("Sample post", ["#sampleTag"], null)}
          >
            Post
          </button>
        </form>
      </div>

      {/* Render each post */}
      {posts.map((post, index) => (
        <div
          key={index}
          className="p-4 border border-gray-300 rounded-md mb-4"
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
          {/* Render tags */}
          <div className="mb-2">
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-block px-2 py-1 bg-blue-500 text-white rounded-md mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
          {/* Render image */}
          {post.image && (
            <img
              className="w-full rounded-md mb-2"
              src={post.image}
              alt="Post"
            />
          )}
          {/* Add like and comment buttons */}
          <div className="flex justify-between">
            <button className="text-blue-500">Like</button>
            <button className="text-blue-500">Comment</button>
            {/* add logic how to handle likes and comments later */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunitiesPost;
