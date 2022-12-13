import React, { useEffect } from 'react'
import axios from 'axios'
import Header from '../helpers/Header'
import {useState} from 'react'
const apiProductos = 'http://localhost:3100/productos'

const ListadoProductos = () => {

  const [productos, setProductos] = useState([])

  useEffect(()=> {
    mostrarProductos()
  }, []);

  async function mostrarProductos(){
    const datos = await axios.get(apiProductos)
    setProductos(datos.data)
    console.log(datos.data)
  }

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
        <tbody>
          {
            productos.forEach((producto)=> {
              <tr key={producto.id}>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </section>
  )
}

export default ListadoProductos