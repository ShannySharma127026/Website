import React from 'react'
import './Product.css'

function Product(props) {
  return (
    <div id='main'>
      <img src={props.img} alt="" />
      <p id='p'>{props.n}</p>

      {/* Rating */}
      <div style={{display:"flex",alignItems:"center"}}>
        <img src={props.star} alt="" style={{height:"12px"}} />
        <div style={{fontSize:"11px",opacity:"0.8",marginLeft:"4px",position:"relative",top:"1px"}}>{props.rating}</div>
      </div>

      {/* Bought in past month */}
      <div id='d'>{props.data}</div>

        {/* Price */}
      <div style={{display:"flex",alignItems:"center",marginBottom:"2px",marginTop:"3px"}}>
        <span id='reduce'>-{props.discount}%</span>
        <span>₹{props.price}</span>
      </div>

      {/* Prime Delivery */}
      <div style={{fontSize:"13px"}}><span style={{color:"#236cb5",marginRight:"10px"}}>{props.prime}</span>{props.prime2}</div>

      {/* Amazon Delivery */}
      <div style={{fontSize:"13px"}}>{props.delivery}</div>

      <div style={{opacity:0.8,fontSize:"12px"}}>Get it by <b>{props.date}</b></div>
    </div>
  )
}

export default Product