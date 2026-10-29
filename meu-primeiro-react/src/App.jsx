import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import CartaoPerfil from './Componente'

function App() {
  return(
    <main className="pagina">
      <h1 className='titulo-pagina'>Sistema de Usuários</h1>
      <CartaoPerfil
      nome = "Gabriel Gadelha"
      cargo = "Professor Universitário"
      fotoUrl = "https://github.com/gabrielgadelha.png"
      />
    </main>
  )
}

export default App
