export const addToWishlist = (item) => {
    return {
      type: "addtoWishlist",
      payload: item,
    };
  };
  export const removeFromWishlist = (id) => {
    return {
      type: "removeFromWishlist",
      payload: id,
      
    };
  };
  export const wishlistReducer = (wishlist = [], action) => {
    switch (action.type) {
      case "addtoWishlist":
      const UpdateExistingSameId = wishlist.findIndex((item)=>item.id === action.payload.id)
        //check it is available or not 
        if (UpdateExistingSameId !== -1) {
            const newWishlistItem = [...wishlist]
            newWishlistItem.splice(UpdateExistingSameId,1)
            return [...newWishlistItem,action.payload]
        } else {
            return [...wishlist, action.payload];
        }
        case'removeFromWishlist':
        return wishlist.filter((items)=>items.id !== action.payload)
      default:
        return wishlist;
    }
  };
  