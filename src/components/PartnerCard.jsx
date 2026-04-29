import React from 'react';

const PartnerCard = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
      borderRadius: '25px',
      padding: '30px',
      width: '320px',
      margin: '20px',
      boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
      textAlign: 'center',
      fontFamily: "'Segoe UI', Roboto, sans-serif",
      border: '1px solid rgba(255,255,255,0.4)'
    }}>
      <div style={{
        backgroundColor: '#f0f4f8',
        borderRadius: '50%',
        width: '125px',
        height: '125px',
        margin: '0 auto 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        padding: '5px'
      }}>
        <img
          src="https://api.dicebear.com/7.x/adventurer/svg?seed=Mateo&hair=short01&eyes=variant01"
          alt="Avatar Mateo"
          style={{ width: '110px' }}
        />
      </div>

      <h2 style={{ color: '#2c3e50', margin: '10px 0', fontSize: '1.6rem', fontWeight: 'bold' }}>Mateo - Dev</h2>

      <p style={{ color: '#34495e', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '20px' }}>
        "Apasionado por la automatización y el código limpio. ¡Un gusto trabajar en este equipo!"
      </p>

      <div style={{
        background: 'rgba(255,255,255,0.5)',
        borderRadius: '15px',
        padding: '12px',
        color: '#2c3e50',
        fontWeight: 'bold',
        fontSize: '0.9rem'
      }}>
        🚀 Aporte: Integración de cambios
      </div>
    </div>
  );
};

export default PartnerCard;
