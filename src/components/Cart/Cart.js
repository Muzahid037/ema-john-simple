import React from 'react';

const Cart = (props) => {
    //console.log(props.children);
    const { cart } = props;
    // console.log(cart);
    let total = 0, totalQuantity = 0;
    for (const product of cart) {
        product.quantity = !product.quantity ? 1 : product.quantity;
        totalQuantity += product.quantity;
        total += (product.price * product.quantity);
    }
    const shiping = total > 0 ? 15 : 0;
    const taxPercentage = 10;
    const totalWithoutTax = total + shiping;
    const tax = (totalWithoutTax * taxPercentage) / 100;
    //let shipHand = ((shippingHandlingPerc / 100) * total).toFixed(2);
    //console.log(total);

    return (
        <div>
            <div className="order-top">
                <h2>Order Summary</h2>
                <p>Items ordered: {totalQuantity}</p>
            </div>

            <div className="order-calculation">
                <p>Items:	            ${total.toFixed(2)}</p>
                <p>Shipping & Handling:	${shiping.toFixed(2)}</p>
                <p>Total before tax:	${totalWithoutTax.toFixed(2)}</p>
                <p>IEstimated Tax:	    ${tax.toFixed(2)}</p>
                <h3>Order Total:	    ${(totalWithoutTax + tax).toFixed(2)}</h3>
            </div>

            {props.children}
            {/* <button>Review Your Order</button> */}

        </div>
    );
};

export default Cart;