import { useParams } from "react-router-dom";
import { useState, useEffect, useContext} from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context";
import { getFirestore,getDoc, doc } from "firebase/firestore";
import Toast from "./Toast";

function ItemDetailContainer() {
  const { agregarAlCarrito } = useContext(CartContext);
  const { id } = useParams();

  const [juego, setJuego] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(false);
  const [agregado, setAgregado] = useState(false);

  const db = getFirestore();


useEffect(() => {

  const juegoRef = doc(db, "videojuegos", id);

    getDoc(juegoRef)
      .then(snapshot => {
          setJuego({ id: snapshot.id, ...snapshot.data() });
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [db, id]);

  if (loading) {
    return <div className="loader"></div>;
  }
  if (!juego) {
    return <h2>El juego solicitado no existe</h2>;
  }


  const handleAdd = (cantidad) => {
    agregarAlCarrito (juego, cantidad);
    setToast(true);
    setAgregado(true);

  };

  return (
  
    <div className="card">
      <h2>Detalle del videojuego</h2>
      <h2>{juego.nombre}</h2>
      <h3>Precio: ${juego.precio}</h3>
      <p>Valoracion: {juego.rating}</p>
      <p>Stock disponible: {juego.stock}</p>
       {!agregado && <ItemCount stock={juego.stock} inicio={1} onAdd={handleAdd} />}

      <Toast 
        message={`${juego.nombre} agregado al carrito`} 
        show={toast} 
        onClose={() => setToast(false)} 
      />
    </div>
  );
}

export default ItemDetailContainer;


