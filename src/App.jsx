import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import WeatherCard from './components/WeatherCard'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Header></Header>
      <Content></Content>
      {/* <WeatherCard></WeatherCard> */}
    </div>
  )
}

export default App
