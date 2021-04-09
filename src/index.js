import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';

// Index file to render react in root div
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);