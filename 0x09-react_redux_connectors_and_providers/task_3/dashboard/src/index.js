import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import uiReducer, { initial_state } from './reducers/uiReducer';
import { thunk } from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(uiReducer, initial_state, composeEnhancers(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
