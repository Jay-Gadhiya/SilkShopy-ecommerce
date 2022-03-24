import axios from "axios";

const addToWishList = async (product, authState, wishDispatch, navigate) => {
        
    if(authState.token){
        try {
            const res = await axios.post("/api/user/wishlist", { product }, { headers : { authorization: authState.token } }); 
            wishDispatch({ type: "ADD_TO_WISHLIST", payload : res.data.wishlist });
            console.log("added card", res.data.wishlist);
            
        } catch (error) {
            alert(error);
        }
    }
    
    else {
        navigate("/login");
    }
}

export { addToWishList };