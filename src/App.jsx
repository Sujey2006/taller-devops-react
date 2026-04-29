import { useState } from 'react'
import MyComponent from './components/MyComponent'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Taller DevOps - Integración React</h1>
      <p>Proyecto colaborativo para el despliegue continuo.</p>
      <hr />
      <div className="components-container">
        {/* Aquí se irán sumando los componentes de los estudiantes */}
        <MyComponent />
      </div>
    </div>
  )
}

export default App
