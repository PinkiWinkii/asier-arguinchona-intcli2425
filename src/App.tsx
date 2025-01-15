import './App.css'
import { potions } from './data/data'
import PotionList from './components/PotionList'
import { useEffect, useState } from 'react'
import { filterByLevelRequirement, getPotionByRarity, findPotionByEffect, calculateCraftingTime } from './helpers/potionHelpers';
import Filters from './components/Filters';
import { Potion } from './types/Potion';

function App() {

  const [showingPotions, setShowingPotions] = useState(potions);

  const [level, setLevel] = useState(0);
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

    console.log(level);
    console.log(rarity);
    console.log(effect);

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
      <p className='text-2xl text-center'>THIS IS THE POTIONS LIST</p>
      <PotionList potions={showingPotions}></PotionList>
      <Filters
        onEffectChange={handleEffectChange}
        setLevel={setLevel}
        setRarity={setRarity}
        level={level}
        calculateCraftTime={handleCraftingTime}
        craftTime={craftTime}
      >

      </Filters>
    </>
  )
}

export default App
