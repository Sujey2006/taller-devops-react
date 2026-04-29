import { useState } from 'react'
import MyComponent from './components/MyComponent'
import SujeyCard from './components/SujeyCard'
import PartnerCard from './components/PartnerCard'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Taller Colaborativo React + Vite</h1>
      <p>Flujo DevOps: GitHub + Netlify + CI/CD</p>
      <hr />
      <div className="components-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        {/* Aquí se irán sumando los componentes de los estudiantes */}
        <MyComponent />
        <SujeyCard />

        {/* Nuevo componente del compañero */}
        <PartnerCard />
      </div>
    </div>
  )
}

export default App
