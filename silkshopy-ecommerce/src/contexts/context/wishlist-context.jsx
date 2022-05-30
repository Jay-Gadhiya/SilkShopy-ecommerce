import { createContext, useContext, useReducer } from "react";
import { WishListReducer } from "../reducers/wishlist-reducer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WishListContext = createContext();
const useWishList = () => useContext(WishListContext);

const WishListProvider = ({ children }) => {
    
    const [wishState, wishDispatch] = useReducer( WishListReducer, { wishListProducts : [], itemsPresent : 0 });


    return (
        <WishListContext.Provider value={{ wishState, wishDispatch }} >
            { children }
            <ToastContainer />
        </WishListContext.Provider>
    )
}

export { useWishList, WishListProvider };