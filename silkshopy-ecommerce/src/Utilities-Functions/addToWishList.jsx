import axios from "axios";
import { toast } from "react-toastify";

const addToWishList = async (product, authState, wishDispatch, navigate) => {
        
    if(authState.token){
        try {
            const res = await axios.post("/api/user/wishlist", { product }, { headers : { authorization: authState.token } }); 
            wishDispatch({ type: "ADD_TO_WISHLIST", payload : res.data.wishlist });
            
            toast.success("Add to Wishlist Successfully", {
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
    
    else {
        navigate("/login");
    }
}

export { addToWishList };