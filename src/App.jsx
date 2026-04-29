import MyComponent from './components/MyComponent'
import SujeyCard from './components/SujeyCard'
import PartnerCard from './components/PartnerCard'
import './index.css'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Taller Colaborativo React + Vite</h1>
        <p className="subtitle">Flujo DevOps: GitHub + Netlify + CI/CD</p>
      </header>

      <main className="components-container">
        {/* Tu componente principal */}
        <MyComponent />

        {/* Componente de Sujey */}
        <SujeyCard />

        {/* Componente del compañero Mateo */}
        <PartnerCard />
      </main>

      <footer style={{ marginTop: '50px', color: '#666', fontSize: '0.8rem' }}>
        &copy; {new Date().getFullYear()} - Proyecto taller DevOps
      </footer>
    </div>
  )
}

export default App
