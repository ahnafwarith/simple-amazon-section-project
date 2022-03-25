import React, { useEffect, useState } from 'react';
import Product from '../Product.js/Product';
import './Shop.css'

const Shop = () => {
    const [products, handleProducts] = useState([]);
    const [cart, handleCart] = useState([]);



    useEffect(() => {

        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => handleProducts(data))

    }, []);

    const handleAddToCart = (product) => {
        console.log(product)
        //cart.push(product)
        const newCart = [...cart, product];
        handleCart(newCart);
    }

    return (
        <div className='main-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className='sidebar'>
                <h1>Order Summary</h1>
                <h3>Selected Items: {cart.length}</h3>
            </div>
        </div>
    );
};

export default Shop;