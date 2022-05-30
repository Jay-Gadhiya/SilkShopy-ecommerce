import axios from "axios";
import { toast } from "react-toastify";

const removeFromCart = async (item,  authState, cartDispatch) => {
    
    try {
        const res = await axios.delete(`/api/user/cart/${item._id}`, { headers : { authorization: authState.token } }); 
        cartDispatch({type : "REMOVE_FROM_CART", payload : res.data.cart });

        toast.success("Remove From Cart Successfully", {
            position: "top-center",
            autoClose: 1200,
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

export { removeFromCart };