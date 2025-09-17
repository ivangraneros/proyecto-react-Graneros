import React from 'react'

function Producto({title, normalPrice}) {
  return (
    <div>
      <h2>{title}</h2>
      <h3>Precio: {normalPrice}</h3>
    </div>
  )
}

export default Producto