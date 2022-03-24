import axios from "axios";

const addToCart = async (product, authState, cartDispatch, navigate) => {

    if(authState.token){
        try {
            const res = await axios.post("/api/user/cart", { product }, { headers : { authorization: authState.token } }); 
            cartDispatch({type : "ADD_TO_CART", payload : res.data.cart });
            
        } catch (error) {
            alert(error);
        }
    }
    
    else {
        navigate("/login");
    }
     
}

export { addToCart };