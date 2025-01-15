// src/components/Header.js
import React from 'react';
import { Potion } from '../types/Potion';

interface PotionCard {
  potion: Potion,
}

const PotionCard: React.FC<PotionCard> = ({potion}) => {
  return (
    <div className="flex w-[100%] border-2 border-yellow-500 rounded-lg bg-black">
      {/* Columna izquierda: Imagen */}
      <div className="w-1/2 flex justify-center">
        <img 
          src={potion.image} 
          alt={potion.name} 
          className="max-w-full h-auto rounded-lg border-2 border-white" 
        />
      </div>

      {/* Columna derecha: Datos */}
      <div className="w-1/2 flex flex-col justify-between text-center">
        {/* Parte superior (40% de la altura) */}
        <div className="h-[40%] flex justify-center items-center flex-col">
          <p>{potion.name}</p>
          <p>{potion.rarity}</p>
        </div>

        {/* Separador entre la parte superior e inferior */}
        <div className="border-t-2 border-gray-300 my-2"></div>

        {/* Parte inferior (40% de la altura) */}
        <div className="h-[40%] flex justify-center items-center flex-col">
        <p>Boss: {potion.meta.availability.drop_rate.boss}</p>
        <p>Drop rate: {potion.meta.availability.drop_rate.chance}</p>

        </div>

        {/* Separador inferior */}
        <div className="border-t-2 border-gray-300 my-2"></div>

        {/* Botón */}
        <div className="flex justify-center mt-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            View details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PotionCard;
