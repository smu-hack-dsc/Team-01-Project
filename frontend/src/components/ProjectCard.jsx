import React, { useState } from 'react';
import { Button } from 'components/Button';
import { IonIcon } from '@ionic/react';
import { image } from 'ionicons/icons';

const ProjectCard = ({activityName, description, imageUrl}) => {
  return (
    <div className="flex flex-col sm:w-1/3 lg:w-1/4 sm:h-[23%] lg:h-[40%] bg-gray-100 rounded-lg mt-4 sm:mb-5 lg:mb-0 mx-2 grow pb-24">
      <img
        src={imageUrl}
        alt="Project"
        className="w-full max-h-[150px] object-cover rounded-t-lg"
      />
      {/* <div className="max-h-[60%]"> */}
        <div className="flex justify-between">
          <div className="w-247 h-59.682 flex flex-col justify-center text-black font-DMSans sm:text-xl lg:text-2xl font-semibold ml-4 sm:mt-2 lg:mt-3">
            {activityName}
          </div>
          <div className="w-35.2 h-39.514 flex flex-col justify-center text-black font-DMSans text-sm font-semibold mr-4 mt-2">
            <IonIcon icon={ image } size="large"></IonIcon>
          </div>
        </div>
        <div className="flex flex-col whitespace-normal justify-start text-black font-DMSans text-sm font-normal mx-4 mt-1">
          {/* {(description.split(" ").length >= 20) ? 
            (`
            <> {description.split(" ").slice(0, 20).join(" ") + ' ...'}
            </>): (<>
          {description}</>)} */}
          <p class="overflow-ellipsis overflow-hidden ...">
            {description}
          </p>
        </div>
      {/* </div> */}
      <div className="self-end mt-auto pr-3 pt-3 pb-[20%]">
        <Button variant="green" size="medium">
          LEARN MORE
        </Button>
      </div>
    </div>
    )};


export default ProjectCard;
