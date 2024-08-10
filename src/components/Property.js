import React from "react";
import "../index.css";

const dummyProperties = [
  {
    propertyArea: 50,
    propertyAreaUnit: "Acres",
    address: {
      street: "123 Greenfield Road",
      city: "Springfield",
      state: "IL",
      pinCode: "62701",
    },
    propertyPrice: 250000,
    soilType: "Loam",
    isFarmable: true,
    images: [
      "path/to/image1.jpg",
      "path/to/image2.jpg",
      "path/to/image3.jpg",
    ],
    sellerId: "60d5f436f47c0f001d5e4c22",
  },
  {
    propertyArea: 75,
    propertyAreaUnit: "Acres",
    address: {
      street: "456 Farm Lane",
      city: "Riverside",
      state: "CA",
      pinCode: "92501",
    },
    propertyPrice: 400000,
    soilType: "Clay",
    isFarmable: false,
    images: ["path/to/image4.jpg", "path/to/image5.jpg"],
    sellerId: "60d5f436f47c0f001d5e4c23",
  },
  {
    propertyArea: 30,
    propertyAreaUnit: "Acres",
    address: {
      street: "789 Countryside Drive",
      city: "Hometown",
      state: "TX",
      pinCode: "75001",
    },
    propertyPrice: 150000,
    soilType: "Sandy",
    isFarmable: true,
    images: [
      "path/to/image6.jpg",
      "path/to/image7.jpg",
      "path/to/image8.jpg",
      "path/to/image9.jpg",
      "path/to/image10.jpg",
    ],
    sellerId: "60d5f436f47c0f001d5e4c24",
  },
  {
    propertyArea: 30,
    propertyAreaUnit: "Acres",
    address: {
      street: "789 Countryside Drive",
      city: "Hometown",
      state: "TX",
      pinCode: "75001",
    },
    propertyPrice: 150000,
    soilType: "Sandy",
    isFarmable: true,
    images: [
      "path/to/image6.jpg",
      "path/to/image7.jpg",
      "path/to/image8.jpg",
      "path/to/image9.jpg",
      "path/to/image10.jpg",
    ],
    sellerId: "60d5f436f47c0f001d5e4c24",
  },
  {
    propertyArea: 30,
    propertyAreaUnit: "Acres",
    address: {
      street: "789 Countryside Drive",
      city: "Hometown",
      state: "TX",
      pinCode: "75001",
    },
    propertyPrice: 150000,
    soilType: "Sandy",
    isFarmable: true,
    images: [
      "path/to/image6.jpg",
      "path/to/image7.jpg",
      "path/to/image8.jpg",
      "path/to/image9.jpg",
      "path/to/image10.jpg",
    ],
    sellerId: "60d5f436f47c0f001d5e4c24",
  },
  {
    propertyArea: 30,
    propertyAreaUnit: "Acres",
    address: {
      street: "789 Countryside Drive",
      city: "Hometown",
      state: "TX",
      pinCode: "75001",
    },
    propertyPrice: 150000,
    soilType: "Sandy",
    isFarmable: true,
    images: [
      "path/to/image6.jpg",
      "path/to/image7.jpg",
      "path/to/image8.jpg",
      "path/to/image9.jpg",
      "path/to/image10.jpg",
    ],
    sellerId: "60d5f436f47c0f001d5e4c24",
  },
  {
    propertyArea: 30,
    propertyAreaUnit: "Acres",
    address: {
      street: "789 Countryside Drive",
      city: "Hometown",
      state: "TX",
      pinCode: "75001",
    },
    propertyPrice: 150000,
    soilType: "Sandy",
    isFarmable: true,
    images: [
      "path/to/image6.jpg",
      "path/to/image7.jpg",
      "path/to/image8.jpg",
      "path/to/image9.jpg",
      "path/to/image10.jpg",
    ],
    sellerId: "60d5f436f47c0f001d5e4c24",
  },
  {
    propertyArea: 30,
    propertyAreaUnit: "Acres",
    address: {
      street: "789 Countryside Drive",
      city: "Hometown",
      state: "TX",
      pinCode: "75001",
    },
    propertyPrice: 150000,
    soilType: "Sandy",
    isFarmable: true,
    images: [
      "path/to/image6.jpg",
      "path/to/image7.jpg",
      "path/to/image8.jpg",
      "path/to/image9.jpg",
      "path/to/image10.jpg",
    ],
    sellerId: "60d5f436f47c0f001d5e4c24",
  },
  {
    propertyArea: 30,
    propertyAreaUnit: "Acres",
    address: {
      street: "789 Countryside Drive",
      city: "Hometown",
      state: "TX",
      pinCode: "75001",
    },
    propertyPrice: 150000,
    soilType: "Sandy",
    isFarmable: true,
    images: [
      "path/to/image6.jpg",
      "path/to/image7.jpg",
      "path/to/image8.jpg",
      "path/to/image9.jpg",
      "path/to/image10.jpg",
    ],
    sellerId: "60d5f436f47c0f001d5e4c24",
  },
];

