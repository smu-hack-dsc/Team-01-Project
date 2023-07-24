import React from 'react';
import ArrowAngleRight from '../resources/img/ArrowAngleRight';

const NextButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center ml-4 mr-4 p-2 bg-white border-none rounded-full shadow-button hover:bg-gray-100 transition duration-200"
    >
      <ArrowAngleRight size={24} />
    </button>
  );
};

export default NextButton;