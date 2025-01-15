import './App.css'
import { potions } from './data/data'
import PotionList from './components/PotionList'
import { useState } from 'react'

function App() {

  const[showingPotions, setShowingPotions] = useState(potions);

  return (
    <>
      <p className='text-2xl text-center'>THIS IS THE POTIONS LIST</p>
      <PotionList potions={showingPotions}></PotionList>
    </>
  )
}

export default App
