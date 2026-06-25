
import React from 'react'

const Card = (props) => {
  return (

    <div>



      <div style={{ width: "200px", minHeight: "480px", backgroundColor: "white",  borderRadius: "5px", padding: "10px" }}>
        <img style={{ width: "100%", height: "60%", objectFit: "contain" }} src={props.productImage} alt="Card Image" />

        <p style={{ marginBottom: "5px" }}>{props.productName}</p>


        <p style={{
          color: "#565959",
          fontSize: "14px",
          marginTop: "0"
        }}>{props.productPublisher}</p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px"
          }}
        >
          <span style={{ color: "#FFA41C" }}>
            {props.rating}
          </span>

          <span style={{ color: "#007185" }}>
            {props.reviews}
          </span>
        </div>


        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <p style={{ color: "red" }}> -{props.appliedDiscount}</p>
          <p style={{ fontWeight: "bold" }}>{props.productPrice}</p>
        </div>

        <p style={{
          color: "#565959",
          fontSize: "14px",
          marginTop: "0"
        }}>{props.deliveryText} <b>{props.deliveryDate}</b></p>

        <p style={{
          color: "#565959",
          fontSize: "14px",
          marginTop: "0"
        }}>{props.line}</p>


      </div>
    </div>

  )
}

export default Card;