import React from 'react';

const PartnerCard = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
      borderRadius: '20px',
      padding: '30px',
      width: '320px',
      margin: '20px auto',
      boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
      textAlign: 'center',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
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
        overflow: 'hidden'
      }}>
        <img
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mateo"
          alt="Avatar Compañero"
          style={{ width: '80px' }}
        />
      </div>

      <h2 style={{ color: '#2d6a4f', margin: '10px 0' }}>Mateo - Dev</h2>

      <p style={{ color: '#1b4332', fontSize: '0.9rem', lineHeight: '1.4' }}>
        ¡Qué onda! Me sumo al equipo. Estoy colaborando en esta rama para probar que el CI/CD detecta varios cambios.
      </p>

      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: '12px',
        padding: '10px',
        marginTop: '20px',
        border: '1px solid white'
      }}>
        <span style={{ color: '#2d6a4f', fontWeight: 'bold' }}>🚀 Aporte de Compañero</span>
      </div>
    </div>
  );
};

export default PartnerCard;
