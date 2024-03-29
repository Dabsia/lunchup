import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/productstore'
import { persistor } from './redux/productstore';
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {AuthContextProvider} from './store/auth-context'
import {PersistGate} from 'redux-persist/integration/react'


ReactDOM.render(
  <Provider store = {store}>
    <AuthContextProvider>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </AuthContextProvider>
  </Provider>
    
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

