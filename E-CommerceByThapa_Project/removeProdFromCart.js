import { getCartProductFromLS } from "./getCartProducts"
import { updateCartValue } from "./updateCartValue";

export const removeProdFromCart = (id) => {
    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

    // update the localstorage after  removing the item

    localStorage.setItem("cartProductsLS", JSON.stringify(cartProducts));



// remove from cart 
    let removeDiv = document.getElementById(`card${id}`);
    if(removeDiv) {
        removeDiv.remove();
    }

    updateCartValue(cartProducts);
};

