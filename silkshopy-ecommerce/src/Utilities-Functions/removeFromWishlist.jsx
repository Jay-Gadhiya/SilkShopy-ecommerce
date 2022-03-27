import axios from "axios";
import { toast } from "react-toastify";

const removeFromWishList = async (item, authState, wishDispatch) => {
    console.log("remove card id", item._id);

    try {
        const res = await axios.delete(`/api/user/wishlist/${item._id}`, { headers : { authorization: authState.token } }); 
        wishDispatch({type : "REMOVE_FROM_WISHLIST", payload : res.data.wishlist });
        
        toast.success("Remove From Wishlist Successfully", {
            position: "bottom-center",
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

export { removeFromWishList };