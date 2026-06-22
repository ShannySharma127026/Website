import React from "react";

function Card (props){
    return ( <div>
   This is my Card

<div style={{width:"250px",height:"150px",
    backgroundColor:"skyblue",border:"1px solid green",borderRadius:"5px"
}}>
    <h1>{props.name}</h1>
    <img src="https://www.bing.com/th/id/OIP.VoXXZWHOcYsMtnjlLJJUFgHaEh?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt=""/>
</div>
    </div>
    )
}
export default Card;