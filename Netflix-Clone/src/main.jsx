import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Importing the root component of the application (App), which will be the main component rendered inside the root element.
import App from './App.jsx'
//render the App component
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
