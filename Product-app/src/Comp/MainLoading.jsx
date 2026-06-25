import React from "react";

const product = () => [
    { id: 1, title: "Iphone 16 Pro", category: "Mobile", rating: 4.5, stock: 15, image: "https://m.media-amazon.com/images/I/61jLiCovJBL._SX679_.jpghttps://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT-oZsvOPEk3T1LYE8HMC8Z-euiUA_5Tz4oj85V4VA2CZIHxUQdoH91_7DYSv31etEcvH8EPrdFRV9FFH2cS7cG3uNs850FdpdCNdiDI2Nlk-1S4Q_hym2Rov2oBWxh4T4Qrt4i20TsXn8&usqp=CAc",
        description: "The iPhone 16 Pro is a smartphone designed and marketed by Apple Inc. It features a sleek design, advanced camera capabilities, and runs on the latest iOS operating system. With its powerful A15 Bionic chip, the iPhone 14 delivers fast performance and smooth multitasking. It also offers improved battery life, enhanced security features, and access to a wide range of apps and services through the App Store."
     },
      { id: 2, title: "Iphone 17 Pro Max", category: "Mobile", rating: 4.3, stock: 20, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS8afmoMsTzjWGnkhkcjT0X0anWm2YXAPQQSO9OgDjvVxEqiP7lbb8BbvrRyxzCUq1_VzPcsaoQ_imJsvsB3ydeYoYI7BqkcuLaVs8RUSadDkK3ay_RYimaEmJQbdFDPd6lRX6In0Q6kw&usqp=CAc",
        description: "The iPhone 17 Pro Max is a smartphone designed and marketed by Apple Inc. It features a sleek design, advanced camera capabilities, and runs on the latest iOS operating system. With its powerful A15 Bionic chip, the iPhone 14 delivers fast performance and smooth multitasking. It also offers improved battery life, enhanced security features, and access to a wide range of apps and services through the App Store."
     },
      { id: 3, title: "Cycle", category: "Cycle", rating: 4.5, stock: 15, image: "https://encrypted-tbn0.gstatic.com/shopping?q=thttps://m.media-amazon.com/images/I/61jLiCovJBL._SX679_.jpghttbn:ANd9GcTqCH-CW6SfCh3zYpru_fNy0T2w4nEJTJahZueFIyhAkIFHmeiMTKoDy3G7taqV89fJrLjQ_V-cpw20mQAKV_rpEfxujlJ0R7CIUCNxnh9d7Nv4MxYAHdBY",
        description: "The Cycle is a two-wheeled vehicle designed for transportation and recreation. It features a lightweight frame, durable tires, and a comfortable seat for the rider. The Cycle is powered by human pedaling and is an eco-friendly mode of transportation. It also offers various gears for different terrains and speeds, making it suitable for both casual rides and competitive cycling."
     },
      { id: 4, title: "Asus STRIX G16 16.0 Inch ARL HX Core Ultra 9 32GB RAM 1TB SSD RTX5070 GPU Gaming Laptop G615LP-S5022WS", category: "Laptop", rating: 4.5, stock: 15, image: "https://www.primeabgb.com/wp-content/uploads/2025/10/Asus-STRIX-G16-16.0-Inch-ARL-HX-Core-Ultra-9-32GB-RAM-1TB-SSD-RTX5070-GPU-Gaming-Laptop-G615LP-S5022WS.jpg",
        description: "The Asus STRIX G16 is a high-performance gaming laptop designed for gamers and power users. It features a 16.0-inch display with ARL HX Core Ultra 9 technology, providing stunning visuals and immersive gaming experiences. With 32GB of RAM and a 1TB SSD, it offers fast performance and ample storage for games and applications. The laptop is equipped with an RTX5070 GPU, delivering exceptional graphics performance for demanding games and creative tasks. The G615LP-S5022WS model is built for durability and style, making it a top choice for gaming enthusiasts."
     },
      { id: 5, title: "Iphone 16 Pro", category: "Mobile", rating: 4.5, stock: 15, image: "https://m.media-amazon.com/images/I/61jLiCovJBL._SX679_.jpghttps://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT-oZsvOPEk3T1LYE8HMC8Z-euiUA_5Tz4oj85V4VA2CZIHxUQdoH91_7DYSv31etEcvH8EPrdFRV9FFH2cS7cG3uNs850FdpdCNdiDI2Nlk-1S4Q_hym2Rov2oBWxh4T4Qrt4i20TsXn8&usqp=CAc",
        description: "The iPhone 16 Pro is a smartphone designed and marketed by Apple Inc. It features a sleek design, advanced camera capabilities, and runs on the latest iOS operating system. With its powerful A15 Bionic chip, the iPhone 14 delivers fast performance and smooth multitasking. It also offers improved battery life, enhanced security features, and access to a wide range of apps and services through the App Store."
     },
      { id: 6, title: "Iphone 16 Pro", category: "Mobile", rating: 4.5, stock: 15, image: "https://m.media-amazon.com/images/I/61jLiCovJBL._SX679_.jpghttps://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT-oZsvOPEk3T1LYE8HMC8Z-euiUA_5Tz4oj85V4VA2CZIHxUQdoH91_7DYSv31etEcvH8EPrdFRV9FFH2cS7cG3uNs850FdpdCNdiDI2Nlk-1S4Q_hym2Rov2oBWxh4T4Qrt4i20TsXn8&usqp=CAc",
        description: "The iPhone 16 Pro is a smartphone designed and marketed by Apple Inc. It features a sleek design, advanced camera capabilities, and runs on the latest iOS operating system. With its powerful A15 Bionic chip, the iPhone 14 delivers fast performance and smooth multitasking. It also offers improved battery life, enhanced security features, and access to a wide range of apps and services through the App Store."
     },
      { id: 7, title: "Iphone 16 Pro", category: "Mobile", rating: 4.5, stock: 15, image: "https://m.media-amazon.com/images/I/61jLiCovJBL._SX679_.jpghttps://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT-oZsvOPEk3T1LYE8HMC8Z-euiUA_5Tz4oj85V4VA2CZIHxUQdoH91_7DYSv31etEcvH8EPrdFRV9FFH2cS7cG3uNs850FdpdCNdiDI2Nlk-1S4Q_hym2Rov2oBWxh4T4Qrt4i20TsXn8&usqp=CAc",
        description: "The iPhone 16 Pro is a smartphone designed and marketed by Apple Inc. It features a sleek design, advanced camera capabilities, and runs on the latest iOS operating system. With its powerful A15 Bionic chip, the iPhone 14 delivers fast performance and smooth multitasking. It also offers improved battery life, enhanced security features, and access to a wide range of apps and services through the App Store."
     },
      { id: 8, title: "Iphone 16 Pro", category: "Mobile", rating: 4.5, stock: 15, image: "https://m.media-amazon.com/images/I/61jLiCovJBL._SX679_.jpghttps://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT-oZsvOPEk3T1LYE8HMC8Z-euiUA_5Tz4oj85V4VA2CZIHxUQdoH91_7DYSv31etEcvH8EPrdFRV9FFH2cS7cG3uNs850FdpdCNdiDI2Nlk-1S4Q_hym2Rov2oBWxh4T4Qrt4i20TsXn8&usqp=CAc",
        description: "The iPhone 16 Pro is a smartphone designed and marketed by Apple Inc. It features a sleek design, advanced camera capabilities, and runs on the latest iOS operating system. With its powerful A15 Bionic chip, the iPhone 14 delivers fast performance and smooth multitasking. It also offers improved battery life, enhanced security features, and access to a wide range of apps and services through the App Store."
     },
      { id: 9, title: "Iphone 16 Pro", category: "Mobile", rating: 4.5, stock: 15, image: "https://m.media-amazon.com/images/I/61jLiCovJBL._SX679_.jpghttps://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT-oZsvOPEk3T1LYE8HMC8Z-euiUA_5Tz4oj85V4VA2CZIHxUQdoH91_7DYSv31etEcvH8EPrdFRV9FFH2cS7cG3uNs850FdpdCNdiDI2Nlk-1S4Q_hym2Rov2oBWxh4T4Qrt4i20TsXn8&usqp=CAc",
        description: "The iPhone 16 Pro is a smartphone designed and marketed by Apple Inc. It features a sleek design, advanced camera capabilities, and runs on the latest iOS operating system. With its powerful A15 Bionic chip, the iPhone 14 delivers fast performance and smooth multitasking. It also offers improved battery life, enhanced security features, and access to a wide range of apps and services through the App Store."
     },
      { id: 10, title: "Iphone 16 Pro", category: "Mobile", rating: 4.5, stock: 15, image: "https://m.media-amazon.com/images/I/61jLiCovJBL._SX679_.jpghttps://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT-oZsvOPEk3T1LYE8HMC8Z-euiUA_5Tz4oj85V4VA2CZIHxUQdoH91_7DYSv31etEcvH8EPrdFRV9FFH2cS7cG3uNs850FdpdCNdiDI2Nlk-1S4Q_hym2Rov2oBWxh4T4Qrt4i20TsXn8&usqp=CAc",
        description: "The iPhone 16 Pro is a smartphone designed and marketed by Apple Inc. It features a sleek design, advanced camera capabilities, and runs on the latest iOS operating system. With its powerful A15 Bionic chip, the iPhone 14 delivers fast performance and smooth multitasking. It also offers improved battery life, enhanced security features, and access to a wide range of apps and services through the App Store."
     },
      { id: 11, title: "Iphone 16 Pro", category: "Mobile", rating: 4.5, stock: 15, image: "https://m.media-amazon.com/images/I/61jLiCovJBL._SX679_.jpghttps://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT-oZsvOPEk3T1LYE8HMC8Z-euiUA_5Tz4oj85V4VA2CZIHxUQdoH91_7DYSv31etEcvH8EPrdFRV9FFH2cS7cG3uNs850FdpdCNdiDI2Nlk-1S4Q_hym2Rov2oBWxh4T4Qrt4i20TsXn8&usqp=CAc",
        description: "The iPhone 16 Pro is a smartphone designed and marketed by Apple Inc. It features a sleek design, advanced camera capabilities, and runs on the latest iOS operating system. With its powerful A15 Bionic chip, the iPhone 14 delivers fast performance and smooth multitasking. It also offers improved battery life, enhanced security features, and access to a wide range of apps and services through the App Store."
     },
      { id: 12, title: "Iphone 16 Pro", category: "Mobile", rating: 4.5, stock: 15, image: "https://m.media-amazon.com/images/I/61jLiCovJBL._SX679_.jpghttps://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT-oZsvOPEk3T1LYE8HMC8Z-euiUA_5Tz4oj85V4VA2CZIHxUQdoH91_7DYSv31etEcvH8EPrdFRV9FFH2cS7cG3uNs850FdpdCNdiDI2Nlk-1S4Q_hym2Rov2oBWxh4T4Qrt4i20TsXn8&usqp=CAc",
        description: "The iPhone 16 Pro is a smartphone designed and marketed by Apple Inc. It features a sleek design, advanced camera capabilities, and runs on the latest iOS operating system. With its powerful A15 Bionic chip, the iPhone 14 delivers fast performance and smooth multitasking. It also offers improved battery life, enhanced security features, and access to a wide range of apps and services through the App Store."
     },
]

const MainLoading = () => {
  return (
    <div style={{ display: "flex", gap:"20px", flexWrap: "wrap", justifyContent: "center", padding: "20px" }}>
        {product().map((item) => (
          <div key={item.id} style={{ border: "1px solid #ccc",width: "300px", padding: "10px", borderRadius: "5px", overflow: "hidden", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)" }}>
            <img src={item.image} alt={item.title} style={{ width: "100%", height: "auto" }} />
            <h3>{item.title}</h3>
            <p> <strong>Category:</strong> {item.category}</p>
            <p>{item.description}</p>
            <p>Rating: {item.rating}</p>
            <p>Stock: {item.stock}</p>
            <button style={{ padding: "0.5rem 1rem", borderRadius: "5px", border: "none", backgroundColor: "blue", color: "white" }}>Add to Cart</button>
          </div>
        ))}
    </div>
  )};
export default MainLoading;