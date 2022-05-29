import { createContext, useContext, useReducer } from "react";
import { orderReducer } from "../reducers/orderReducer";


const OrderContext = createContext();
const useOrder = () => useContext(OrderContext);

const initialVal = {
    orders : [],
    allOrders : [],
}


const OrderProvider = ({ children }) => {

    const [orderState, orderDispatch] = useReducer(orderReducer, initialVal);

    return (
        <OrderContext.Provider value={{ orderState, orderDispatch }}>
            { children }
        </OrderContext.Provider>
    )
}

 export { useOrder, OrderProvider };