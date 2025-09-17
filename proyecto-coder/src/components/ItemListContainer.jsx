import { useState, useEffect } from "react";
import Productos from "./Productos";

function ItemListContainer() {
  const [videojuegos, setVideojuegos] = useState([]);

  useEffect(() => {
    fetch("https://www.cheapshark.com/api/1.0/deals?upperPrice=50&pageSize=20") //estuve como 2 dias buscando una Api que funcione
    .then(res => res.json())
    .then((data)  => {
        setVideojuegos(data);
        console.log(data);
    })
    .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Lista de videojuegos</h2>
      <Productos videojuegos={videojuegos} />
    </div>
  );
}

export default ItemListContainer;
