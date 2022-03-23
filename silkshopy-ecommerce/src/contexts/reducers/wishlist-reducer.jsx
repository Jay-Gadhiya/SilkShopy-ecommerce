const WishListReducer = (state, action) => {
    switch (action.type) {

        case "ADD_TO_WISHLIST":
            const itemPresentOrNot = state.wishListProducts.find( item => item._id === action.payload._id);

            return { ...state, 
                wishListProducts :   itemPresentOrNot ? [...state.wishListProducts] :[...state.wishListProducts, {...action.payload}],
                itemsPresent : itemPresentOrNot ? state.itemsPresent : state.itemsPresent + 1
              } 

        case "REMOVE_FROM_WISHLIST" :
            return { ...state,
                wishListProducts : state.wishListProducts.filter( item => item._id !== action.payload._id ),
                itemsPresent : state.itemsPresent - 1
             }
            
    
        default:
            state;
    }
}

export { WishListReducer };