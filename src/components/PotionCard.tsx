// src/components/Header.js
import React, { useState } from 'react';
import { Potion } from '../types/Potion';
import Modal from './Modal';

interface PotionCard {
  potion: Potion,
}

const PotionCard: React.FC<PotionCard> = ({ potion }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex w-[18.5%] h-[250px] border-2 border-orange-400 rounded-lg bg-black mr-2 ml-2">
      {/* Columna izquierda: Imagen */}
      <div className="w-1/2 flex justify-center">
        <img
          src={potion.image}
          alt={potion.name}
          className="w-[95%] h-[96%] mt-1 rounded-lg border-2 border-white"
        />
      </div>

      {/* Columna derecha: Datos */}
      <div className="w-1/2 flex flex-col justify-between text-center">
        {/* Parte superior (40% de la altura) */}
        <div className="h-[40%] flex justify-center items-center flex-col">
          <p>{potion.name}</p>
          <p className={`capitalize ${potion.rarity === 'legendary' ? 'text-orange-500' : potion.rarity === 'epic' ? 'text-red-500' : 'text-purple-500'}`}>Tier: {potion.rarity}</p>
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
        <div className="flex justify-center mb-2">
          <button
            className="px-2 py-1 bg-orange-500 text-white rounded-lg hover:bg-orange-400"
            onClick={openModal}>
            View details
          </button>
        </div>



      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} potion={potion}>

      </Modal>
    </div>
  );
};

export default PotionCard;
