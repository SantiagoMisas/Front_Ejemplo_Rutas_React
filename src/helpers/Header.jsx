import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <Link>Inicio</Link>
        <Link>Clientes</Link>
        <Link to={'/productos'}>Productos</Link>
      </nav>
    </header>
  )
}

export default Header