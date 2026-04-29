import React from 'react';

const SujeyCard = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
      borderRadius: '25px',
      padding: '30px',
      width: '320px',
      margin: '20px',
      boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
      textAlign: 'center',
      fontFamily: "'Segoe UI', Tahoma, sans-serif",
      border: '1px solid rgba(255,255,255,0.4)'
    }}>
      <div style={{
        backgroundColor: '#fff0f3',
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
          src="https://api.dicebear.com/7.x/not-avataaars/svg?seed=Sujey&face=eyes,mouth&eyes=variant04&mouth=variant02"
          alt="Avatar Sujey"
          style={{ width: '110px' }}
        />
      </div>

      <h2 style={{ color: '#4a4e69', margin: '10px 0', fontSize: '1.6rem', fontWeight: '800' }}>Sujey - Dev</h2>

      <p style={{ color: '#4a4e69', fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '20px' }}>
        "Innovando paso a paso en el mundo DevOps."
      </p>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
        marginBottom: '20px'
      }}>
        <span style={{ fontSize: '1.2rem' }}>💻</span>
        <span style={{ fontSize: '1.2rem' }}>🎨</span>
        <span style={{ fontSize: '1.2rem' }}>✨</span>
      </div>

      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: '15px',
        padding: '12px',
        color: '#22223b',
        fontWeight: 'bold',
        fontSize: '0.9rem'
      }}>
        🌟 Estado: Despliegue Exitoso
      </div>
    </div>
  );
};

export default SujeyCard;
