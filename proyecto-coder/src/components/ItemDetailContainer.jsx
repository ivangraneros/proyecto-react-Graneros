import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ItemDetailContainer() {
  const { id } = useParams();
  const [juego, setJuego] = useState(null);

useEffect(() => {
  fetch(`https://www.cheapshark.com/api/1.0/deals?id=${id}`)
    .then(res => res.json())
    .then(data => setJuego(data.gameInfo))
    .catch(err => console.error(err));
}, [id]);

  if (!juego) {
    return <h2>El juego solicitado no existe</h2>;
  }


  return (
  
    <div className="card">
      <h2>Detalle del videojuego</h2>
      <h2>{juego.name}</h2>
      <h3>Precio: ${juego.retailPrice}</h3>
      <img src={juego.thumb} alt={juego.name} />
    </div>
  );
}

export default ItemDetailContainer;


