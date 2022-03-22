
const CartReducer = (cartState, cartAction) => {
    switch (cartAction.type) {
        case "ADD_TO_CART":
           return {...cartState, 
                  cart : [ ...cartState.cart, cartAction.payload ],
                  cartProducts : cartState.cartProducts + 1,
                  itemPrice : cartState.itemPrice + Number(cartAction.payload.price),
                  totalPrice : cartState.totalPrice + Number(cartAction.payload.price) - 500
                  }  

        case "REMOVE_FROM_CART" :
            return {...cartState,
                  cart : cartState.cart.filter((item) => item._id !== cartAction.payload._id),
                  cartProducts : cartState.cartProducts - 1,
                  itemPrice : cartState.itemPrice - Number(cartAction.payload.price),
                  totalPrice : cartState.totalPrice - Number(cartAction.payload.price) + 500
             }
    
        default:
            
    }
}

export { CartReducer };