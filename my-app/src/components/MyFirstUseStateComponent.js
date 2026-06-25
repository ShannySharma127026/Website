import React, { useState } from 'react';

const MyFirstUseStateComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ margin: "20px" }}>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};

export default MyFirstUseStateComponent;





// React Events=>
  // in js=> <button onlcick="myfunction()"></button>
// or button.addEvnetListener("click",myfunction)


// in react js we will use camelcase
// for defining any eevnt 
// <button onclick={myfunction}></button>


// synthetice events
// => react will not directly use origianl event of browser
// => react will create a wrapper that will be known as syntheice event 

// => in case of normal js events , in different browser tgere can ve different things but once we will use wrapper then it will hid all these differences 
