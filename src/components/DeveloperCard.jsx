import React from 'react';

export const DeveloperCard = () => {
  return (
    <div style={{
      border: '4px solid #4caf50', // Cambio: Borde verde y más grueso
      borderRadius: '15px',
      padding: '20px',
      backgroundColor: '#242424',
      color: 'white',
      maxWidth: '300px',
      margin: '20px auto',
      boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
      textAlign: 'center'
    }}>
      <img
        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
        alt="Avatar"
        style={{ width: '100px', borderRadius: '50%' }}
      />
      <h2 style={{ color: '#4caf50' }}>Mi Aporte DevOps Actualizado</h2>
      <p>¡Hola! Este es mi componente funcional con cambios detectados para el Pull Request.</p>
      <div style={{ backgroundColor: '#1a1a1a', padding: '10px', borderRadius: '8px' }}>
        <strong>Estado:</strong> Listo para el Merge
      </div>
    </div>
  );
};
