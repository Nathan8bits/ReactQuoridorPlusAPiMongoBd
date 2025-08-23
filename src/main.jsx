import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Jogo from './pages/Jogo'
import Tabuleiro from './pages/Tabuleiro'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tabuleiro />
  </StrictMode>,
)
