import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const product of cart) {
        total = total + product.price
    }
    const shipping = 20;
    const tax = total * 10 / 100
    const grandTotal = total + shipping + tax;

    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Items Ordered: {props.cart.length}</h4>

            <br />
            <p>Total: $ {total.toFixed(2)}</p>
            <p>Tax: $ {tax.toFixed(2)}</p>
            <p>Shipping: $ {shipping}</p>
            <hr />
            <h4>Grand Total: $ {grandTotal.toFixed(2)}</h4>

        </div>
    );
};

export default Cart;