import React from 'react';

const MyComponent = () => {
  return (
    <div style={{
      border: '2px solid #4CAF50',
      borderRadius: '8px',
      padding: '20px',
      margin: '10px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#4CAF50' }}>Componente de [Tu Nombre]</h2>
      <p>Este es mi aporte individual para el taller de DevOps.</p>
      <ul>
        <li>✅ React con Vite</li>
        <li>✅ Git & GitHub</li>
        <li>✅ CI/CD con Netlify</li>
      </ul>
      <button onClick={() => alert('¡Hola desde mi componente!')} style={{
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Saludar
      </button>
    </div>
  );
};

export default MyComponent;