const ProductList = () => {
  return (
//     <>
//       <div className="buttons">
//         <h2>Product List</h2>
//         <div data-tooltip="Price:-$20" className="button">
//           <div className="button-wrapper">
//             <div className="text">Property</div>
//             <span className="icon">
//               <svg
//                 viewBox="0 0 16 16"
//                 className="bi bi-cart2"
//                 fill="currentColor"
//                 height="16"
//                 width="16"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
//               </svg>
//             </span>
//           </div>
//         </div>
//         <div data-tooltip="Price:-$20" className="button">
//           <div className="button-wrapper">
//             <div className="text">Crops</div>
//             <span className="icon">
//               <svg
//                 viewBox="0 0 16 16"
//                 className="bi bi-cart2"
//                 fill="currentColor"
//                 height="16"
//                 width="16"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
//               </svg>
//             </span>
//           </div>
//         </div>
//         <div data-tooltip="Price:-$20" className="button">
//           <div className="button-wrapper">
//             <div className="text">Equipment</div>
//             <span className="icon">
//               <svg
//                 viewBox="0 0 16 16"
//                 className="bi bi-cart2"
//                 fill="currentColor"
//                 height="16"
//                 width="16"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
//               </svg>
//             </span>
//           </div>
//         </div>
//         <div data-tooltip="Price:-$20" className="button">
//           <div className="button-wrapper">
//             <div className="text">Fertilizer</div>
//             <span className="icon">
//               <svg
//                 viewBox="0 0 16 16"
//                 className="bi bi-cart2"
//                 fill="currentColor"
//                 height="16"
//                 width="16"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
//               </svg>
//             </span>
//           </div>
//         </div>
//         <div data-tooltip="Price:-$20" className="button">
//           <div className="button-wrapper">
//             <div className="text">Seeds</div>
//             <span className="icon">
//               <svg
//                 viewBox="0 0 16 16"
//                 className="bi bi-cart2"
//                 fill="currentColor"
//                 height="16"
//                 width="16"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
//               </svg>
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="search">
//         <input type="text" placeholder="Search..." />
//       </div>
<>
    <div className="cards">
      {dummyProperties.map((property, index) => (
        <div key={index} className="card">
          <div className="card-img">
            {/* Example of using the first image from the images array */}
            <img src={property.images[0]} alt={`Property ${index + 1}   `} />
          </div>
          <div className="card-info">
            <p className="text-title">
              Property Area: {property.propertyArea} {property.propertyAreaUnit}
            </p>
            <p className="text-body">
              Address: {property.address.street}, {property.address.city},{" "}
              {property.address.state} {property.address.pinCode}
              <br />
              Soil Type: {property.soilType}
            </p>
          </div>
          <div className="card-footer">
            <span className="text-title">Price: ${property.propertyPrice}</span>
            <div className="card-button">
              <svg className="svg-icon" viewBox="0 0 20 20">
                {/* SVG path or other details */}
              </svg>
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default ProductList;