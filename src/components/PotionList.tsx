// src/components/Header.js
import React from 'react';
import { Potion } from '../types/Potion';
import PotionCard from './PotionCard';

interface PotionList {
  potions: Potion[],
}

const PotionList: React.FC<PotionList> = ({potions}) => {
  const potionRows = [];
  // Divide las pociones en filas de 5
  for (let i = 0; i < potions.length; i += 5) {
    potionRows.push(potions.slice(i, i + 5));
  }

  return (
    <div className="flex flex-col bg-slate-500 w-[100%]">

      {potionRows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-col">
          {/* Añadir separador horizontal antes de la fila, excepto en la primera */}
          {rowIndex > 0 && <div className="border-t border-gray-400 mb-4"></div>}

          {/* Mapeo de las pociones dentro de cada fila */}
          <div className="flex flex-row mb-4">
            {row.map((potion, index) => (
              <React.Fragment key={index}>
                <PotionCard potion={potion} />
                
                {/* Agregar separador vertical después de cada poción que no sea la última */}
                {index < row.length - 1 && <div className="border-r border-gray-400 h-64"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PotionList;
