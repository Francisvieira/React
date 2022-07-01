import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootswatch/dist/cerulean/bootstrap.min.css'

//instalei o bootswatch com yarn add booteswatch
// e importei o bootswatch, vale lembrar que a pasta esta no node-modules e a pasta booteswatch

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

