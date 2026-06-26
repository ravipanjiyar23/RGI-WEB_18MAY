import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>lets understand the props in react </h1>
     <Card name="card1" btntext = "read more" />
      <Card name="card2" btntext = "Learn more"  />
      <Card name="card3" btntext = "explore more"  />




    </>
  )
}

export default App
