import { useLocation, useNavigate } from 'react-router-dom';
import api from '../api';
import { useState, useEffect } from 'react';

const ProjectSignup = () => {
  const navigate = useNavigate();
  const [activityDetails, setActivityDetails] = useState([]);
  const [isRegistered, setisRegistered] = useState(false);

  const location = useLocation();
  const activityId = location.state?.id;

  useState(() => {
    const fetchActivity = async () => {
      try {
        const response = await api.get(`activity/${activityId}`);
        const profileData = await api.get(`/user/profile/${response.data.organiserId}`);
        response.data.organisationName = profileData.data.name;
        response.data.organisationDesc = profileData.data.description
        setActivityDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    const fetchSignup = async () => {
      try {
        const response = await api.get(`signup/activity/${activityId}`);
        if (response?.data) {
          setisRegistered(true);
        }
      } catch (error) {
        console.log(error);
        setisRegistered(false);
      }
    }

    fetchActivity();
    fetchSignup();

  }, [])

  const handleRegister = async () => {
    try {
      if (isRegistered) {
        await api.delete(`signup/activity/${activityId}`)
        setisRegistered(false);

      } else {
        await api.post(`signup/activity/${activityId}`)
        setisRegistered(true);

      }
    } catch (error) {
      console.log(error);
    }
  }


return (
  <div className='absolute top-28 mx-20 font-DMSans'>
    <div className="flex flex-row">
      <img
        src={activityDetails.imageUrl}
        // src={require("../resources/img/Project.png")}
        alt="Project"
        className="h-[200px] w-[200px] object-cover object-center rounded-lg"
      />
      <div className='flex flex-col justify-center ml-10 '>
        <div className='flex flex-col flex-wrap justify-center items-center font-RecoletaAlt text-purple_4000C1 text-4xl font-semibold'>
          {/* Project Name (pls dont make it long) */}
          {activityDetails.activityName}
        </div>
        <button className={`text-black font-semibold text-base px-3 py-2 ${isRegistered ? 'bg-red-300 hover:bg-red-400' : 'bg-green-200 hover:bg-green-300 '} rounded-full border-none mt-2 w-28`}
          onClick={handleRegister}
        >
          {isRegistered ? "CANCEL" : "REGISTER"}
        </button>
      </div>
    </div>

    <div className='mt-10 font-semibold text-2xl'>
      Project Description
    </div>
    <div className='sm:text-sm'>
      {activityDetails.description}
    </div>

    <div className='flex flex-row justify-between lg:max-w-[60%] mb-10'>
      <div className='flex flex-col'>
        <div className='mt-10 font-DMSans font-semibold text-2xl'>
          Organisation
        </div>
        <div>
          {activityDetails.organisationName}
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='mt-10 font-DMSans font-semibold text-2xl'>
          Date
        </div>
        <div>
          {`${new Date(activityDetails.beginDate).toLocaleDateString()} - ${new Date(activityDetails.endDate).toLocaleDateString()}`}
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='mt-10 font-DMSans font-semibold text-2xl'>
          Required Skills
        </div>
        <div>
          {activityDetails.requiredSkills?.length ? (
          <div>
            <ul>
              {activityDetails.requiredSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div>No required skills.</div>
        )}
        </div>
      </div>
    </div>

    <div className="border-t border-gray-300"></div>

    <div className='mt-10 font-semibold text-2xl'>
      {`About ${activityDetails.organisationName}`}
    </div>
    <div className='sm:text-sm'>
      {activityDetails.organisationDesc}
    </div>
  </div>
)
};

export default ProjectSignup;