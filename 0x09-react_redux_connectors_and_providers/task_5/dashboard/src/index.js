import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
