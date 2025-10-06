import { useState } from 'react';
import Producto from './Producto';
import './style.css'


const categoriasPrecio = {
    BARATOS: [0,20],
    MEDIOS: [21,40],
    CAROS: [41,60]
  }

function ItemList({productos = []}) {
  const [precioSeleccionado, setPrecioSeleccionado] = useState(null);

 const filteredPrecio = precioSeleccionado
    ? productos.filter((p) => p.precio >= precioSeleccionado[0] && p.precio <= precioSeleccionado[1])
    : productos;

  return (
    <div>
      <div>
        <button onClick={() => setPrecioSeleccionado(categoriasPrecio.BARATOS)}>0-20</button>
        <button onClick={() => setPrecioSeleccionado(categoriasPrecio.MEDIOS)}>21-40</button>
        <button onClick={() => setPrecioSeleccionado(categoriasPrecio.CAROS)}>41-60</button>
        <button onClick={() => setPrecioSeleccionado(null)}>Todos</button>

      </div>

         {filteredPrecio.map(prod => (
          <Producto
            key={prod.id}
            id={prod.id}
            nombre={prod.nombre}
            precio={prod.precio}
            rating={prod.rating}
            stock ={prod.stock}
          />
        ))}
    </div>
  )
}

export default ItemList