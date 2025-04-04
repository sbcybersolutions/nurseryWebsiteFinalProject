import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
import {BrowserRouter} from 'react"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/nurseryWebsiteFinalProject"
      <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter> 
  </React.StrictMode>,
);
