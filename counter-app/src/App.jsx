import { useState } from 'react'
import './App.css'
import DecreaseButton from './components/DecreaseButton'
import IncreaseButton from './components/IncreaseButton'
import ResetButton from './components/ResetButton'

function App() {
  const [count, setCount] = useState(0)

  const decreaseButtonHandler = () => {
    setCount( count - 1 )
  }

  const increaseButtonHandler = () => {
    setCount( count + 1 )
  }

  const resetButtonHandler = () => {
    setCount(0)
  }

  return (
    <>
      <h1>Lecture 5: Decrease Button</h1>
      <p>Value: {count}</p>
      <DecreaseButton decrease={decreaseButtonHandler}/>
      <IncreaseButton increase={increaseButtonHandler}/>
      <ResetButton reset={resetButtonHandler}/>
    </>
  )
}

export default App
