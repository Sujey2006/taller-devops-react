import React from 'react';

const MyComponent = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '20px',
      padding: '30px',
      width: '320px',
      margin: '20px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
      textAlign: 'center',
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      color: 'white'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '50%',
        width: '120px',
        height: '120px',
        margin: '0 auto 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        border: '4px solid rgba(255,255,255,0.3)',
        overflow: 'hidden'
      }}>
        <img
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel&skinColor=fbe1d3&top=shortHair&hairColor=2c1b18"
          alt="Avatar Daniel"
          style={{ width: '110px', marginTop: '10px' }}
        />
      </div>

      <h2 style={{ color: '#fff', margin: '10px 0', fontSize: '1.6rem', fontWeight: 'bold' }}>Daniel Agudelo</h2>
      <p style={{ color: '#e0e0e0', fontSize: '0.9rem', marginBottom: '15px' }}>Full Stack Developer</p>

      <p style={{ color: '#f0f0f0', fontSize: '0.95rem', lineHeight: '1.5', minHeight: '60px' }}>
        ¡Hola! Soy Daniel. He personalizado este componente para demostrar el flujo de CI/CD en nuestro taller.
      </p>

      <div style={{
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '15px',
        padding: '15px',
        marginTop: '15px',
        textAlign: 'left'
      }}>
        <div style={{ marginBottom: '5px' }}>🚀 <b>Skills:</b></div>
        <div style={{ fontSize: '0.85rem' }}>• Git & GitHub Expert</div>
        <div style={{ fontSize: '0.85rem' }}>• React + Vite Master</div>
      </div>

      <button
        onClick={() => alert('¡Hola! Soy Daniel Agudelo, bienvenido a mi sección.')}
        style={{
          background: '#fff',
          color: '#764ba2',
          border: 'none',
          padding: '12px 25px',
          borderRadius: '25px',
          marginTop: '20px',
          cursor: 'pointer',
          fontWeight: 'bold',
          width: '100%'
        }}
      >
        Contactar
      </button>
    </div>
  );
};

export default MyComponent;
