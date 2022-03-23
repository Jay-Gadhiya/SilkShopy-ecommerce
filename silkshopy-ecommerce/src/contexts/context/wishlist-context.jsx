import { createContext, useContext, useReducer } from "react";
import { WishListReducer } from "../reducers/wishlist-reducer";

const WishListContext = createContext();
const useWishList = () => useContext(WishListContext);

const WishListProvider = ({ children }) => {
    
    const [wishState, wishDispatch] = useReducer( WishListReducer, { wishListProducts : [], itemsPresent : 0 });


    return (
        <WishListContext.Provider value={{ wishState, wishDispatch }} >
            { children }
        </WishListContext.Provider>
    )
}

export { useWishList, WishListProvider };