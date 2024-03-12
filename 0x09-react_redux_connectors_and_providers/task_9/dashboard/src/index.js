import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
