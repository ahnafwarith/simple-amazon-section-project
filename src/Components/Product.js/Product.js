import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ({ handleAddToCart, product }) => {
    const { img, name, price, seller, ratings } = product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller:{seller}</small></p>
                <p><small>Ratings {ratings} stars</small></p>
                <button onClick={() => handleAddToCart(product)} className='btn-cart'><p>Add to Cart</p><faShoppingCart></faShoppingCart></button>
            </div>
        </div>
    );
};

export default Product;