import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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

    useEffect(() => {
        const storedCart = getStoredCart();
        console.log(storedCart)
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            console.log(addedProduct)
        }
    }, [])

    const handleAddToCart = (product) => {
        //cart.push(product)
        const newCart = [...cart, product];
        handleCart(newCart);
        addToDb(product.id)
    }

    return (
        <div className='main-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className='sidebar'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;