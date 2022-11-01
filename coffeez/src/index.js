//Importeer react
import React from 'react';
//Importeer reactDOM
import ReactDOM from 'react-dom/client';
//Importeer app component
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

