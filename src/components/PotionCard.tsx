// src/components/Header.js
import React from 'react';
import { Potion } from '../types/Potion';

interface PotionCard {
  potion: Potion,
}

const PotionCard: React.FC<PotionCard> = ({potion}) => {
  return (
    <div>
      <p>THIS IS THE POTION CARD {potion.name}</p>
    </div>
  );
};

export default PotionCard;