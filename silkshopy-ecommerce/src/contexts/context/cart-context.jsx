import { CartReducer } from "../reducers/cart-reducer";

const { createContext, useContext, useReducer } = require("react");


const CartContext = createContext()
const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {

    const [cartState, cartDispatch] = useReducer( CartReducer, {
        cart : [],
        cartProducts : 0,
        wishlistProducts : 0,
        itemPrice : 0,
        totalPrice : 0,
        } );

    return (
        <CartContext.Provider value={{ cartState, cartDispatch }} >
            { children }
        </CartContext.Provider>
    )
}

export { CartProvider, useCart };