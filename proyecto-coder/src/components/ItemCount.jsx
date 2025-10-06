import { useState } from "react";

function ItemCount({ stock = 10, inicio = 1, onAdd }) {
  const [count, setCount] = useState(inicio);

  const agregar = () => {
    if (count < stock) setCount(count + 1);
  };

  const eliminar = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div>
      <div>
        <button onClick={eliminar}>-</button>
        <span style={{ margin: "0 10px" }}>{count}</span>
        <button onClick={agregar}>+</button>
      </div>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
