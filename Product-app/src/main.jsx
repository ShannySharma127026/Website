
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import App from './App.jsx'
import MyFirstUsestate from './Comp/MyFirstUsestate.jsx'
import Navbar from './Comp/Navbar.jsx'
import Card from './Comp/Card.jsx'
import MainLoader from './Comp/MainLoading.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  
  </StrictMode>,
)
