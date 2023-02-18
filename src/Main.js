import chokerSharakan from  './img/choker-sharakan.png'
import earrings from "./img/earrings.png"
import handTriangle from "./img/hand-triangle.png"
import necklace from "./img/necklace.png"
import necklaceSrvak from "./img/necklace-srvak.png"
import ring from "./img/ring.png"
// import { useParams } from 'react-router-dom'


export default function Main(){
    const data = [
        {id:1,img:chokerSharakan,name: "Choker Sharakan", price:"149.000 AMD"},
        {id:2,img:earrings,name:"Earrings" , price: "49.000 AMD"}, 
        {id:3,img:handTriangle,name: "Hand Triangle", price: "30.000 AMD"},
        {id:4,img:necklace,name: "Archangel Gabriel", price: "85.000 AMD"},
        {id:5,img:necklaceSrvak,name: "Necklace Srvak", price: "`55.000 AMD"},
        {id:6,img:ring,name: "Ring Ag", price: "43.000 AMD"},];

        // const Product =()=>{
        //     const{id}=useParams();
        //     const data = Main.Data.find(el=>el.id ===+id)
        // }

         return(<div className="container">
            {data.map((item)=>(
                <div key={item.id} className="item">
                <img src={item.img}alt={item.name} className="image"></img>
                <h2 className="name">{item.name}</h2>
                <p className="price">{item.price}</p>
                 <button className="btn">Add to card</button>
                </div>
            ))}
         </div>)


    }
// import React from 'react';
// import { Link } from 'react-router-dom';
// import ProductDetail from './ProductDetail';
// import chokerSharakan from './img/choker-sharakan.png';
// import earrings from './img/earrings.png';
// import handTriangle from './img/hand-triangle.png';
// import necklace from './img/necklace.png';
// import necklaceSrvak from './img/necklace-srvak.png';
// import ring from './img/ring.png';

// export default function Main() {
//   const data = [
//     {
//       id: 1,
//       img: chokerSharakan,
//       name: 'Choker Sharakan',
//       price: '149.000 AMD',
//       description: 'This is the Choker Sharakan description',
//     },
//     {
//       id: 2,
//       img: earrings,
//       name: 'Earrings',
//       price: '49.000 AMD',
//       description: 'This is the Earrings description',
//     },
//     {
//       id: 3,
//       img: handTriangle,
//       name: 'Hand Triangle',
//       price: '30.000 AMD',
//       description: 'This is the Hand Triangle description',
//     },
//     {
//       id: 4,
//       img: necklace,
//       name: 'Archangel Gabriel',
//       price: '85.000 AMD',
//       description: 'This is the Archangel Gabriel description',
//     },
//     {
//       id: 5,
//       img: necklaceSrvak,
//       name: 'Necklace Srvak',
//       price: '55.000 AMD',
//       description: 'This is the Necklace Srvak description',
//     },
//     {
//       id: 6,
//       img: ring,
//       name: 'Ring Ag',
//       price: '43.000 AMD',
//       description: 'This is the Ring Ag description',
//     },
//   ];

//   return (
//     <div className='container'>
//       {data.map((item) => (
//         <div key={item.id} className='item'>
//           <Link to={`/product/${item.id}`}>
//             <img src={item.img} alt={item.name} className='image' />
//           </Link>
//           <h2 className='name'>{item.name}</h2>
//           <p className='price'>{item.price}</p>
//           <button className='btn'>Add to cart</button>
//         </div>
//       ))}
//     </div>
//   );
// }






