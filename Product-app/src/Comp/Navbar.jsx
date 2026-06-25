
import React from "react";

const Navbar = () => {
  return (
    
    <nav style={{ backgroundColor: "lightgray", padding: "1rem" ,height:"50px",display:"flex",alignItems:"center",justifyContent:"space-between",width:"99%"}}>
      <h2>My App</h2>
      <search style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <input type="text" placeholder="Search..." style={{ padding: "0.5rem", borderRadius: "5px", border: "1px solid gray" }} />
        <button style={{ padding: "0.5rem 1rem", borderRadius: "5px", border: "none", backgroundColor: "blue", color: "white" }}>Search</button>
      </search>
      <ul style={{ listStyleType: "none", display: "flex", gap: "1rem",justifyContent:"space-between",alignItems:"center" }}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
    

  
   );
};

export default Navbar;