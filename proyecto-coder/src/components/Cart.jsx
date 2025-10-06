import { useContext } from "react"
import { CartContext } from "./context"

function Cart() {

    const {cartList, eliminarProducto, vaciarCarrito} = useContext (CartContext);

  return (
    <div>
        <h2>Tu carro de compras</h2>
        {cartList.length === 0 ? (
            <p>El carrito está vacío</p>
        ) : (
            <div>
                {cartList.map((item) => (
                    <div key={item.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
                        <h3>{item.nombre}</h3>
                        <p>Precio: ${item.precio}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <button onClick={() => eliminarProducto(item.id)}>Eliminar</button>
                    </div>
                ))}
                <button onClick={vaciarCarrito}>Vaciar carrito</button>
                <h3>
                    Total: ${cartList.reduce((total, item) => total + item.precio * item.cantidad, 0)}
                </h3>
            </div>
        )}
    </div>
  )
}

export default Cart