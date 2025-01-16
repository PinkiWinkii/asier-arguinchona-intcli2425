// src/components/Filters.tsx
import React from 'react';

interface RarityFilter {
  setRarity: (rarity: string) => void;
  rarity: string;
}

const RarityFilter: React.FC<RarityFilter> = ({setRarity, rarity}) => {

  return (
      <div className="flex flex-col items-center bg-black bg-opacity-80 border-2 rounded-lg w-[300px] h-[90px]">
        <label className="flex flex-col text-center items-center text-2xl">Potion Rarity</label>
        <select
          id="rarity"
          className={`p-2 w-[50%] mt-2 bg-gray-800 ${rarity === 'legendary' ? 'text-orange-500' : rarity === 'epic' ? 'text-red-500' : rarity === 'mythic' ? 'text-purple-500' : 'text-white'}`}
          onChange={(e) => setRarity(e.target.value)}
        >
          <option value="all" className='text-white'>All</option>
          <option value="legendary" className='text-orange-500'>Legendary</option>
          <option value="epic" className='text-red-500'>Epic</option>
          <option value="mythic" className='text-purple-500'>Mythic</option>
        </select>
      </div>
  );
};

export default RarityFilter;
