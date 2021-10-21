import React from 'react';
import { Route, useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OderedProduct from '../OderedProduct/OderedProduct';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory();
    const oderedProducts = products.filter(products => 1 && products.quantity);

    const handleRemoveCilck = (product) => {
        const newCart = cart.filter(p => p.key != product.key);
        setCart(newCart);
        deleteFromDb(product.key);
        // window.location.reload();
    }

    const handleShippingBtn = () => {
        history.push('./shipping');
        //setCart([]);
        //clearTheCart();
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    ////---------------------------------------------------/////
                    cart.map(oderedProduct => <OderedProduct
                        key={oderedProduct.key}
                        oderedProduct={oderedProduct}
                        handleRemoveCilck={handleRemoveCilck}
                    />
                    )
                    // // or 
                    // oderedProducts.map(oderedProduct => <OderedProduct oderedProduct={oderedProduct} />)
                    ////-------------------------------------------------------/////
                }
            </div>
            <div className="order-container">
                <Cart cart={cart}>
                    <button onClick={handleShippingBtn}>Proceed to shipping</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;