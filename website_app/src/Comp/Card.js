// import React from 'react';

// const Card = (props) => {

//   const handleClick = () => {
//     props.addToCart({
//       image: props.productImage,
//       name: props.productName,
//       publisher: props.productPublisher,
//       price: props.productPrice,
//       rating: props.rating
//     });
//   };

//   return (
//     <div style={{
//       width: "200px",
//       minHeight: "480px",
//       backgroundColor: "white",
//       borderRadius: "5px",
//       padding: "10px"
//     }}>
//       <img
//         style={{ width: "100%", height: "60%", objectFit: "contain" }}
//         src={props.productImage}
//         alt="product"
//       />

//       <p>{props.productName}</p>
//       <p style={{ color: "#565959", fontSize: "14px" }}>
//         {props.productPublisher}
//       </p>

//       <div>
//         <span style={{ color: "#FFA41C" }}>{props.rating}</span>
//         <span> ({props.reviews})</span>
//       </div>

//       <div>
//         <span style={{ color: "red" }}>-{props.appliedDiscount}</span>
//         <b> {props.productPrice}</b>
//       </div>

//       <p>{props.deliveryText} <b>{props.deliveryDate}</b></p>
//       <p>{props.line}</p>

//       <button
//         onClick={handleClick}
//         style={{
//           width: "100%",
//           padding: "8px",
//           backgroundColor: "#ffd814",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer"
//         }}
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default Card;