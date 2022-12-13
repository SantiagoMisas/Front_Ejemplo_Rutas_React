import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ListadoProductos from './productos/ListadoProductos'
import Home from './helpers/Home'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/productos',
    element: <ListadoProductos />,
    errorElement: <h1>Error 404</h1>
  }
])

function App() {
  return (
    <section className="bg-red-700">
      <RouterProvider router = {routes} />
    </section>
  )
}

export default App
