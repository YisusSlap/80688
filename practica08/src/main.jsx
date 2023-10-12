import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import MiFieldSet from './MiFieldSet.jsx'
//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <MiFieldSet titulo="Datos Personales" txt1="Nombre" txt2="Password"/>
  </React.StrictMode>,
)
