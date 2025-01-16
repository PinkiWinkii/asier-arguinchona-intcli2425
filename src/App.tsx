import './App.css'
import { potions } from './data/data'
import PotionList from './components/PotionList'
import { useEffect, useState } from 'react'
import { filterByLevelRequirement, getPotionByRarity, findPotionByEffect, calculateCraftingTime } from './helpers/potionHelpers';
import Filters from './components/Filters';
import NoPotionsText from './components/NoPotionsText';

function App() {

  const [showingPotions, setShowingPotions] = useState(potions);

  const [level, setLevel] = useState(50);
  const [rarity, setRarity] = useState('all');
  const [effect, setEffect] = useState('');
  const [craftTime, setCraftTime] = useState(0);

  useEffect(() => {
    setCraftTime(0);
    filterPotions();
  }, [level, rarity, effect]);

  // Función para filtrar las pociones
  const filterPotions = async () => {

    console.log('HA ENTRADO A FILTRAR POTIONS');

    let filteredPotions = potions;

    // Filtrar por nivel
    if (level > 0) {
      filteredPotions = filterByLevelRequirement(filteredPotions, level);
    }

    // Filtrar por rareza
    if (rarity !== 'all') {
      filteredPotions = getPotionByRarity(filteredPotions, rarity);
    }

    // Filtrar por efecto
    if (effect !== '') {
      filteredPotions = findPotionByEffect(filteredPotions, effect);
    }

    setShowingPotions(filteredPotions);
  };

  const handleEffectChange = async (newEffect: string) => {
    setEffect(newEffect);
    await filterPotions();
  }

  const handleCraftingTime = () => {
    const craftTime = calculateCraftingTime(showingPotions);
    setCraftTime(craftTime);
  }

  return (
    <>
      <div className='flex flex-col h-[100%] w-[100%]'>
        <p className='text-4xl text-center mb-8'>EPIC POTIONS LIST</p>
        <div className='flex bg-black bg-opacity-80 w-[100%] h-[620px]'>
          {showingPotions.length > 0 ?
            <PotionList potions={showingPotions} /> :
            <NoPotionsText/>}
        </div>
        <Filters
          onEffectChange={handleEffectChange}
          setLevel={setLevel}
          setRarity={setRarity}
          level={level}
          calculateCraftTime={handleCraftingTime}
          craftTime={craftTime}
        >

        </Filters>
      </div>
    </>
  )
}

export default App
