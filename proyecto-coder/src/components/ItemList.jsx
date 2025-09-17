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

  const filteredPrecio = precioSeleccionado && productos.length > 0
    ? productos.filter((producto) => {
        const precio = parseFloat(producto.normalPrice);
        return precio >= precioSeleccionado[0] && precio <= precioSeleccionado[1];
      })
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
            key={prod.dealID}
            dealID={prod.dealID}
            title={prod.title}
            normalPrice={prod.normalPrice}
            dealRating={prod.dealRating}
          />
        ))}
    </div>
  )
}

export default ItemList