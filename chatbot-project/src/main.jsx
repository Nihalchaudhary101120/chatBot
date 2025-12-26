import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>  
    <App />
  </StrictMode>, //give us some additional check and warning while developing App
)
