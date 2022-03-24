
const CartReducer = (cartState, cartAction) => {
    switch (cartAction.type) {
        case "ADD_TO_CART":
            return {...cartState, 
                    cart : [...cartAction.payload],
                    cartProducts : cartState.cartProducts + 1,
                    itemPrice : [...cartAction.payload].reduce( (accu, curItem) => accu + Number(curItem.price) * curItem.qty , 0),
                    totalPrice : [...cartAction.payload].reduce( (accu, curItem) => accu + Number(curItem.price) * curItem.qty , 0) - 500,
            }

        case "REMOVE_FROM_CART" :

            return {...cartState,
                    cart : [...cartAction.payload],
                    cartProducts : cartState.cartProducts - 1,
                    itemPrice : [...cartAction.payload].reduce( (accu, curItem) => accu + Number(curItem.price)* curItem.qty , 0),
                    totalPrice : [...cartAction.payload].reduce( (accu, curItem) => accu + Number(curItem.price) * curItem.qty, 0) - 500,    
            }


        case "INCREASE_QUANTITY" :

            return {...cartState, 
                    cart : [...cartAction.payload],
                    itemPrice : [...cartAction.payload].reduce( (accu, curItem) => accu + Number(curItem.price) * curItem.qty , 0),
                    totalPrice : [...cartAction.payload].reduce( (accu, curItem) => accu + Number(curItem.price) * curItem.qty , 0) - 500
            }


        case "DECREASE_QUANTITY" :

           return {...cartState, 
                    cart : [...cartAction.payload],
                    itemPrice : [...cartAction.payload].reduce( (accu, curItem) => accu + Number(curItem.price) * curItem.qty , 0),
                    totalPrice : [...cartAction.payload].reduce( (accu, curItem) => accu + Number(curItem.price) * curItem.qty , 0) - 500
            }
    
        default:
            return cartState;
    }
}

export { CartReducer };