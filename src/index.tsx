import React from 'react';
import ReactDOM from 'react-dom';
import "@mui/material";
import './index.css';
import App from './App';
import store, {persistor} from './app/store';

import { Provider } from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

