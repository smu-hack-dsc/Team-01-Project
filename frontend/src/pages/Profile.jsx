import React, { useState, useEffect, useRef } from "react";
import api from '../api';
import { useNavigate } from "react-router-dom";
import ProfilePost from "components/ProfilePost";
import { Button } from 'components/Button';
import Filter from "components/Filter";
import { IonIcon } from '@ionic/react';
import { person } from 'ionicons/icons';
import { css } from "@emotion/react";


function Profile() {
  const [profileData, setProfileData] = useState([]);
  const [userPostsData, setUserPostsData] = useState([]);
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    // Trigger the click event of the hidden file input element
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    const formData = new FormData();
    formData.append('image', selectedFile);
    // upload the file
    try {
      const response = await api.put('/user/profile', formData);
      setProfileData(response.data);
      window.location.reload()


    } catch(error) {
      console.log('uploadfile', error);
    }

  };

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    // window.location.href = '/'; // Redirect to the login page after logging out
    window.location.reload();
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get('/user/profile');
        setProfileData(response.data);
      } catch (error) {
        console.log('Error fetching profile data: ', error);

        if (error.response && error.response.status === 401) {
          navigate('/login');
        }
      }
    };

    const fetchPosts = async () => {
      try {
        const response = await api.get('/post/myposts');
        setUserPostsData(response.data);
      } catch (error) {
        console.log('Error fetching post data: ', error);
      }
    }

    fetchProfile();
    fetchPosts();

  }, [navigate]);

  return (
    <div>
      <div className="absolute top-20 w-full h-full flex flex-col justify-start items-center pt-5">
        <div className="flex flex-row sm:w-4/5 lg:w-2/3">
          <div className="mr-20 max-w-[35%]">
            {/* left col */}
            <div>
              {profileData.imageUrl ?
                <img
                  src={profileData.imageUrl}
                  alt="Profile Pic"
                  className="object-cover w-full rounded-md mb-14 "
                /> :
                <>
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                  />

                  <label>
                    <button
                      className="flex justify-center items-center p-6 text-black font-DM font-semibold rounded-md mb-15 bg-gray-200"
                      onClick={handleButtonClick}
                    >
                      <IonIcon icon={ person } size="large"></IonIcon>
                    </button>
                  </label>
                </>
                // <>

                //   <input type="file" accept="image/*" >
                // <button className="flex s:h-2/3 sm:w-2/3 lg:h-2/3 lg:w-2/3 text-black font-DM font-semibold rounded-md mb-15 bg-gray-200">
                // Add Picture!
                //  </button>
                //  </input>
                // </>
              }

              <div className="text-black font-DM font-semibold sm:text-xl lg:text-2xl mt-3 mb-5">
                {profileData.name}
                {/* Tay Si Yu */}
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between justify-items-start font-DM text-black font-semibold">
                  {userPostsData?.length ? <div>{userPostsData.length} posts</div> : <div>0 Posts</div>}
                </div>
                <div className="text-opacity-40 font-DM sm:text-10px lg:text-15px mb-10">
                  {/* Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                        Donec placerat volutpat magna,
                        sed ornare nunc auctor et.
                        Curabitur sed massa libero.
                        Nullam ut sem libero.
                        Nullam nec fermentum elit,
                        sed ullamcorper elit.
                        Curabitur tristique mollis. */}
                  
                  {profileData.description}
                </div>
                <div className="w-202.002 h-1 bg-gray-300 mb-15" />
              </div>

              <div className="text-black font-DM font-semibold">Interests</div>
              <div className="text-opacity-40 font-DM text-15px font-normal">
                {profileData.interests && profileData.interests.map((interest, index) => (
                  <React.Fragment key={index}>
                    {interest}
                    {index !== profileData.interests.length - 1 && ', '}
                  </React.Fragment>
                ))}
              </div>
              {/* <div className="text-opacity-40 font-DM text-15px font-normal">Youth Education, Environment Conservation</div> */}

              <div className="text-black font-DM font-semibold mt-3">Location</div>
              <div className="text-opacity-40 font-DM text-15px font-normal">Singapore, Singapore</div>

              <div className="flex flex-row mt-4 gap-3">
                <img
                  src={require("../resources/img/Settings.png")}
                  alt='Settings'
                  className="w-8 h-8" />
                <img
                  src={require("../resources/img/Question.png")}
                  alt='Help'
                  className="w-8 h-8" />
                <img
                  src={require("../resources/img/Logout.png")}
                  alt='Logout'
                  onClick={handleLogout}
                  className="w-8 h-8" />
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="w-full flex flex-col">
            <div className="mt-15">
              <div className="flex justify-between items-center">
                {profileData.role === 'user' ? (
                  <>
                    <div className="text-purple_4000C1 text-shadow-lg font-RecoletaAlt font-semibold text-4xl">
                      My Posts
                    </div>
                    <Filter categorySubcategories={{ "Recent": null }} />
                  </>
                ) : (
                  <>
                    <div className="text-purple_4000C1 text-shadow-lg font-RecoletaAlt font-semibold text-4xl">
                      My Activities
                    </div>
                    <Button variant="yellow" size="small">
                      Create New Activity
                    </Button>
                  </>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-5">
              {/* {userPostsData.map((post) => (
                <ProfilePost
                  key={post._id}
                  imageUrl={post.imageInfo?.imagePath}
                />
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Profile;