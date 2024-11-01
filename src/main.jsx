import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.js'
import { BookProvider } from './context/BookContext.js'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BookProvider>
        <App />
      </BookProvider>
    </ThemeProvider>
  </StrictMode>
);
