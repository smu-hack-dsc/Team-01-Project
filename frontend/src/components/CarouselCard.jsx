import React from 'react';
import { Button } from 'components/Button';
import { IonIcon } from '@ionic/react';
import { image } from 'ionicons/icons';

const CarouselCard = () => (
  <div className="flex flex-col w-48 sm:w-60 bg-gray-100 rounded-lg mt-4 mx-auto flex-shrink-0 pb-4">
    <img
      src={require("../resources/img/Project.png")}
      alt="Project"
      className="w-full h-32 sm:h-40 object-cover rounded-t-lg"
    />
    <div className="flex justify-between p-2">
      <div className="flex flex-col justify-center text-black font-DMSans text-xl font-semibold ml-1">
        Project Name
      </div>
      <div className="flex flex-col justify-center text-black font-DMSans text-sm font-semibold">
        <IonIcon icon={image} size="large" />
      </div>
    </div>
    <div className="flex flex-col justify-start h-20 text-black font-DMSans text-sm font-normal p-2 ml-1">
      <p>
        short description
      </p>
    </div>
    <div className="pl-2 pt-1">
      <Button variant="green" size="medium">
        LEARN MORE
      </Button>
    </div>
  </div>
);

export { CarouselCard };
