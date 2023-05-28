import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'

const baseURL = import.meta.env.BASE_URL; // configured on vite.config.ts

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename={baseURL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
