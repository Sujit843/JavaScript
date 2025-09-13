import products from "./api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLS } from "./getCartProducts";
import { removeProdFromCart } from "./removeProdFromCart";

let  cartProducts = getCartProductFromLS();

let filterProducts = products.filter((curProd) => {
    return cartProducts.some((curElem) => curElem.id === curProd.id);  // jo some method he us se ham local storage se same data ko get kr rhe he
});

console.log(filterProducts);


const cartElement = document.querySelector("#productCartContainer");
const templateConatiner = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
filterProducts.forEach((curProd) => {
    const {category, id, image, name, price, stock} = curProd;

    let productClone = document.importNode(templateConatiner.content, true);

    const lsActualData = fetchQuantityFromCartLS(id, price);

        
        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".category").textContent = category;
        
        productClone.querySelector(".productQuantity").textContent = lsActualData.quantity;
        productClone.querySelector(".productPrice").textContent = lsActualData.price;




        // remove from cart 

        productClone.querySelector('.remove-to-cart-button').addEventListener('click', () =>{
            removeProdFromCart(id);
        });
        
        cartElement.appendChild(productClone);
    });
};


showCartProduct();