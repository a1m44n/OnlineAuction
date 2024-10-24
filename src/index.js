import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Ensure this imports Tailwind's styles
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // This is the div id from public/index.html
);
