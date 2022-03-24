import axios from "axios";

const removeFromWishList = async (item, authState, wishDispatch) => {
    console.log("remove card id", item._id);

    try {
        const res = await axios.delete(`/api/user/wishlist/${item._id}`, { headers : { authorization: authState.token } }); 
        wishDispatch({type : "REMOVE_FROM_WISHLIST", payload : res.data.wishlist });
        console.log("remove card", res.data.wishlist);
        
    } catch (error) {
        alert(error);
    }
}

export { removeFromWishList };