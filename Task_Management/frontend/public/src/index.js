// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Existing global CSS (if any)
import './App.css';   // New global CSS file
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
