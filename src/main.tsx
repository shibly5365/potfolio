import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
        <Analytics />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
