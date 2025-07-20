import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import './index.css'
import App from './App.jsx'


//import des styles css globaux
import './css/bootstrap.min.css'
import './css/elegant-icons.css'
import './css/font-awesome.min.css'
import './css/jquery-ui.min.css'
import './css/magnific-popup.css'
import './css/nice-select.css'
import './css/owl.carousel.min.css'
import './css/slicknav.min.css'
import './css/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
