import  './style.css'
import { Link } from 'react-router-dom'

function Producto({dealID, title, normalPrice,dealRating}) {
  return (
    <Link to = {`/productos/${dealID}`} >
      <div className='card'>
        <h2>{title}</h2>
        <h3>Precio: {normalPrice}</h3>
        <p>Valoracion: {dealRating}</p>
      </div>
    </Link>
  )
}

export default Producto