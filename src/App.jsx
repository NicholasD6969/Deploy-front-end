import { useState } from 'react'
import './App.css'
import InfoJogador from './components/InfoJogador'
import './components/InfoJogador/style.css'
import logo from './assets/image/logo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={logo} alt="logo do Bahia" className='BBMP'/>
      <InfoJogador />
    </>
  )
}

export default App