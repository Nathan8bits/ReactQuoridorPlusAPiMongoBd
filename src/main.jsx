import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Jogo from './pages/Jogo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Jogo />
  </StrictMode>,
)
