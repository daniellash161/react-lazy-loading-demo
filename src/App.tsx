import React, { useState, Suspense, lazy } from 'react'; // ייבוא הכלים הדרושים [cite: 179]
import './App.css';

// 1. הגדרת הטעינה העצלה באמצעות React.lazy [cite: 146, 181]
// הפונקציה import() אומרת ל-Bundler לפצל את הקוד לקובץ נפרד [cite: 196]
const HeavyComponent = lazy(() => import('./components/HeavyComponent'));

const App: React.FC = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <h1> Lazy Loading & Code Splitting</h1>
      
      <div className="card">
        {/* לחיצה על הכפתור תשנה את ה-State ותפעיל את הטעינה */}
        <button onClick={() => setShow(true)}>
         Load a heavy component (Dynamic Import)
        </button>
      </div>

      {/* 2. עטיפה ב-Suspense לניהול זמן ההמתנה [cite: 161, 197] */}
      {/* ה-fallback מגדיר מה המשתמש יראה בזמן שהקוד יורד מהשרת [cite: 162] */}
      {show && (
        <Suspense fallback={<div style={{ marginTop: '20px', fontWeight: 'bold' }}>טוען קוד מהשרת...</div>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
};

export default App;