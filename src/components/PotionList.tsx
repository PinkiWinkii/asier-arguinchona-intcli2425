// src/components/Header.js
import React from 'react';
import { Potion } from '../types/Potion';
import PotionCard from './PotionCard';

interface PotionList {
  potions: Potion[],
}

const PotionList: React.FC<PotionList> = ({potions}) => {
  return (
    <div className='justify-center bg-slate-500'>
      <p>THIS IS THE POTION LIST</p>
      <PotionCard potion={potions[0]}></PotionCard>
    </div>
  );
};

export default PotionList;