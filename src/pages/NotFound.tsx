import React from 'react'
//REACT ROUTER DOM
import { Link } from 'react-router-dom'
//CSS
const NotFound = () => {
  return (
    <div>
      <div>
        <h1>PAGINA NÃO ENCONTRADA</h1>
        <button><Link to='/Home'>Voltar para Home</Link></button>
      </div>
    </div>
  )
}

export default NotFound