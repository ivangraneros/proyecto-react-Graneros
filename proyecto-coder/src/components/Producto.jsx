import  './style.css'
import { Link } from 'react-router-dom'

function Producto({id,nombre, precio, rating,stock}) {
  
  return (
    <Link to = {`/productos/${id}`} >
      <div className='card'>
        <h2>{nombre}</h2>
        <h3>Precio: {precio}</h3>
        <p>Valoracion: {rating}</p>
        <p>Stock disponible: {stock}</p>
      </div>
    </Link>
  )
}

export default Producto;