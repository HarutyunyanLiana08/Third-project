import { useParams } from 'react-router-dom';
import chokerSharakan from  './img/choker-sharakan.png'
import earrings from "./img/earrings.png"
import handTriangle from "./img/hand-triangle.png"
import necklace from "./img/necklace.png"
import necklaceSrvak from "./img/necklace-srvak.png"
import ring from "./img/ring.png"
import Button from './Button';

const data = [
  {
    id: 1,
    img: chokerSharakan,
    name: 'Choker Sharakan',
    price: '149.000 AMD',
    description: `This multi-strand pearl choker is as elegant as it is bold. Classic with a modern twist, Sharakan matches the timelessness of the pearls with the uniqueness of the vintage-inspired silver buckle. `,
    weight:"25 gr (silver)",
    stone: 'shell pearl 925 silver' 
  },
  {
    id: 2,
    img: earrings,
    name: 'Earrings',
    price: '49.000 AMD',
    description: "Hethum I ruled the Armenian Kingdom of Cilicia from 1226 to 1270. These ethnic silver coin earrings are minted with a pattern which matches that of the currency used in the kingdom at the time.",
    weight: "25gr (silver)",
    stone: "pearl"
  
  },
  {
    id: 3,
    img: handTriangle,
    name: 'Hand Triangle',
    price: '30.000 AMD',
    description: 'This is the Hand Triangle description',
  },
  {
    id: 4,
    img: necklace,
    name: 'Archangel Gabriel',
    price: '85.000 AMD',
    description: 'Archangel Gabriel is depicted on this silver necklace. In Christian prophecy, Gabriel was the messenger who appeared before the Virgin Mary and gave her news of being chosen to give birth to Christ.',
    weight:"24gr",
  },
  {
    id: 5,
    img: necklaceSrvak,
    name: 'Necklace Srvak',
    price: '119.000 AMD',
    description: 'This is the Necklace Srvak description',
  },
  {
    id: 6,
    img: ring,
    name: 'Ring Ag',
    price: '43.000 AMD',
    description: 'This is the Ring Ag description',
  },
];

export default function Product({handleClick}) {
  const { id } = useParams();
  const product = data.find((el) => el.id === +id);
console.log(product);
  return (
    <div className="more_info">
      <img src={product.img} alt="" className="images" />
      <div className="info">
        <h2>{product.name}</h2>
        <p className="des">{product.description}</p>
        <h3>{product.price}</h3>
        <h4> Weight:{product.weight}</h4>
        <h4> Stone: {product.stone}</h4>
        <Button handleClick={handleClick} />
        {/* <button className="btn">Add to cart</button> */}
      </div>
    </div>
  );
}


































