import React from 'react';

const CheckSnthetice=()=>{
    function handClick(event){
        console.log(event.target);      n 
    }
    return (
        <div>
            <button onClick={handClick}>Click me</button>
        </div>  
    )
 
}

export default CheckSnthetice;
