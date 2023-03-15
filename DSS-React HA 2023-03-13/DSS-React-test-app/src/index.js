import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ChakraProvider>
        <App />
    </ChakraProvider>
  </React.StrictMode>
);
// Wenn Sie mit der Leistungsmessung in Ihrer App beginnen möchten, 
// übergeben Sie eine Funktion um Ergebnisse zu protokollieren (zum Beispiel: reportWebVitals(console.log))
// oder um die Ergebnise an einen Analyseendpunkt senden. Erfahren Sie mehr: https://bit.ly/CRA-vitals

reportWebVitals();
