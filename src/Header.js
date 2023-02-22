

import React from 'react';
import {Link} from 'react-router-dom';
import shop from './img/shop.png';
// import { useState } from 'react';
// import Button from './Button';
//   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCartShopping } from '@fortawesome/free-regular-svg-icons';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fa-regular fa-cart-shopping } from '@fortawesome/free-solid-svg-icons';

function Header({handleClick,count}) {
 
  return (
    <header>
      <nav>
        
        <ul className="nav__block">
        <div className='logo'> Jewelry</div>
          <li> <Link to="/" className="link">Home</Link></li>
          <li><Link to="about" className="link">About</Link></li>
          <li><Link to="Contact" className="link">Contact</Link></li>
          <li><Link to="categories" className="link">Categories</Link></li>
          <div className="search-container">
            <input  style= {{width:100}}type="text" placeholder="Search" />
            <img style={{width:30,heigt:30}} src={shop}/>
            <span>{count}</span>
            
          </div>
           {/* <FontAwesomeIcon icon={faCartShopping} /> */}
          {/* <FontAwesomeIcon icon="fa-regular fa-cart-shopping" /> */}
        </ul>
      </nav>
     {/* <Button handleClick={handleClick}/>   */}
    </header>
  );
}
export default Header
        