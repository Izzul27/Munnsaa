import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/navbar.jsx'

import "remixicon/fonts/remixicon.css"
import Footer from './components/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <App />
      <Footer />
    </div>
  </StrictMode>,
)
