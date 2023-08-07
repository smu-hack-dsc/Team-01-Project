import { useNavigate } from 'react-router-dom';
import api from '../api';

const ProjectSignup= ({ id, activityName, description, imageUrl }) => {
  const navigate = useNavigate();

  return (
    <div className='absolute top-28 mx-20 font-DMSans'>
      <div className="flex flex-row">
        <img
            // src={imageUrl}
            src={require("../resources/img/Project.png")}
            alt="Project"
            className="h-[200px] w-[200px] object-cover object-center rounded-lg"
          />
          <div className='flex flex-col justify-center ml-10 '>
            <div className='flex flex-col flex-wrap justify-center items-center font-RecoletaAlt text-purple_4000C1 text-4xl font-semibold'>
              Project Name (pls dont make it long)
            </div>
            <button className='bg-green-200 hover:bg-green-300 text-black font-semibold text-base px-3 py-2 rounded-full border-none w-28 mt-2' 
            >
              REGISTER
            </button>
        </div>
      </div>
      <div className='mt-10 font-semibold text-2xl'>
        Project Description
      </div>
      <div className='sm:text-sm'>
        Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
        Donec placerat volutpat magna,
        sed ornare nunc auctor et.
        Curabitur sed massa libero.
        Nullam ut sem libero.
        Nullam nec fermentum elit,
        sed ullamcorper elit.
        Curabitur tristique mollis.
      </div>
      <div className='flex flex-row justify-around'>
        <div className='flex flex-col'>
          <div className='mt-10 font-DMSans font-semibold text-2xl'>
            Date
          </div>
          <div>
            date range
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='mt-10 font-DMSans font-semibold text-2xl'>
            Date
          </div>
          <div>
            date range
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProjectSignup;