import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "primereact/resources/themes/lara-dark-teal/theme.css";
import "ol/ol.css";
import "primeflex/primeflex.css";
import { PrimeReactProvider } from 'primereact/api';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </StrictMode>,
)
