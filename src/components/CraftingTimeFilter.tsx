import React, { MouseEventHandler } from "react";

interface CraftingTimeFilterProps {
  calculateCraftingTime: MouseEventHandler<HTMLButtonElement>;
  craftingTime: number;
}


const CraftingTimeFilter: React.FC<CraftingTimeFilterProps> = ({calculateCraftingTime, craftingTime}) => {

  return(
    <div className="flex flex-col items-center bg-black bg-opacity-80 border-2 rounded-lg w-[300px] h-[90px]">
    <button
      type="submit"
      className="text-white end-2.5 bottom-2.5 mt-1 bg-orange-700 hover:bg-orange-800 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
      onClick={calculateCraftingTime}
    >
      CALCULATE CRAFTING TIME
    </button>
    <div className='mt-3 text-2xl'>CRAFTING TIME: {craftingTime} mins</div>
  </div>
  )
}

export default CraftingTimeFilter;