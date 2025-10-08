import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { getFirestore,collection, getDocs } from 'firebase/firestore'

function Item() {

    const [productos, setProductos] = useState([])

    const [loading, setLoading] = useState(true);
    const db = getFirestore();

    useEffect(() => {

    const juegosCollection = collection(db, "videojuegos");

    getDocs(juegosCollection)
      .then((snapshot) => {
        const productosData = snapshot.docs.map(doc => ({
          id: doc.id,
          nombre: doc.data().nombre,
          precio: doc.data().precio,
          rating: doc.data().rating,
          stock: doc.data().stock
        }));
        setProductos(productosData);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [db]);

    if (loading) {
    return  <div className="loader"></div>;
  }


  return (
    <div>
        <ItemList productos={productos}/>
    </div>
  )
}

export default Item