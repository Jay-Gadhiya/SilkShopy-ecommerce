import axios from "axios";

const removeFromCart = async (item,  authState, cartDispatch) => {
    
    try {
        const res = await axios.delete(`/api/user/cart/${item._id}`, { headers : { authorization: authState.token } }); 
        cartDispatch({type : "REMOVE_FROM_CART", payload : res.data.cart });
        
    } catch (error) {
        alert(error);
    }
}

export { removeFromCart };