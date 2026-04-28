import { DeveloperCard } from './components/DeveloperCard'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Taller Colaborativo React + Vite</h1>
      <p className="read-the-docs">
        Flujo DevOps: GitHub + Netlify + CI/CD
      </p>

      {/* Tu componente individual */}
      <DeveloperCard />

    </div>
  )
}

export default App
