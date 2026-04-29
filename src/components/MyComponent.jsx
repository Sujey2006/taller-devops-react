import React from 'react';

const MyComponent = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #FF9a9e 0%, #Fecfef 100%)',
      borderRadius: '20px',
      padding: '30px',
      width: '320px',
      margin: '20px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
      textAlign: 'center',
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      transition: 'transform 0.3s ease'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '50%',
        width: '100px',
        height: '100px',
        margin: '0 auto 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
      }}>
        <img
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=TuNombre"
          alt="Avatar Estudiante"
          style={{ width: '85px' }}
        />
      </div>

      <h2 style={{ color: '#d81b60', margin: '10px 0', fontSize: '1.5rem' }}>Tu Nombre - Dev</h2>

      <p style={{ color: '#4a4a4a', fontSize: '0.95rem', lineHeight: '1.5', minHeight: '60px' }}>
        ¡Hola mundo! He configurado este componente para el taller de DevOps. ¡Integración continua activada!
      </p>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        marginTop: '15px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
          ✅ <span>React + Vite</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
          ✅ <span>CI/CD con Netlify</span>
        </div>
      </div>

      <button
        onClick={() => alert('¡Componente desplegado con éxito! 🚀')}
        style={{
          background: '#d81b60',
          color: 'white',
          border: 'none',
          padding: '12px 25px',
          borderRadius: '25px',
          marginTop: '20px',
          cursor: 'pointer',
          fontWeight: 'bold',
          width: '100%',
          boxShadow: '0 4px 15px rgba(216, 27, 96, 0.3)'
        }}
      >
        ¡Saludar!
      </button>
    </div>
  );
};

export default MyComponent;
