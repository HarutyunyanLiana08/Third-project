// import chokerSharakan from  './img/choker-sharakan.png'
// import earrings from "./img/earrings.png"
// import handTriangle from "./img/hand-triangle.png"
// import necklace from "./img/necklace.png"
// import necklaceSrvak from "./img/necklace-srvak.png"
// import ring from "./img/ring.png"
import { Link } from "react-router-dom"
import {useEffect,useState} from 'react'
export default function Main({handleClick}) {
  
const [jewelry,setJewelry] = useState([]);
useEffect(()=>{
  fetch("http://localhost:3001")
  .then(res=>res.json())
  .then(res=>setJewelry(res));
},[])
  // const data = [
  //   { id: 0, img: chokerSharakan, name: "Choker Sharakan", price: "149.000 AMD" },
  //   { id: 1, img: earrings, name: "Earrings", price: "49.000 AMD" },
  //   { id: 2, img: handTriangle, name: "Hand Triangle", price: "30.000 AMD" },
  //   { id: 3, img: necklace, name: "Archangel Gabriel", price: "85.000 AMD" },
  //   { id: 4, img: necklaceSrvak, name: "Necklace Srvak", price: "119.000 AMD" },
  //   { id: 5, img: ring, name: "Ring Ag", price: "43.000 AMD" }
  // ];
 

  return (

    <div className="container">
      
      {jewelry.map((item) => (
        <div key={item.id} className="item">
          <Link to={`/product/${item.id}`}>
            <img src={item.img} alt={item.name} className="image" />
          </Link>
          <h2 className="name">{item.name}</h2>
          <p className="price">{item.price}</p>
        
          <button onClick={handleClick}>Add to cart </button>
        </div>
      ))}
    </div>
  );
}


























































          
  
