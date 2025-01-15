import './App.css'
import { potions } from './data/data'
import PotionList from './components/PotionList'

function App() {

  return (
    <>
      <PotionList potions={potions}></PotionList>
    </>
  )
}

export default App
