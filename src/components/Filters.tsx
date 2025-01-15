// src/components/Filters.tsx
import React from 'react';

interface FiltersProps {
  onLevelChange: (level: number) => void;
  onRarityChange: (rarity: string) => void;
}

const Filters: React.FC<FiltersProps> = ({ onLevelChange, onRarityChange }) => {
  return (
    <div className="flex justify-center items-center gap-8 mt-4">
      {/* Slider */}
      <div className="flex flex-col items-center">
        <label htmlFor="level" className="text-lg">Level Requirement (0-100)</label>
        <input
          type="range"
          id="level"
          min="0"
          max="100"
          className="w-64"
          onChange={(e) => onLevelChange(Number(e.target.value))}
        />
      </div>

      {/* Dropdown */}
      <div className="flex flex-col items-center">
        <label htmlFor="rarity" className="text-lg">Potion Rarity</label>
        <select
          id="rarity"
          className="p-2"
          onChange={(e) => onRarityChange(e.target.value)}
        >
          <option value="all">All</option>
          <option value="legendary">Legendary</option>
          <option value="epic">Epic</option>
          <option value="mythic">Mythic</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
