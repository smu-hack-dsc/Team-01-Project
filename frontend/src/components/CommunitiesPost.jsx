import React, { useState } from "react";

const CommunitiesPost = () => {
  const [posts, setPosts] = useState([]);

  const handlePostSubmit = (postText, tags, image) => {
    // logic to handle the post submission and add it to the posts state
    const newPost = {
      postText,
      tags: tags.map((tag) => tag.toLowerCase()),
      image,
      username: "sample person", // replace w username
      timestamp: new Date().toISOString(), // timestamp
    };
    setPosts([...posts, newPost]);
  };

  return (
    <div className="container mx-auto sm:w-4/5 lg:w-2/3">
      {/* post input/creation */}
      <div className="p-4 border border-gray-300 rounded-md mb-4">
        {/* replace with proper logic later */}
        <form onSubmit={(e) => e.preventDefault()}>
          <textarea
            className="w-full px-3 py-2 mb-2 resize-none border border-gray-300 rounded-md focus:outline-none"
            placeholder="What's on your mind?"
            onChange={(e) => console.log(e.target.value)}
            // figure out how to store the post text in state using useState and onChange
          />
          {/* input fields for tags and image upload */}
          <button
            className="px-4 py-2 bg-purple_9663FC text-white rounded-md hover:bg-purple-500"
            onClick={() => handlePostSubmit("Sample post", ["#sampleTag"], null)}
          >
            Post
          </button>
        </form>
      </div>

      {/* post */}
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
