import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Upload from './components/UploadMenu.jsx'
import Form from './components/Form.jsx'
import UploadFile from './components/UploadFile.jsx'
import { ThemeProvider } from './contexts/theme.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode >
   
    <App />
    {/* <Form></Form> */}
    {/* <Upload></Upload> */}
   
  
  </StrictMode>,
)
