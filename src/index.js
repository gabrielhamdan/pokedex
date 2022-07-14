import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {console.log("%c A wild user appears!", 'font-weight: bold; font-size: 50px; color: #fecc04; text-shadow: -1px -1px 0 #396ab9, 1px -1px 0 #396ab9, -1px 1px 0 #396ab9, 1px 1px 0 #396ab9')}
  </React.StrictMode>
);