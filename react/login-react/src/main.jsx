/*Arquivo que exibe a tela de login*/
import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Login-screen'
import '../src/css/mobile.css'
import '../src/css/desktop.css'
//O React teve um conflito com nome pois estava login e eu decidi renomear para Login mas o erro persisitiu.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login/>
  </React.StrictMode>,
)
