import Producto from './Producto'

function Productos({videojuegos}) {
  
  return (
    <div>
      {videojuegos.map((juego) => (
        <Producto
          key={juego.id}
          id={juego.id}
          nombre={juego.nombre}
          precio={juego.precio}
          rating={juego.rating}
          stock ={juego.stock}
        />
      ))}
    </div>
  );
}

export default Productos