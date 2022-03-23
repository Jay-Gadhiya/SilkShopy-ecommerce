
const CartReducer = (cartState, cartAction) => {
    switch (cartAction.type) {
        case "ADD_TO_CART":
           const itemExist = cartState.cart.find((item) => item._id === cartAction.payload._id);    
           return {...cartState, 
                  cart : itemExist 
                         ? cartState.cart.map((item => item._id === cartAction.payload._id ? { ...item, quantity: item.quantity + 1 } : item))
                         : [...cartState.cart, {...cartAction.payload, quantity : 1}],

                  cartProducts : cartState.cartProducts + 1,
                  itemPrice : cartState.itemPrice + Number(cartAction.payload.price),
                  totalPrice : Number(cartAction.payload.price) + cartState.itemPrice - 500,
                  
                  }  

        case "REMOVE_FROM_CART" :
            const currentItem = cartState.cart.find(item => item._id === cartAction.payload._id)
    
            return {...cartState,
                  cart : cartState.cart.filter((item) => item._id !== cartAction.payload._id),
                  cartProducts : cartState.cartProducts - 1,
                  itemPrice : cartState.itemPrice - Number(cartAction.payload.price) * currentItem.quantity,
                  totalPrice : cartState.cartProducts === 1 ? 0 : cartState.totalPrice - Number(cartAction.payload.price) * currentItem.quantity

             }

        case "INCREASE_QUANTITY" :
            return {...cartState,
                cart : cartState.cart.map(item => 
                    item._id === cartAction.payload._id 
                    ? {...item, quantity : item.quantity + 1} 
                    : item
                    ),

                itemPrice : cartState.itemPrice +  Number(cartAction.payload.price),
                totalPrice : cartState.totalPrice + Number(cartAction.payload.price)

            }

        case "DECREASE_QUANTITY" :
            return {...cartState,
                cart : cartState.cart.map(item => 
                    item._id === cartAction.payload._id 
                    ? {...item, quantity : item.quantity - 1} 
                    : item
                    ),

                itemPrice : cartState.itemPrice -  Number(cartAction.payload.price),
                totalPrice : cartState.totalPrice - Number(cartAction.payload.price)
            }
    
        default:
            return cartState;
    }
}

export { CartReducer };