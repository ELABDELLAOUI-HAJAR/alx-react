import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { Provider } from 'react-redux';
import uiReducer from './reducers/uiReducer';
import { createStore, applyMiddleware } from 'redux';
const thunk = require('redux-thunk').thunk;


const store = createStore(uiReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
