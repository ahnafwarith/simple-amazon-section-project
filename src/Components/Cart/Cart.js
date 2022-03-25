import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log(cart)
    let total = 0
    let shippingTotal = 0
    for (const product of cart) {
        total = total + product.price;
        shippingTotal = shippingTotal + product.shipping;
    }
    const tax = total * 0.1
    const taxFinal = tax.toFixed(2)
    const grandTotal = total + tax + shippingTotal;
    return (
        <div className='cart'>
            <h1>Order Summary</h1>
            <h3>Selected Items: {cart.length}</h3>
            <h3>Total Price: ${total.toFixed(2)}</h3>
            <h3>Total Shipping: ${shippingTotal.toFixed(2)}</h3>
            <h3>Tax: {taxFinal}</h3>
            <h2>Grand Total: {grandTotal.toFixed(2)}</h2>
        </div>
    );
};

export default Cart;