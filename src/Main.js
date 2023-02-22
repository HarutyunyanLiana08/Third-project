import chokerSharakan from  './img/choker-sharakan.png'
import earrings from "./img/earrings.png"
import handTriangle from "./img/hand-triangle.png"
import necklace from "./img/necklace.png"
import necklaceSrvak from "./img/necklace-srvak.png"
import ring from "./img/ring.png"
import { Link } from "react-router-dom"
import Button from './Button'

import { useState } from 'react'

export default function Main({handleClick}) {
  

  const data = [
    { id: 1, img: chokerSharakan, name: "Choker Sharakan", price: "149.000 AMD" },
    { id: 2, img: earrings, name: "Earrings", price: "49.000 AMD" },
    { id: 3, img: handTriangle, name: "Hand Triangle", price: "30.000 AMD" },
    { id: 4, img: necklace, name: "Archangel Gabriel", price: "85.000 AMD" },
    { id: 5, img: necklaceSrvak, name: "Necklace Srvak", price: "119.000 AMD" },
    { id: 6, img: ring, name: "Ring Ag", price: "43.000 AMD" }
  ];
  // const handleClick =()=>{setCount(count+1)}
  // const handleAddToCart = (itemId) => {
  //   setCartItems((prevCartItems) => {
  //     console.log(prevCartItems)
  //     const newCartItems = { ...prevCartItems };
  //     if (newCartItems[itemId]) {
  //       newCartItems[itemId] += 1;
  //     } else {
  //       newCartItems[itemId] = 1;
  //     }
  //     return newCartItems;
  //   });
  // };

  return (

    <div className="container">
      
      {data.map((item) => (
        <div key={item.id} className="item">
          <Link to={`/product/${item.id}`}>
            <img src={item.img} alt={item.name} className="image" />
          </Link>
          <h2 className="name">{item.name}</h2>
          <p className="price">{item.price}</p>
          {/* <p> {cartItems[item.id] || 0} </p> */}
       <Button handleClick={handleClick} />
        </div>
      ))}
    </div>
  );
}






















































// import chokerSharakan from  './img/choker-sharakan.png'
// import earrings from "./img/earrings.png"
// import handTriangle from "./img/hand-triangle.png"
// import necklace from "./img/necklace.png"
// import necklaceSrvak from "./img/necklace-srvak.png"
// import ring from "./img/ring.png"
// import {Link} from "react-router-dom"

// import { useCallback,useState } from 'react'
// // import { useParams } from 'react-router-dom'


// export default function Main(props){
//     const [count,setCount]=useState(0)
//     const data = [
//         {id:1,img:chokerSharakan,name: "Choker Sharakan", price:"149.000 AMD"},
//         {id:2,img:earrings,name:"Earrings" , price: "49.000 AMD"}, 
//         {id:3,img:handTriangle,name: "Hand Triangle", price: "30.000 AMD"},
//         {id:4,img:necklace,name: "Archangel Gabriel", price: "85.000 AMD"},
//         {id:5,img:necklaceSrvak,name: "Necklace Srvak", price: "`55.000 AMD"},
//         {id:6,img:ring,name: "Ring Ag", price: "43.000 AMD"},];


//       const handleAddToCart = useCallback(() => {
//     setCount(count + 1);
//   }, [count, setCount]);

//   return (
//     <div className="container">
//       {data.map((item) => (
//         <div key={item.id} className="item">
//           <Link to={`/product/${item.id}`}>
//             <img src={item.img} alt={item.name} className="image" />
//           </Link>
//           <h2 className="name">{item.name}</h2>
//           <p className="price">{item.price}</p>
//           <p> {count} </p>
//           <button className="btn" onClick={handleAddToCart}>
//             Add to cart
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }



          
  
