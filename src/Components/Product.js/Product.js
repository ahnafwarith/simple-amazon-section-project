import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller:{seller}</small></p>
                <p><small>Ratings {ratings} stars</small></p>
                <button className='btn-cart'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;