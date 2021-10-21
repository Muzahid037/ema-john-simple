import React from 'react';

const OderedProduct = (props) => {
    const { img, name, seller, price, quantity } = props.oderedProduct;
    //console.log(props.oderedProduct);
    return (
        <div className="">
            <h2 className="">{name}</h2>
            <p>${price}</p>
            <p><small>Sold by: {seller}</small></p>
            <p><small>Quantity: {quantity}</small></p>
            
            <button onClick={() => props.handleRemoveCilck(props.oderedProduct)}>Remove</button>

        </div>
    );
};

export default OderedProduct;