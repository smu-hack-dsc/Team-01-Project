import { useNavigate } from 'react-router-dom';
import api from '../api';
import { useState, useRef } from 'react';
import { IonIcon } from '@ionic/react';
import { image } from 'ionicons/icons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ProjectCreate = () => {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);


  const allInterests = [
    "elderly",
    "environment",
    "children",
    "tutoring",
    "animals",
  ];
  const allSkills = [
    "english",
    "chinese",
    "malay",
    "hindi",
    "teaching",
    "caregiving",
    "cooking",
    "driving",
  ];

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

  const handleRegister = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('activityName', projectName);
  
    selectedSkills.forEach((skill) => {
      if (skill) {
        formData.append('requiredSkills', skill);
      }
    });
  
    selectedInterests.forEach((interest) => {
      if (interest) {
        formData.append('categories', interest);
      }
    });
  
    formData.append('beginDate', startDate);
    formData.append('endDate', endDate);
    formData.append('description', projectDesc);
  
    if (fileInputRef.current?.files[0]) {
      formData.append('image', fileInputRef.current.files[0]);
    }
  
    // console.log("Activity Name:", formData.get("activityName"));
    // console.log("Required Skills:", formData.getAll("requiredSkills"));
    // console.log("Categories:", formData.getAll("categories"));
    // console.log("Begin Date:", formData.get("beginDate"));
    // console.log("End Date:", formData.get("endDate"));
    // console.log("Description:", formData.get("description"));
  
    // if (formData.has("image")) {
    //   console.log("Image File:", formData.get("image"));
    // } else {
    //   console.log("No Image Selected");
    // }

    try {
      const response = await api.post('/activity', formData);
      navigate('/voproject', { state: { id: response.data.id } });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }

    console.log('done');
  };


  const handleSkillAdd = (skill) => {
    setSelectedSkills([...selectedSkills, skill]);
  };

  const handleSkillDelete = (skill) => {
    const updatedSkills = selectedSkills.filter((selectSkill) => selectSkill !== skill);
    setSelectedSkills(updatedSkills);
  }

  const handleInterestAdd = (interest) => {
    setSelectedInterests([...selectedInterests, interest]);
  };

  const handleInterestDelete = (interest) => {
    const updatedInterests = selectedInterests.filter(
      (selectInterest) => selectInterest !== interest
    );
    setSelectedInterests(updatedInterests);
  };

  return (
    <div className='absolute top-28 mx-20 font-DMSans'>
      <form>
        <div className="flex flex-row">
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
          />

          <label>
            <button
              type="button"
              className="flex justify-center items-center p-6 text-black font-DM font-semibold rounded-md mb-15 bg-gray-200"
              onClick={handleButtonClick}
            >
              <IonIcon icon={image} size="large"></IonIcon>
            </button>
          </label>
          <div className='flex flex-col justify-center ml-10 '>
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

        <div className='mt-10 font-semibold text-2xl w-2/3'>
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
          class="w-2/3 rounded-xl border-[1px] border-black font-DMSans xs:text-base sm:text-xl mb-4 xs:py-2 sm:py-4 px-5 placeholder:text-gray-200"
        />

        <div className='flex flex-row justify-between mb-10'>
          <div className='flex flex-col'>
          </div>
          <div className='flex flex-col w-1/6'>
            <div className='mt-10 font-DMSans font-semibold text-2xl mx-2'>
              Start Date
            </div>
            <div>
              <DatePicker
                className="w-[100%] rounded-xl border-[1px] border-black font-DMSans xs:text-base sm:text-xl mb-4 xs:py-2 sm:py-4 px-5 placeholder:text-gray-200"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText={"Start Date"}
              />
            </div>
          </div>
          <div className='flex flex-col mx-2 w-1/6'>
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
          <div className='flex flex-col w-1/3'>
            <div className='mt-10 font-DMSans font-semibold text-2xl'>
              Required Skills
            </div>
            <div className='flex flex-wrap'>

              {allSkills.map((skill) => {
                return (
                  !selectedSkills.includes(skill) ?
                    <button className="block text-black border-[1px] border-gray-300 px-1 m-0.5 rounded-md text-base font-medium"
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
          <div className='flex flex-col w-1/3'>
            <div className='mt-10 font-DMSans font-semibold text-2xl'>
              Relevant Categories
            </div>
            <div className='flex flex-wrap'>
              {allInterests.map((interest) => {
                return !selectedInterests.includes(interest) ? (
                  <button
                    className="block text-black border-[1px] border-gray-300 px-1 m-0.5 rounded-md text-base font-medium"
                    onClick={() => handleInterestAdd(interest)}
                    type="button"
                  >
                    {interest}
                  </button>
                ) : (
                  <button
                    className="block text-white border-[1px] border-purple-500 bg-purple-500 px-1 m-0.5 rounded-md text-base font-medium"
                    onClick={() => handleInterestDelete(interest)}
                    type="button"
                  >
                    {interest}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300"></div>

        <button className={`text-black font-semibold text-base px-3 py-2 bg-green-200 hover:bg-green-300 rounded-full border-none mt-2`}
          onClick={handleRegister}
          type="button"
        >
          CREATE ACTIVITY
        </button>
      </form>
    </div>
  )
};

export default ProjectCreate;