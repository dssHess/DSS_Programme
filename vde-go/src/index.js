import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Wenn Sie mit der Leistungsmessung in Ihrer App beginnen möchten, 
// übergeben Sie eine Funktion zum Protokollieren von Ergebnissen 
// (z. B. reportWebVitals(console.log)) oder senden Sie sie an einen Analyseendpunkt. 
// Erfahren Sie mehr: https://bit.ly/CRA-vitals

reportWebVitals();
