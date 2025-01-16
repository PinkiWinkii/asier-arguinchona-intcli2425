// src/components/Modal.tsx
import React from 'react';
import { Potion } from '../types/Potion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  potion: Potion
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, potion }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 bottom-10">
      <button
          className="px-4 absolute bottom-1 border-2 border-white items-center justify-center text-white font-bold text-[50px] bg-black bg-opacity-90"
          onClick={onClose}
        >
          Close Modal
        </button>
      <div className="bg-black bg-opacity-90 border-2 rounded-lg w-[65%] h-[80%] p-2">
        <div className='text-center text-4xl mb-2 underline'>{potion.name}</div>
        <div className='flex flex-row h-[30%]'>
          <div className='flex-col text-4xl mt-2 text-center w-1/2 text-red-400'>PRIMARY EFFECTS
            <div className='flex-col'>
              <p className='text-xl text-white capitalize'>{potion.effects.primary.attribute}</p>
              <p className='text-xl text-white'>Duration: {potion.effects.primary.duration.amount} {potion.effects.primary.duration.unit}</p>
            </div>
          </div>
          <div className="border-r border-gray-400 h-[95%] mr-2 ml-2"></div>
          <div className='text-4xl mt-2 text-center w-1/2 text-blue-500'>SECONDARY EFFECTS
            <div className='flex-col'>
              {potion.effects.secondary.map((effect, index) => (
                <div key={index} className="flex flex-row text-center items-center justify-center">
                  <p className='text-xl text-white no-underline capitalize'>{index + 1}.- {effect.attribute} - Duration: {effect.duration.amount} {effect.duration.unit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-400 mb-4"></div>

        <div className='flex flex-row h-[30%] mb-2'>
          <div className='text-4xl text-center w-1/2 text-purple-500'>INGREDIENTS
            <div className='flex-col'>
              {potion.ingredients.map((ingredient, index) => (
                <div key={index} className="flex flex-col">
                  <p className='text-xl text-white'>{index + 1}.- {ingredient.name}</p>
                  <p className='text-xl text-white'>Location: {ingredient.origin.location} - Region: {ingredient.origin.region}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-r border-gray-400 h-[95%] mr-2 ml-2"></div>

          <div className='text-4xl mt-2 text-center w-1/2 text-orange-400'>RESTRICTIONS
            <div className='text-xl text-white'>Required Level: {potion.usage.restrictions.levelRequirement}</div>
            <div className='flex-col mt-2'>
              {potion.usage.restrictions.classRestrictions.map((classrestriction, index) => (
                <div key={index} className="flex flex-col">
                  <p className='text-xl text-white'>{classrestriction}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-400 mb-4"></div>

        <div className='flex flex-row h-[28%]'>
          <div className='flex-col text-4xl mt-2 text-center w-1/2 text-green-600'>CREATION TIME
            <div className='flex-col'>
              <p className='text-[50px] text-white justify-center items-center text-center mt-12'>{potion.crafting.time.amount} {potion.crafting.time.unit}</p>
            </div>
          </div>
          <div className="border-r border-gray-400 h-[95%] mr-2 ml-2"></div>
          <div className='text-4xl mt-2 text-center w-1/2 text-yellow-500'>INSTRUCTIONS
            <div className='flex-col mt-2'>
              {potion.usage.instructions.map((instruction, index) => (
                <div key={index} className="flex flex-col">
                  <p className='text-xl text-white'>{index + 1}.- {instruction}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Modal;
