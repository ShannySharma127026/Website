import React from 'react'
import './App.css'
import Product from './Comp/Product'
import six from './assets/six.png'
import Eight from './assets/Eight.png'
import three from './assets/three.png'


const App = () => {

  const products = [
    {
      image:"https://images-eu.ssl-images-amazon.com/images/I/81UzTP9+ZHL._AC_UL165_SR165,165_.jpg",
      name:"VW 80 cm (32 inches) Spectra Series HD Ready Smart QLED Android TV VW32AQ3",
      star:six,
      rating:"6",
      data:"200+ bought in past month",
      discount:"2",
      price:"9,499.00",
      prime:"prime",
      prime2:"Free delivery",
      date:"Monday, June 22"
    },
    {
      image:"https://images-eu.ssl-images-amazon.com/images/I/71eleIP2QZL._AC_UL165_SR165,165_.jpg",
      name:"Uniboom_Optima Series 80 cm (32 inch) HD Smart LED TV |Android TV with Voice Command App |5000+ Free Movies |30W Sonic Boom Speakers| 500+ Certified Apps |Mobile Remote |Mobile Screen Cast-32S-ULT-AED",
      star:Eight,
      rating:"87",
      data:"1k+ bought in last month",
      discount:"5",
      price:"9,490.00",
      delivery:"Free delivery by Amazon",
      date:"Wednesday, June 24"
    },

    {
      image:"https://images-eu.ssl-images-amazon.com/images/I/815ZvsHky7L._AC_UL165_SR165,165_.jpg",
      name:"Lenovo LOQ 2024, Intel Core i5-13450HX, 13th Gen, NVIDIA RTX 4050-6GB, 16GB RAM, 512GB SSD, FHD 144Hz, 15.6/39.6cm, Windows 11, Office Home 2024, Grey, 2.4Kg, 83DV018JIN, 1Yr ADP Free Gaming Laptop",
      star:three,
      rating:"3,125",
      data:"1k+ bought in last month",
      discount:"10",
      price:"99,490.00",
      delivery:"Free delivery by Amazon",
      date:"Monday, June 22"
    },

    {
      image:"https://images-eu.ssl-images-amazon.com/images/I/81XLQsK9gvL._AC_UL165_SR165,165_.jpg",
      name:"Lenovo LOQ Essential AMD Ryzen 7 7735HS | NVIDIA RTX 4050 6GB (16GB RAM/512GB SSD/144Hz Refresh Rate/15.6 (39.6cm)/Windows 11/Office Home 2024/3 Mon. Game Pass/Grey/1.8Kg), 83S0009TIN Gaming Laptop",
      star:three,
      rating:"3,125",
      data:"1k+ bought in last month",
      discount:"2",
      price:"97,990.00",
      prime:"prime",
      prime2:"Free delivery",
      // delivery:"Free delivery by Amazon",
      date:"Wednesday, June 24"
    },

    {
      image:"https://images-eu.ssl-images-amazon.com/images/I/817rSMX4oEL._AC_UL165_SR165,165_.jpg",
      name:"Samsung 108 cm (43 inches) D Series Brighter Crystal 4K Dynamic Ultra HD Smart LED TV UA43DUE80AKLXL (Titan Gray)",
      star:three,
      rating:"5,525",
      data:"50+ bought in last month",
      discount:"5",
      price:"29,990.00",
      prime:"prime",
      prime2:"Free delivery",
      // delivery:"Free delivery by Amazon",
      date:"Wednesday, June 24"
    },

    {
      image:"https://images-eu.ssl-images-amazon.com/images/I/71qmvfFcUPL._AC_UL165_SR165,165_.jpg",
      name:"UNICRON 24”INCH HD Ready Android Smart LED TV | WiFi Enabled | Built-in Apps Compatible (YouTube, Netflix, Prime Video) | Screen Mirroring | HDMI, USB Connectivity | Premium Slim & Stylish",
      star:six,
      rating:"3",
      data:"100+ bought in last month",
      discount:"3",
      price:"6,989.00",
      // prime:"prime",
      // prime2:"Free delivery",
      delivery:"Free delivery by Amazon",
      date:"Thursday, June 25"
    },
    
  ]

  return (
    <>

      <div style={{display:"flex"}}>
        {
          products.map((p)=>{
            return(<Product
            img={p.image}
            n={p.name}
            star={p.star}
            rating={p.rating}
            data={p.data}
            discount={p.discount}
            price={p.price}
            prime = {p.prime}
            prime2 = {p.prime2}
            delivery = {p.delivery}
            date = {p.date}
            />
            )
          })
        }
      </div>

    </>
  )
}

export default App