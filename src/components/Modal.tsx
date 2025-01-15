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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-black bg-opacity-80 rounded-lg w-[75%] h-[60%] p-4">
        <div>{potion.name}</div>
        <button
          className="absolute top-5 items-center justify-center text-white font-bold text-xl"
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
