import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
// import App from './App';
import Hello from './components/demo/Hello';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const propTemp = {name: 'fame', firstName: 'l', lastName:'a'}
root.render(
  <React.StrictMode>
    <Hello  {...propTemp}/>
  </React.StrictMode>
);
