import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Membership_plan from "../src/pages/membership_plan"
import './index.css'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Membership_plan/>


    {/* <App /> */}
  </StrictMode>,
)
