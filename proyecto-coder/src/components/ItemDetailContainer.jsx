import { useParams } from "react-router-dom";
import { useState, useEffect, useContext} from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context";
import { getFirestore,getDoc, doc } from "firebase/firestore";

function ItemDetailContainer() {
  const { agregarAlCarrito } = useContext(CartContext);
  const { id } = useParams();

  const [juego, setJuego] = useState(null);
  const [loading, setLoading] = useState(true);

  const db = getFirestore();


useEffect(() => {
  const juegoRef = doc(db, "videojuegos", id);

  getDoc(juegoRef)
    .then(snapshot => {
      if (snapshot.exists()) {
        setJuego(snapshot.data());
      } else {
        setJuego(null);
      }
    })
    .catch(error => console.error(error))
    .finally(() => setLoading(false));
}, [db, id])

  if (loading) {
    return <h2>Cargando...</h2>;
  }
  if (!juego) {
    return <h2>El juego solicitado no existe</h2>;
  }


  const handleAdd = (cantidad) => {
    agregarAlCarrito (juego, cantidad);
  };

  return (
  
    <div className="card">
      <h2>Detalle del videojuego</h2>
      <h2>{juego.nombre}</h2>
      <h3>Precio: ${juego.precio}</h3>
      <p>Valoracion: {juego.rating}</p>
      <p>Stock disponible: {juego.stock}</p>
       <ItemCount stock={juego.stock} inicio={1} onAdd={handleAdd} />
    </div>
  );
}

export default ItemDetailContainer;


