// src/components/Filters.tsx
import React from 'react';
import RarityFilter from './RarityFilter';
import InputFilter from './InputFilter';
import LevelFilter from './LevelFilter';

interface FiltersProps {
  onEffectChange: (effects: string) => void;
  setLevel: any;
  setRarity: any;
  level: number;
  calculateCraftTime: any;
  craftTime: number;
}

const Filters: React.FC<FiltersProps> = ({ onEffectChange, setLevel, setRarity, level, calculateCraftTime, craftTime }) => {

  return (
    <div className="flex justify-center items-center gap-8 mt-4">

      <LevelFilter setLevel={setLevel} level={level}></LevelFilter>

      <RarityFilter setRarity={setRarity}></RarityFilter>

      <InputFilter onEffectChange={onEffectChange}></InputFilter>

      <div className="flex flex-col items-center">
        <button
          type="submit"
          className="text-white end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={calculateCraftTime}
        >
          CALCULATE CRAFTING TIME
        </button>
        <div className='mt-3 text-2xl'>CRAFTING TIME: {craftTime} mins</div>
      </div>
    </div>
  );
};

export default Filters;
