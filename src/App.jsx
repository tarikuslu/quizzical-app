import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Start from './screens/Start'
import Questions from './screens/Questions';
function App() {
  const [startGame, setStartGame] = useState(false);

  function starter() {
    setStartGame(true);
  }

  return (
   <div>
    {
      startGame ?
      (<Questions/> ) 
      :
      (<Start startGame={starter}/>)
    }
   </div>
  )
}

export default App
