import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PotionCard from './components/PotionCard'
import { potions } from './data/data'
import PotionList from './components/PotionList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className="read-the-docs bg-white">
        Click on the Vite and React logos to learn more
      </p>
      <PotionList potions={potions}></PotionList>
    </>
  )
}

export default App
