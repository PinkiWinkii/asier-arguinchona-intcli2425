// src/components/Header.js
import React from 'react';
import { Potion } from '../types/Potion';
import PotionCard from './PotionCard';

interface PotionList {
  potions: Potion[],
}

const PotionList: React.FC<PotionList> = ({potions}) => {

  const potionRows = [];
  for (let i = 0; i < potions.length; i += 5) {
    potionRows.push(potions.slice(i, i + 5));
  }

 return (
    <div className="flex flex-col bg-slate-500 w-[100%]">
      <p>THIS IS THE POTION LIST</p>
      {potionRows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-row mb-4">
          {/* Mapear las pociones dentro de cada fila */}
          {row.map((potion, index) => (
            <PotionCard key={index} potion={potion} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default PotionList;