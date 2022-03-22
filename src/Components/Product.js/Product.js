import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h7>This is Product Price: {price}</h7>
        </div>
    );
};

export default Product;