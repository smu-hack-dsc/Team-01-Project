import React, { useState } from 'react';
import { Button } from 'components/Button';
import { IonIcon } from '@ionic/react';
import { image } from 'ionicons/icons';

const ProjectCard = () => {
  return (
    <div className="flex flex-col sm:w-1/3 lg:w-1/4 sm:h-1/4 lg:h-2/5 bg-gray-100 rounded-lg mt-4 sm:mb-5 lg:mb-0 mx-2 grow pb-24">
      <img
        src={require("../resources/img/Project.png")}
        alt="Project"
        className="w-full h-187 object-cover rounded-lg"
      />
      <div className="flex justify-between">
        <div className="w-247 h-59.682 flex flex-col justify-center text-black font-DMSans sm:text-xl lg:text-2xl font-semibold ml-4 sm:mt-2 lg:mt-3">
          Project Name
        </div>
        <div className="w-35.2 h-39.514 flex flex-col justify-center text-black font-DMSans text-sm font-semibold mr-4 mt-2">
          <IonIcon icon={ image } size="large"></IonIcon>
        </div>
      </div>
      <div className="flex flex-col justify-start h-82 text-black font-DMSans text-sm font-normal mx-4 mt-1">
        <p>
          Join us in our tree planting volunteer opportunity and make a positive impact on the environment by planting trees, promoting sustainability, and creating a greener future for our community. 
        </p>
      </div>
      <div className="pl-3 sm:pt-2 lg:pt-3">
        <Button variant="green" size="small">
          LEARN MORE
        </Button>
      </div>
    </div>
    )};


export default ProjectCard;
