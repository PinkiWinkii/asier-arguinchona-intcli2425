// src/components/Filters.tsx
import React, { useState } from 'react';

interface InputFilter {
  onEffectChange: (effects: string) => void;
}

const InputFilter: React.FC<InputFilter> = ({onEffectChange }) => {

  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e: any) => {
    setSearchText(e.target.value); // Change input text value whenever something is written or field text changes
  };

  const handleSearchSubmit = (e: any) => {
    e.preventDefault(); // Don't send until button pressed
    onEffectChange(searchText); // Change filter search text
  };


  return (

      <div className="flex flex-col items-center rounded-lg w-[320px] h-[90px]">
        <form onSubmit={handleSearchSubmit} className='mt-3 border-2 rounded-xl w-[350px]'> 
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <input
              type="search"
              id="search"
              className="block w-full p-4 text-[20px] text-gray-900 focus:outline-none border-gray-300 rounded-lg bg-black  dark:bg-black dark:border-black dark:placeholder-gray-600 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
              placeholder="Secondary Effect"
              value={searchText} 
              onChange={handleSearchChange} 
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-orange-700 hover:bg-orange-800 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-[20px] px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
  );
};

export default InputFilter;
