import React from 'react';

const SujeyCard = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
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
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sujey"
          alt="Avatar"
          style={{ width: '80px' }}
        />
      </div>

      <h2 style={{ color: '#5e60ce', margin: '10px 0' }}>Sujey - Dev</h2>

      <p style={{ color: '#4a4e69', fontSize: '0.9rem', lineHeight: '1.4' }}>
        ¡Hola! Este es mi espacio creativo. Estoy aprendiendo a integrar React con flujos DevOps.
      </p>

      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: '12px',
        padding: '10px',
        marginTop: '20px',
        border: '1px solid white'
      }}>
        <span style={{ color: '#5e60ce', fontWeight: 'bold' }}>✨ Estado: Despliegue Exitoso</span>
      </div>
    </div>
  );
};

export default SujeyCard;
