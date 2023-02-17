import chokerSharakan from  './img/choker-sharakan.png'
import earrings from "./img/earrings.png"
import handTriangle from "./img/hand-triangle.png"
import necklace from "./img/necklace.png"
import necklaceSrvak from "./img/necklace-srvak.png"
import ring from "./img/ring.png"


export default function Main(){
    const data = [
        {id:1,img:chokerSharakan,name: "Choker Sharakan", price:"149.000 AMD"},
        {id:2,img:earrings,name:"Earrings" , price: "49.000 AMD"}, 
        {id:3,img:handTriangle,name: "Hand Triangle", price: "30.000 AMD"},
        {id:4,img:necklace,name: "Archangel Gabriel", price: "85.000 AMD"},
        {id:5,img:necklaceSrvak,name: "Necklace Srvak", price: "`55.000 AMD"},
        {id:6,img:ring,name: "Ring Ag", price: "43.000 AMD"},]

         return(<div className="container">
            {data.map((item)=>(
                <div key={item.id} className="item">
                <img src={item.img}alt={item.name} className="image"></img>
                <h2 className="name">{item.name}</h2>
                <p className="price">{item.price}</p>
                 <button>Add to card</button>
                </div>
            ))}
         </div>)
    }