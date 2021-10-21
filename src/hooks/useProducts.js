import { useEffect, useState } from "react";

const useProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        // console.log("call data from api");
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                // console.log("start loading data from api");
            });
    }, [])

    return [products, setProducts];
}

export default useProducts;