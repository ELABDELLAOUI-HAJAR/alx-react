import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import uiReducer, { initial_state } from './reducers/uiReducer';
import { thunk } from 'redux-thunk';

const store = createStore(uiReducer, initial_state, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
