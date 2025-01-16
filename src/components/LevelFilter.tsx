// src/components/Filters.tsx
import React from 'react';

interface LevelFilter {
  level: number;
  setLevel: any;
}

const LevelFilter: React.FC<LevelFilter> = ({level, setLevel}) => {

  return (
    <div className="flex flex-col items-center bg-black bg-opacity-80 border-2 rounded-lg w-[300px] h-[90px]">

      <div className="flex flex-col items-center">
        <label className="text-lg">Level Requirement (0-100)</label>
        <input
          type="range"
          id="level"
          min="1"
          max="100"
          className="w-64"
          step={2}
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        />
        <p className='text-3xl'>Level: {level}</p>
      </div>

    </div>
  );
};

export default LevelFilter;
