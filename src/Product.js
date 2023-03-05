import { useParams } from 'react-router-dom';
import chokerSharakan from  './img/choker-sharakan.png'
import earrings from "./img/earrings.png"
import handTriangle from "./img/hand-triangle.png"
import necklace from "./img/necklace.png"
import necklaceSrvak from "./img/necklace-srvak.png"
import ring from "./img/ring.png"
import {useEffect,useState} from 'react'






export default function Product({handleClick}) {
  const { id } = useParams();
  // const product = data[id]
  const [jewelry,setJewelry] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3001/jewelry/"+id)
    .then(res=>res.json())
    .then(res=>setJewelry(res));
  },[])
  return (
    <div className="more_info">
      <img src={jewelry.img} alt="" className="images" />
      <div className="info">
        <h2>{jewelry.name}</h2>
        <p className="des">{jewelry.description}</p>
        <h3>{jewelry.price}</h3>
        {/* <h4> Weight:{jewelry.weight}</h4> */}
        {/* <h4> Stone: {product.stone}</h4> */}
        <button onClick={handleClick}>Add to cart </button>
       
      </div>
    </div>
  );
}



// const data = [
//   {
//     id: 0,
//     img: chokerSharakan,
//     name: 'Choker Sharakan',
//     price: '149.000 AMD',
//     description: `This multi-strand pearl choker is as elegant as it is bold. Classic with a modern twist, Sharakan matches the timelessness of the pearls with the uniqueness of the vintage-inspired silver buckle. `,
//     weight:"25 gr (silver)",
//     stone: 'shell pearl 925 silver' 
//   },
//   {
//     id: 1,
//     img: earrings,
//     name: 'Earrings',
//     price: '49.000 AMD',
//     description: "Hethum I ruled the Armenian Kingdom of Cilicia from 1226 to 1270. These ethnic silver coin earrings are minted with a pattern which matches that of the currency used in the kingdom at the time.",
//     weight: "25gr (silver)",
//     stone: "pearl"
  
//   },
//   {
//     id: 2,
//     img: handTriangle,
//     name: 'Hand Triangle',
//     price: '30.000 AMD',
//     description: 'This is the Hand Triangle description',
//   },
//   {
//     id: 3,
//     img: necklace,
//     name: 'Archangel Gabriel',
//     price: '85.000 AMD',
//     description: 'Archangel Gabriel is depicted on this silver necklace. In Christian prophecy, Gabriel was the messenger who appeared before the Virgin Mary and gave her news of being chosen to give birth to Christ.',
//     weight:"24gr",
//   },
//   {
//     id: 4,
//     img: necklaceSrvak,
//     name: 'Necklace Srvak',
//     price: '119.000 AMD',
//     description: 'This is the Necklace Srvak description',
//































