import React from 'react';

// רכיב פונקציונלי ב-TypeScript
const HeavyComponent: React.FC = () => {
  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #646cff', 
      borderRadius: '12px',
      marginTop: '20px',
      backgroundColor: '#f0f0f0',
      color: '#333'
    }}>
      <h2>שלום! אני רכיב שנטען בטעינה עצלה 🚀</h2>
      <p>הקוד שלי הורד לדפדפן רק ברגע שלחצת על הכפתור.</p>
    </div>
  );
};

// חובה להשתמש ב-default export כדי ש-React.lazy יוכל לזהות את הרכיב [cite: 101]
export default HeavyComponent;