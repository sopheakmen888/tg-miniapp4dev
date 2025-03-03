import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Contact from "../src/pages/contact"
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Contact/>

  </StrictMode>,
)
