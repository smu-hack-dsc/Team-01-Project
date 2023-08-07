import { useLocation, useNavigate } from 'react-router-dom';
import api from '../api';
import { useState, useEffect, useRef } from 'react';
import { IonIcon } from '@ionic/react';
import { image } from 'ionicons/icons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ProjectCreate = () => {
  const navigate = useNavigate();
  const [activityDetails, setActivityDetails] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [isRegistered, setisRegistered] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [selectedSkills, setSelectedSkills] = useState([]);

  
  const allSkills = ['english', 'chinese', 'malay', 'hindi', 'teaching', 'caregiving', 'cooking', 'driving'];

  const location = useLocation();
  const activityId = location.state?.id;

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    // Trigger the click event of the hidden file input element
    fileInputRef.current.click();
  };

  const handleFocus = (e, value) => {
    if (e.target.placeholder === `${value}`) {
      e.target.placeholder = '';
    }
  }

  const handleBlur = (e, value) => {
    if (e.target.value === '') {
      e.target.placeholder = `${value}`;
    }

  }

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    const formData = new FormData();
    formData.append('image', selectedFile);
    // upload the file
    // try {
    //   const response = await api.put('/user/profile', formData);
    //   setProfileData(response.data);
    //   window.location.reload()


    // } catch(error) {
    //   console.log('uploadfile', error);
    // }

  };

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

  const handleSkillAdd = (skill) => {
    setSelectedSkills([...selectedSkills, skill]);
  };

  const handleSkillDelete = (skill) => {
    const updatedSkills = selectedSkills.filter((selectSkill) => selectSkill !== skill);
    setSelectedSkills(updatedSkills);
  }

  return (
    <div className='absolute top-28 mx-20 font-DMSans'>
      <form>
        <div className="flex flex-row">
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
              <IonIcon icon={image} size="large"></IonIcon>
            </button>
          </label>
          <div className='flex flex-col justify-center ml-10 '>
            {/*<div className='flex flex-col flex-wrap justify-center items-center font-RecoletaAlt text-purple_4000C1 text-4xl font-semibold'>
              {activityDetails.activityName}
            </div> */}
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            onFocus={(e) => handleFocus(e, 'Project Name')}
            onBlur={(e) => handleBlur(e, 'Project Name')}
            required
            placeholder='Project Name'
            class="w-full rounded-xl border-[1px] border-black font-DMSans xs:text-base sm:text-xl mb-4 xs:py-2 sm:py-4 px-5 placeholder:text-gray-200"
          />
          </div>
        </div>

        <div className='mt-10 font-semibold text-2xl'>
          Project Description
        </div>
          <textarea
            type="text"
            value={projectDesc}
            onChange={(e) => setProjectDesc(e.target.value)}
            onFocus={(e) => handleFocus(e, 'Project Description')}
            onBlur={(e) => handleBlur(e, 'Project Description')}
            required
            placeholder='Project Description'
            class="w-full rounded-xl border-[1px] border-black font-DMSans xs:text-base sm:text-xl mb-4 xs:py-2 sm:py-4 px-5 placeholder:text-gray-200"
          />

        <div className='flex flex-row justify-between lg:max-w-[60%] mb-10'>
          <div className='flex flex-col'>
            {/* <div className='mt-10 font-DMSans font-semibold text-2xl'>
              Organisation
            </div>
            <div>
              {activityDetails.organisationName}
            </div> */}
          </div>
          <div className='flex flex-col'>
            <div className='mt-10 font-DMSans font-semibold text-2xl mx-2'>
              Start Date
            </div>
            <div>
              {/* {`${new Date(activityDetails.beginDate).toLocaleDateString()} - ${new Date(activityDetails.endDate).toLocaleDateString()}`} */}
              
              <DatePicker
                className="w-[100%] rounded-xl border-[1px] border-black font-DMSans xs:text-base sm:text-xl mb-4 xs:py-2 sm:py-4 px-5 placeholder:text-gray-200"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText={"Start Date"}
              />
            </div>
          </div>
          <div className='flex flex-col mx-2'>
            <div className='mt-10 font-DMSans font-semibold text-2xl'>
              End Date
            </div>
            <div>
              <DatePicker
                className="w-[100%] rounded-xl border-[1px] border-black font-DMSans xs:text-base sm:text-xl mb-4 xs:py-2 sm:py-4 px-5 placeholder:text-gray-200"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                placeholderText={"End Date"}
              />
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='mt-10 font-DMSans font-semibold text-2xl'>
              Required Skills
            </div>
            <div className='flex flex-wrap'>
              
            {allSkills.map((skill) => {
                return (
                  !selectedSkills.includes(skill) ?
                    <button className="block text-black border-[1px] border-gray-300 px-1 mx-1 m-0.5 rounded-md text-base font-medium"
                      onClick={() => handleSkillAdd(skill)}
                      type="button">
                      {skill}
                    </button> :
                    <button className="block text-white border-[1px] border-purple-500 bg-purple-500 px-1 m-0.5 rounded-md text-base font-medium"
                      onClick={() => handleSkillDelete(skill)}
                      type="button">
                      {skill}
                    </button>)
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300"></div>

        <button className={`text-black font-semibold text-base px-3 py-2 bg-green-200 hover:bg-green-300 rounded-full border-none mt-2`}
              onClick={handleRegister}
            >
              CREATE ACTIVITY
            </button>
      </form>
    </div>
  )
};

export default ProjectCreate;