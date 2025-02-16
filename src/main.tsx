import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './router'
import './assets/styles/Global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
