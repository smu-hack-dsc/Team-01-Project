import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { search } from 'ionicons/icons';

const SearchBar = ({ input, setInput }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    setInput(value); // Set the search term in the parent component
  };

  const handleSearch = () => {
    // implement additional search logic here if needed
    console.log('Search Text:', searchText);
  };

  return (
    <div className="px-4 py-1 outline outline-[1px] outline-gray-300 flex items-center rounded-lg font-DMSans">
      <input
        type="text"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Search"
        className="w-full outline-none bg-transparent py-2 px-2 text-gray-700 placeholder-gray-400"
      />
      <button
        onClick={handleSearch}
        className="flex items-center justify-center ml-2 px-4 py-2 bg-purple_9663FC text-white rounded-lg"
      >
        <IonIcon icon={search} size="small" />
      </button>
    </div>
  );
};

export default SearchBar;
