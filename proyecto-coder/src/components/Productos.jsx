import Producto from './Producto'

function Productos({videojuegos}) {
  
  return (
    <div>
      {videojuegos.map(juego => (
        <Producto key={juego.dealID} {...juego} />
      ))}
    </div>
  );
}

export default Productos