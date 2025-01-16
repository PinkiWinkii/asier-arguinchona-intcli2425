// src/components/Filters.tsx
import React from 'react';
import RarityFilter from './RarityFilter';
import InputFilter from './InputFilter';
import LevelFilter from './LevelFilter';
import CraftingTimeFilter from './CraftingTimeFilter';

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
    <div className="flex justify-center items-center h-[120px] gap-28 mt-4 bg-white bg-opacity-25">

      <LevelFilter setLevel={setLevel} level={level}></LevelFilter>

      <RarityFilter setRarity={setRarity}></RarityFilter>

      <InputFilter onEffectChange={onEffectChange}></InputFilter>

      <CraftingTimeFilter calculateCraftingTime={calculateCraftTime} craftingTime={craftTime}></CraftingTimeFilter>
      
    </div>
  );
};

export default Filters;
