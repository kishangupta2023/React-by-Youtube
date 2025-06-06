import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   // we can use let or const and for setcounter we can user any naming convention
  let [counter, setCounter] = useState(0)
  
  // let counter = 0 

  const addValue = () => {
    // counter = counter + 1
    if(counter < 20){
    setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Counter by kishan </h1>
      <h2>Counter value : {counter}</h2>
      <button 
      onClick={addValue}>Add Value {counter}</button>
      <br/>
      <button
      onClick={removeValue}>Remove Value {counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
