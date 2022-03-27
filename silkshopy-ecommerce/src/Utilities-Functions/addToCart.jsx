import axios from "axios";
import { toast } from 'react-toastify';

const addToCart = async (product, authState, cartDispatch, navigate) => {

    if(authState.token){
        try {
            const res = await axios.post("/api/user/cart", { product }, { headers : { authorization: authState.token } }); 
            cartDispatch({type : "ADD_TO_CART", payload : res.data.cart });

            toast.success("Add to cart Successfully", {
                position: "bottom-center",
                autoClose: 1100,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme : "colored"
                });
            
        } catch (error) {
            alert(error);
        }
    }
    
    else {
        navigate("/login");
    }
     
}

export { addToCart };