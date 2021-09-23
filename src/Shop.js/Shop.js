import React, { useEffect, useState } from 'react';
import Cart from '../components/Cart/Cart';
import Product from '../components/Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }
    return (
        <div className='product-container'>

            <div className='products'>
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}>
                    </Product>)
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;