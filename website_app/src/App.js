// import React, { useState } from 'react'
// import Card from './components/Card'
// import Navbar from './components/Navbar'
// import MyFirstUseStateComponent from './components/MyFirstUseStateComponent'
// import MainLoading from './components/MainLoading';


// const App = () => {
//   const [cart, setCart] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const addToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   const handleAddToCart = (product) => {
//     setLoading(true);
//     setTimeout(() => {
//       addToCart(product);
//       setLoading(false);
//     }, 500);
//   };



//   return (
//     <div>
//       {loading && <MainLoading />}

//       <Navbar cartCount={cart.length} />
//       <MyFirstUseStateComponent />

//       <h2 style={{ margin: "20px" }}>
//         Customers who viewed items in your browsing history also viewed
//       </h2>

//       <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
//         <Card
//           productImage="https://images-eu.ssl-images-amazon.com/images/I/61uOApKTDzL._AC_UL165_SR165,165_.jpg"
//           productName="Mirza Galib Ke Mashur Sheron Shayri"
//           productPublisher="Mirza Galib"
//           rating="★★★★☆"
//           reviews="423"
//           appliedDiscount="14%"
//           productPrice="₹171"
//           deliveryText="Get it by"
//           deliveryDate="Friday, June 26"
//           line="Free Delivery By Amazon"
//           addToCart={addToCart}
//         />

//         <Card
//           productImage="https://images-eu.ssl-images-amazon.com/images/I/51IGgVf9ayL._AC_UL165_SR165,165_.jpg"
//           productName="Ghalib (Hindi)"
//           productPublisher="Paperback"
//           rating="★★★★☆"
//           reviews="423"
//           appliedDiscount="18%"
//           productPrice="₹163"
//           deliveryText="Get it by"
//           deliveryDate="Friday, June 26"
//           line="Free Delivery By Amazon"
//           addToCart={addToCart}
//         />

//         <Card
//           productImage="https://images-eu.ssl-images-amazon.com/images/I/716jX+AFZhL._AC_UL165_SR165,165_.jpg"
//           productName="MUSAFIR"
//           productPublisher="Paperback"
//           rating="★★★★☆"
//           reviews="423"
//           appliedDiscount="34%"
//           productPrice="₹197"
//           deliveryText="Get it by"
//           deliveryDate="Friday, June 26"
//           line="Free Delivery By Amazon"
//           addToCart={addToCart}
//         />

//         <Card
//           productImage="https://images-eu.ssl-images-amazon.com/images/I/71Oj3dunNIL._AC_UL165_SR165,165_.jpg"
//           productName="NARAZ"
//           productPublisher="Paperback"
//           rating="★★★★☆"
//           reviews="423"
//           appliedDiscount="13%"
//           productPrice="₹174"
//           deliveryText="Get it by"
//           deliveryDate="Friday, June 26"
//           line="Free Delivery By Amazon"
//           addToCart={addToCart}
//         />

//         <Card
//           productImage="https://images-eu.ssl-images-amazon.com/images/I/81q5LH0XHcL._AC_UL165_SR165,165_.jpg"
//           productName="Urdu Ke Mashhoor Shayar Ahmad Faraz Aur"
//           productPublisher="Narender Govind Behl"
//           rating="★★★★☆"
//           reviews="423"
//           appliedDiscount="7%"
//           productPrice="₹163"
//           deliveryText="Get it by"
//           deliveryDate="Friday, June 26"
//           line="Free Delivery By Amazon"
//           addToCart={addToCart}
//         />

//         <Card
//           productImage="https://images-eu.ssl-images-amazon.com/images/I/71tI2GiVNOL._AC_UL165_SR165,165_.jpg"
//           productName="Kyun (Hindi) Jaun Elia Unpublished Poetry Masterpiece (First Time.."
//           productPublisher="Jaun Elia"
//           rating="★★★★☆"
//           reviews="423"
//           appliedDiscount="18%"
//           productPrice="₹449"
//           deliveryText="Get it by"
//           deliveryDate="Friday, June 26"
//           line="Free Delivery By Amazon"
//           addToCart={addToCart}
//         />

//         <Card
//           productImage="https://images-eu.ssl-images-amazon.com/images/I/81lE4nqhk0L._AC_UL165_SR165,165_.jpg"
//           productName="Duniya Jise Kehte Hain"
//           productPublisher="Nida Fazli"
//           rating="★★★★☆"
//           reviews="423"
//           appliedDiscount="31%"
//           productPrice="₹276"
//           deliveryText="Get it by"
//           deliveryDate="Friday, June 26"
//           line="Free Delivery By Amazon"
//           addToCart={addToCart}
//         />
//       </div>
//       <h3 style={{ margin: "20px" }}>Cart Items:</h3>
//       <ul>
//         {cart.map((item, index) => (
//           <li key={index}>
//             {item.name} - {item.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default App;