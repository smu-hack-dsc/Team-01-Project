import React from 'react';
import { Button } from 'components/Button';
import { IonIcon } from '@ionic/react';
import { image } from 'ionicons/icons';

const TagCard = ({ title, description, handleTag }) => {
    const handleSelect = (interest) => {
        handleTag(interest);
    }

    return (
        <div className="flex flex-col w-5/12 bg-gray-100 rounded-lg mt-4 mx-2 flex-shrink-0 pb-4">
            <img
                src={require("../resources/img/Project.png")}
                //   src = {imageUrl}
                alt="Project"
                className="w-full h-32 sm:h-40 object-cover rounded-t-lg"
            />
            <div className="flex justify-between p-2">
                <div className="flex flex-col justify-center text-black font-DMSans text-xl font-semibold ml-1">
                    {/* Tag Name */}
                    {title.toUpperCase()}
                </div>
                <div className="flex flex-col justify-center text-black font-DMSans text-sm font-semibold">
                    <IonIcon icon={image} size="large" />
                </div>
            </div>
            <div className="flex flex-col h-1/3 justify-start text-black font-DMSans text-sm font-normal p-2 ml-1">
                <p>
                    {/* {(description.split(" ").length >= 10) ? 
        (
        <> {description.split(" ").slice(0, 10).join(" ") + ' ...'}
        </>): (<>
        {description}</>)} */}
                    {/* short description */}
                    {description}
                </p>
            </div>
            <button
                className="px-4 py-2 bg-purple_9663FC text-white rounded-md hover:bg-purple-500 font-DMSans"
                onClick={() => handleTag(title)}
            >
                View
            </button>
        </div>
    )
};

export default TagCard;
