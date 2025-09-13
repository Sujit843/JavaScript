const cartValue = document.querySelector("#cartValue");


export const updateCartValue = (cartProductLS) => {
    return(cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${cartProductLS.length}`);
}