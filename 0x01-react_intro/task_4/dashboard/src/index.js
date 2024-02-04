import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Notifications from './Notifications';


const root = ReactDOM.createRoot(document.getElementById('root'));
const rootNotif = ReactDOM.createRoot(document.getElementById('root-notifications'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

rootNotif.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
);
