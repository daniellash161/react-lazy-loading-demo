import React from 'react';

const HeavyComponent: React.FC = () => {
  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #6369e4', 
      borderRadius: '12px',
      marginTop: '20px',
      backgroundColor: '#f0f0f0',
      color: '#333',
      textAlign: 'left' 
    }}>
      <h2>Hello! I'm a Lazy-Loaded Component 🚀</h2>
      <p>My code was downloaded to the browser only the moment you clicked the button.</p>
    </div>
  );
};

export default HeavyComponent;