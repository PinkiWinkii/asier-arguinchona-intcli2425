// src/components/Filters.tsx
import React, { MouseEventHandler } from 'react';
import RarityFilter from './RarityFilter';
import InputFilter from './InputFilter';
import LevelFilter from './LevelFilter';
import CraftingTimeFilter from './CraftingTimeFilter';

interface FiltersProps {
  onEffectChange: (effects: string) => void;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
  rarity: string;
  setRarity: (rarity: string) => void;
  level: number;
  calculateCraftTime: MouseEventHandler<HTMLButtonElement>;
  craftTime: number;
}

const Filters: React.FC<FiltersProps> = ({ onEffectChange, setLevel, rarity, setRarity, level, calculateCraftTime, craftTime }) => {

  return (
    <div className="flex flex-col justify-center items-center h-[200px] mt-4 bg-black border-2 rounded-lg">

      <div>
        <p className='text-center text-4xl mb-4 underline'>FILTERS</p>
      </div>

      <div className='flex flex-row justify-center items-center gap-28 py-2'>
        <LevelFilter setLevel={setLevel} level={level}></LevelFilter>

        <RarityFilter setRarity={setRarity} rarity={rarity}></RarityFilter>

        <InputFilter onEffectChange={onEffectChange}></InputFilter>

        <CraftingTimeFilter calculateCraftingTime={calculateCraftTime} craftingTime={craftTime}></CraftingTimeFilter>
      </div>
    </div>
  );
};

export default Filters;
