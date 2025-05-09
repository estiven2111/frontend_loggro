import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import axios from 'axios'
import './index.css'

// axios.defaults.baseURL = "https://backend-loggro-production.up.railway.app"
 axios.defaults.baseURL = "https://backend-loggro.onrender.com"
//  axios.defaults.baseURL = "http://localhost:3200"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
