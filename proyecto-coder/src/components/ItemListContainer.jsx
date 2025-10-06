import { useState, useEffect } from "react";
import {collection, getFirestore, getDocs} from 'firebase/firestore'
import Productos from "./Productos";

function ItemListContainer() {
  const [videojuegos, setVideojuegos] = useState([]);
  const [loading, setLoading] = useState(true);

  const db = getFirestore();

  useEffect(() => {
    const listaJuegos = collection(db, "videojuegos");

    getDocs(listaJuegos)
      .then((snapshot) => {
        const juegos = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setVideojuegos(juegos);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [db]);

  if (loading) {
    return <h2>Cargando...</h2>;
  }

  return (
    <div>
      <h2>Lista de videojuegos</h2>
      <Productos videojuegos={videojuegos} />
    </div>
  );
}

export default ItemListContainer;
