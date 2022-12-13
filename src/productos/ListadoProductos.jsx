import React from 'react'
import Header from '../helpers/Header'

const ListadoProductos = () => {
  return (
    <section>
      <Header />
      <table border={1}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Nombre</td>
            <td>Descripcion</td>
          </tr>
        </thead>
      </table>
    </section>
  )
}

export default ListadoProductos