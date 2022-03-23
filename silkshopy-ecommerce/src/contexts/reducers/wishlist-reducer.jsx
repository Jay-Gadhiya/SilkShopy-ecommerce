const WishListReducer = (state, action) => {
    switch (action.type) {

        case "ADD_TO_WISHLIST":
            return { ...state, 
                wishListProducts : [...state.wishListProducts, {...action.payload}],
                itemsPresent : state.itemsPresent + 1
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