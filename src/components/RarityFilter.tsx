// src/components/Filters.tsx
import React from 'react';

interface RarityFilter {
  setRarity: any;
}

const RarityFilter: React.FC<RarityFilter> = ({setRarity}) => {

  return (
      <div className="flex flex-col items-center">
        <label className="text-lg">Potion Rarity</label>
        <select
          id="rarity"
          className="p-2"
          onChange={(e) => setRarity(e.target.value)}
        >
          <option value="all">All</option>
          <option value="legendary">Legendary</option>
          <option value="epic">Epic</option>
          <option value="mythic">Mythic</option>
        </select>
      </div>
  );
};

export default RarityFilter;
