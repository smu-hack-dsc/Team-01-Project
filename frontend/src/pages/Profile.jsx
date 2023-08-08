import React, { useState, useEffect, useRef } from "react";
import api from "../api";
import { useNavigate, Link } from "react-router-dom";
// import { Button } from 'components/Button';
// import Filter from "components/Filter";
import { IonIcon } from "@ionic/react";
import { person } from "ionicons/icons";
import ProfilePost from "components/ProfilePost";
import ProjectCard from "components/ProjectCard";
import { Grid } from "@mui/material";

function Profile() {
  const [profileData, setProfileData] = useState([]);
  const [userPostsData, setUserPostsData] = useState([]);
  const [projectData, setProjectData] = useState([]);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    // Trigger the click event of the hidden file input element
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    const formData = new FormData();
    formData.append("image", selectedFile);
    // upload the file
    try {
      const response = await api.put("/user/profile", formData);
      setProfileData(response.data);
      window.location.reload();
    } catch (error) {
      console.log("uploadfile", error);
    }
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    // window.location.href = '/'; // Redirect to the login page after logging out
    window.location.reload();
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get("/user/profile");
        setProfileData(response.data);

        if (response.data.role === "volunteerOrg") {
          const projectResponse = await api.get(
            `activity/vo/${response.data.id}`
          );
          const project = projectResponse.data;
          setProjectData([project]); // Assuming setUserProjectData expects an array
          fetchProjects(response.data.id, response.data.role);
          console.log("project", project);
        }
      } catch (error) {
        console.log("Error fetching profile data: ", error);
        if (error.response && error.response.status === 401) {
          navigate("/login");
        }
      }
    };

    const fetchPosts = async () => {
      try {
        const response = await api.get("/post/myposts");
        setUserPostsData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching post data: ", error);
      }
    };

    const fetchProjects = async (userId, role) => {
      try {
        if (role === "volunteerOrg") {
          const response = await api.get(`activity/vo/${userId}`);
          setProjectData(response.data);
        } else {
          const response = await api.get("/activity/");
          setProjectData(response.data);
        }
      } catch (error) {
        console.log("Error fetching projects data: ", error);
      }
    };

    // const fetchActivity = async() => {
    //   try {
    //     console.log(profileData.id);
    //     const response = await api.get(`activity/vo/${profileData.id}`);
    //     setUserProjectData(response.data);
    //     console.log(response.data);
    //   } catch (error) {
    //     console.log('Error fetching project data: ', error);
    //   }

    // }

    fetchProfile();
    fetchPosts();
    // fetchActivity();
  }, [navigate]);

  return (
    <div>
      <div className="absolute top-20 left-0 w-full h-full flex flex-col justify-start items-center pt-5">
        <div className="flex flex-row justify-center xs:w-4/5 lg:w-2/3 pb-20">
          <div className="xs:mr-10 md:mr-20 max-w-[35%]">
            {/* left col */}
            <div>
              {profileData.imageUrl ? (
                <img
                  src={profileData.imageUrl}
                  alt="Profile Pic"
                  className="object-cover w-full rounded-md mb-14 "
                />
              ) : (
                <>
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />

                  <label>
                    <button
                      className="flex justify-center items-center p-6 text-black font-DM font-semibold rounded-md mb-15 bg-gray-200"
                      onClick={handleButtonClick}
                    >
                      <IonIcon icon={person} size="large"></IonIcon>
                    </button>
                  </label>
                </>
              )}

              <div className="text-black font-DM font-semibold sm:text-xl lg:text-2xl mt-3 mb-5">
                {profileData.name}
                {/* Tay Si Yu */}
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col justify-between justify-items-startfont-DM text-black font-semibold mb-4">
                  {userPostsData?.length ? (
                    <div>{userPostsData.length} posts</div>
                  ) : (
                    <div>0 Posts</div>
                  )}
                  {profileData.role !== "user" ? (
                    <div>{projectData.length} projects</div>
                  ) : null}
                </div>
                <div className="text-opacity-40 font-DM sm:text-10px lg:text-15px mb-10">
                  {profileData.description}
                </div>
                <div className="w-202.002 h-1 bg-gray-300 mb-15" />
              </div>

              <div className="text-black font-DM font-semibold">Interests</div>
              <div className="text-opacity-40 font-DM text-15px font-normal">
                {profileData.interests &&
                  profileData.interests.map((interest, index) => (
                    <React.Fragment key={index}>
                      {interest}
                      {index !== profileData.interests.length - 1 && ", "}
                    </React.Fragment>
                  ))}
              </div>

              <div className="text-black font-DM font-semibold mt-3">
                Location
              </div>
              <div className="text-opacity-40 font-DM text-15px font-normal">
                Singapore, Singapore
              </div>

              <div className="flex flex-col">
                <div className="flex flex-row mt-4 gap-3">
                  <img
                    src={require("../resources/img/Settings.png")}
                    alt="Settings"
                    className="w-8 h-8"
                  />
                  <img
                    src={require("../resources/img/Question.png")}
                    alt="Help"
                    className="w-8 h-8"
                  />
                </div>
                <button
                  className="flex flex-row items-center justify-center font-DMSans font-semibold bg-gray-200 hover:bg-gray-300 rounded-full py-2 text-sm mt-4 w-[85px]"
                  onClick={handleLogout}
                >
                  LOGOUT
                </button>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="w-full flex flex-col">
            <div className="mt-15">
              <div className="flex xs:flex-col md:flex-row justify-between xs:items-start md:items-center">
                {profileData.role === "user" ? (
                  <>
                    <div className="flex-flex-col">
                      <div className="text-purple_4000C1 text-shadow-lg font-RecoletaAlt font-semibold text-4xl">
                        My Posts
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-5 h-[600px] overflow-y-scroll scroll-smooth snap-y">
                        {userPostsData.map((post, index) => (
                          <div
                            key={index}
                            className="p-4 border border-gray-300 rounded-md flex flex-col justify-between font-DMSans"
                          >
                            <div>
                              <div className="flex items-center mb-2">
                                <span className="text-lg font-bold">
                                  {post.postTitle}
                                </span>
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
                            </div>
                            {post.imageInfo && (
                              <img
                                className="max-h-56 rounded-md mb-2"
                                src={post.imageInfo.imagePath}
                                alt="Post"
                              />
                            )}
                            <div className="flex justify-between">
                              <button className="text-purple_9663FC">
                                Like
                              </button>
                              <button className="text-purple_9663FC">
                                Comment
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col w-full">
                      <div className="flex-row">
                        <div className="text-purple_4000C1 font-RecoletaAlt font-semibold xs:text-3xl md:text-4xl xs:mb-4">
                          My Projects
                        </div>
                        <button className="bg-yellow_FFDA7A hover:bg-yellow-400 xs:text-sm px-3 py-1 text-black rounded-full border-none font-semibold font-inherit md:text-base font-DMSans whitespace-nowrap mb-2">
                          <Link to="/createproject">CREATE NEW PROJECT</Link>
                        </button>
                      </div>
                      <div className="grid mt-5 h-[400px] w-full overflow-y-scroll scroll-smooth snap-y">
                        <Grid container spacing={2}>
                          {projectData.map((project, index) => (
                            <Grid key={index} item xs={12} sm={6}>
                              <ProjectCard
                                key={index}
                                id={project._id}
                                activityName={project.activityName}
                                description={project.description}
                                organiser={project.organiserId}
                                imageUrl={project.imageInfo?.imagePath}
                              />
                            </Grid>
                          ))}
                        </Grid>
                      </div>
                      <div className="w-full border-t border-gray-300 my-5"></div>
                      <div className="text-purple_4000C1 text-shadow-lg font-RecoletaAlt font-semibold text-4xl">
                        My Posts
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-5 h-[400px] overflow-y-scroll scroll-smooth snap-y">
                        {userPostsData.map((post, index) => (
                          <div
                            key={index}
                            className="p-4 border border-gray-300 rounded-md flex flex-col justify-between font-DMSans"
                          >
                            <div>
                              <div className="flex items-center mb-2">
                                <span className="text-lg font-bold">
                                  {post.postTitle}
                                </span>
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
                            </div>
                            {post.imageInfo && (
                              <img
                                className="max-h-56 rounded-md mb-2"
                                src={post.imageInfo.imagePath}
                                alt="Post"
                              />
                            )}
                            <div className="flex justify-between">
                              <button className="text-purple_9663FC">
                                Like
                              </button>
                              <button className="text-purple_9663FC">
                                Comment
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
