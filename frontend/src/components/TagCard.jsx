import React from 'react';
import { Button } from 'components/Button';
import { IonIcon } from '@ionic/react';
import { image } from 'ionicons/icons';

const TagCard = ({ title, description, handleTag }) => {
    const handleSelect = (interest) => {
        handleTag(interest);
    }

    return (
        <div className="flex flex-col w-5/12 bg-gray-100 rounded-lg mt-4 mx-2 flex-shrink-0">
            <img
                src={require("../resources/img/Project.png")}
                //   src = {imageUrl}
                alt="Project"
                className="w-full h-32 sm:h-40 object-cover rounded-t-lg"
            />
            <div className="flex justify-between p-2">
                <div className="flex flex-col justify-center text-black font-DMSans text-xl font-semibold mt-1 -mb-2 ml-1">
                    {/* Tag Name */}
                    {title.toUpperCase()}
                </div>
                {/* <div className="flex flex-col justify-center text-black font-DMSans text-sm font-semibold">
                    <IonIcon icon={image} size="large" />
                </div> */}
            </div>
            <div className="flex flex-col h-1/3 justify-start text-black font-DMSans text-sm font-normal p-2 ml-1">
                <p>
                    {description}
                </p>
            </div>
            <div className='pl-3 py-2'>
              <button
                  className="px-4 py-2 bg-green_C8F3D9 text-black rounded-full hover:bg-green-300 font-DMSans font-semibold text-sm"
                  onClick={() => handleTag(title)}
              >
                  VIEW
              </button>
            </div>
        </div>
    )
};

export default TagCard;
