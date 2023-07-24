import React from 'react';
import { Button } from 'components/Button';

const TranslucentPurple = () => (
  <div className="flex justify-center items-center">
    {/* edit max height and image overflow */}
    <div className="relative w-full h-full flex-shrink-1">
      <div className="absolute top-0 left-0 w-full h-full bg-purple_9663FC opacity-50 z-10"></div>
      <img
        src={require("../resources/img/FooterImg.png")}
        alt="FooterImg"
        className="relative z-1"
      />
    </div>
    <div className="absolute flex items-center w-1020 h-62.434 flex-col justify-center text-white text-center z-10">
      <div className="font-RecoletaAlt text-4xl lg:text-5xl z-3">
        You can make a difference today!
      </div>
      <div className="font-DMSans text-xl lg:text-2xl z-3">
        There’s a lot more we can do, together.
      </div>
      <div className="z-3 mt-4">
        <Button variant="yellow" size="large">
          SIGN UP NOW
        </Button>
      </div>
    </div>
  </div>
);

export { TranslucentPurple };
