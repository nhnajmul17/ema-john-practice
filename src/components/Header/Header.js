import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='header'>

            <img className='logo' src={logo} alt="" />
            <div className='nav'>
                <div >
                    <nav>
                        <a href="/shop">Shop</a>
                        <a href="/order">Order Review</a>
                        <a href="/manage">Manage Inventory</a>
                    </nav>
                </div>
                <div>
                    <input className='input-field' type="text" placeholder='What are you looking for?' />  <FontAwesomeIcon className='icon' icon={faShoppingCart} />
                </div>

            </div>

        </div>
    );
};

export default Header;