import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import Feature from '../Feature/Feature';
import './Product.css'
const Product = (props) => {
    //console.log(props);
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const { name, img, seller, price, stock, features } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2 className="product-name">{name}</h2>

                <div className="description-without-name">
                    <div>
                        <p><small>by: {seller}</small></p>
                        <p>${price}</p>
                        <p><small>only {stock} left in stock - order soon</small></p>
                    </div>

                    <div>
                        <h3>Features</h3>
                        {
                            features.map(feature => <Feature key={feature.description} feature={feature} />)
                        }
                    </div>
                </div>

                <button onClick={() => props.handleAddToCartCilck(props.product)}>{cartIcon} add to cart</button>

            </div>
        </div>
    );
};

export default Product;