// src/components/Filters.tsx
import React from 'react';

interface LevelFilter {
  level: number;
  setLevel: any;
}

const LevelFilter: React.FC<LevelFilter> = ({level, setLevel}) => {

  return (
    <div className="flex justify-center items-center gap-8 mt-4">

      <div className="flex flex-col items-center">
        <label className="text-lg">Level Requirement (0-100)</label>
        <input
          type="range"
          id="level"
          min="0"
          max="100"
          className="w-64"
          onChange={(e) => setLevel(e.target.value)}
        />
        <p>Level: {level}</p>
      </div>

    </div>
  );
};

export default LevelFilter;
