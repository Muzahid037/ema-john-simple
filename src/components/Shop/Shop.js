import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { addToDb, getStoredCart } from './../../utilities/fakedb'
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';

const Shop = () => {

    const [products, setProducts] = useProducts();

    const [cart, setCart] = useCart(products);

    const handleAddToCartCilck = (product) => {
        //console.log(product.name);
        //product.quantity=1;
        const exist=cart.find(pd=>pd.key==product.key);
        let newCart=[];
        if(exist)
        {
            exist.quantity+=1;
            const rest=cart.filter(pd=>pd.key!=product.key);
            newCart=[...rest,exist];
        }
        else{
            newCart = [...cart, product];
        }
        console.log(newCart);
        setCart(newCart);
        addToDb(product.key);
    }


    //////

    /////

    return (
        <div className="shop-container">
            <div className="product-container">

                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        handleAddToCartCilck={handleAddToCartCilck}
                    />
                    )
                }
            </div>
            <div className="order-container">
                <Cart cart={cart}>
                    <Link to='./review'>
                        <button>Review Your Order</button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Shop;