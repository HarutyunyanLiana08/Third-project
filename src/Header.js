// import {
   
//     Link
//   }
//   from 'react-router-dom';

import React from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header>
      <nav>
        
        <ul className="nav__block">
        <div className='logo'> Jewelry</div>
          <li> Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Categories</li>
          <div className="search-container">
            <input type="text" placeholder="Search" />
            
          </div>
          <i className="fas fa-lock"></i>
        </ul>
      </nav>
     
    </header>
  );
}

export default Header
// function Header (){
    // const navigation = ["Home", "Service", "About","Contact","Address"]
//     return(
//         <nav>
//         <ul className = "nav__block">
//             {navigation.map((item,index)=> (
//                 <li key = {index}>{item}</li>
        
//             ))
        
//             }
//         </ul>
//                 </nav>
   
// )


// }


 
    
    //   <ul>
    // //     <li> <Link to="/">Home</Link></li>
    // //     <li> <Link to="/products">Products</Link></li>
    // //   </ul>
        