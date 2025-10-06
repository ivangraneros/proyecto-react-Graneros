import { useState, createContext } from "react"


export const CartContext = createContext();

const Carrito = ({children}) => {
    const [cartList, setCartList] = useState([])

    const agregarAlCarrito = (item,cantidad) => {
        setCartList((prevCart) => {
            const existeProducto = prevCart.find((prod) => prod.id === item.id);

            if (existeProducto) {
                return prevCart.map((prod) =>
                    prod.id === item.id
                        ? { ...prod, cantidad: prod.cantidad + cantidad }
                        : prod
                );
            } else {
                return [...prevCart, { ...item, cantidad }];
            }
        });
        }


        const vaciarCarrito = () => {
            setCartList([]);
        }

        const eliminarProducto = (id) => {
            setCartList(cartList.filter(prod => prod.id !== id));
    };


  return (
    <CartContext.Provider value = {{agregarAlCarrito, vaciarCarrito, eliminarProducto, cartList}}>
        {children}
    </CartContext.Provider>
  );
};

export default Carrito;