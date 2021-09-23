import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, img, price, seller, stock } = props.product
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />

            </div>
            <div className='product-info'>
                <h2>{name}</h2>

                <p><small>By: {seller}</small></p>
                <p>price: {price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={() => props.handleAddToCart(props.product)} className='purchase-btn'> <FontAwesomeIcon icon={faShoppingCart} />  Add to cart</button>


            </div>
        </div>
    );
};

export default Product;