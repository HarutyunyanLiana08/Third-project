// import { useParams } from 'react-router-dom';

// const Products = ({ data }) => {
//   const { id } = useParams();
//   const selectedProduct = data.find((item) => item.id === parseInt(id));

//   return (
//     <div className="products">
//       <h2>{selectedProduct.name}</h2>
//       <img src={selectedProduct.img} alt={selectedProduct.name} />
//       <p>{selectedProduct.price}</p>
//       <button>Add to cart</button>
//     </div>
//   );
// };

// export default Products;
// import React from 'react';
// import { useParams } from 'react-router-dom';

// function ProductDetail({ data }) {
//   const { id } = useParams();
//   const product = data.find(item => item.id === +id);

//   return (
//     <div>
//       <h1>{product.name}</h1>
//       <img src={product.img} alt={product.name} />
//       <p>{product.price}</p>
//       <button>Add to cart</button>
//     </div>
//   );
// }

// export default ProductDetail;
