import { getCartProductFromLS } from "./getCartProducts";
import { updateCartValue } from "./updateCartValue";


getCartProductFromLS();

export const addToCart = (event, id, stock) =>{
    const currentProdElem = document.querySelector(`#card${id}`);
    // console.log(currentProdElem);

    let arrLocalStorageProduct = getCartProductFromLS();
    

    let quantity = currentProdElem.querySelector(".productQuantity").innerText;
    let price = currentProdElem.querySelector(".productPrice").innerText;

    // console.log(qauntity, price);

    price = price.replace("₹", "");

    //  yaha ham ye kr rhe he ki jo pahle he se LS me he wah duabara na store ho
    let existingProd = arrLocalStorageProduct.find(
        (curProd) => curProd.id === id
    );

    if(existingProd && quantity > 1){
        quantity = existingProd.quantity + Number(quantity);
        price = Number(price * quantity);
        let updatedCart = {id, quantity, price};

        updatedCart = arrLocalStorageProduct.map((curProd) => {
            return curProd.id === id ? updatedCart : curProd;
        });

        localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
    }

    if(existingProd){
        // alert('Already Exist');
        return false;
    }


    price = Number(price * quantity);
    quantity = Number(quantity);

    let updateCart = {id, quantity, price};
    arrLocalStorageProduct.push(updateCart);
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));


    updateCartValue(arrLocalStorageProduct);
};
