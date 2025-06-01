/**
 * Application Entry Point
 * 
 * This is the main entry point for the Word Visualizer application.
 * It sets up React with StrictMode for additional development checks
 * and mounts the main App component to the DOM.
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Create and render the root React component with StrictMode enabled
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 