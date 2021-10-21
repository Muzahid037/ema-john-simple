import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        // console.log("call local storage to get added data ");
        if (products.length) {
            const storedKeyOfCart = getStoredCart();
            let storedProductsOfCart = [];
            // console.log("got added data from storage ");
            // console.log(storedKeyOfCart);
            for (const storedProductKey in storedKeyOfCart) {
                //console.log(storedProductKey, storedKeyOfCart[storedProductKey]);

                const storedProductOfCart = products.find(product => product.key === storedProductKey)
                if (storedProductOfCart) {
                    const quantity = storedKeyOfCart[storedProductKey];
                    storedProductOfCart.quantity = quantity;
                    //console.log(storedProductKey, storedProductOfCart);
                    storedProductsOfCart.push(storedProductOfCart);
                }

            }

            // console.log(storedProductsOfCart);
            setCart(storedProductsOfCart);
        }
    }, [products]);

    return [cart,setCart];
}

export default useCart;