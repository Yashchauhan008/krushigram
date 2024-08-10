import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

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
      "https://t3.ftcdn.net/jpg/05/35/50/38/360_F_535503848_8CPJTV2aALt3urNrDfZphQXPdk1Vl1Zr.jpg",
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
    images: ["https://thumbs.dreamstime.com/b/empty-plot-land-empty-plot-land-void-any-structures-vegetation-represents-blank-canvas-awaiting-transformation-280189225.jpg", "path/to/image5.jpg"],
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
      "https://media.istockphoto.com/id/1484178659/photo/land-plot-management-real-estate-concept-with-a-vacant-land-available-for-building.jpg?s=612x612&w=0&k=20&c=6wOxXJZ_Kb-J5mrItGlHBuxdH_ent5lBK20M5V7LOII=",
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
    
    <>
    <Link to="/detailPage">
    <div className="cards">
      {dummyProperties.map((property, index) => (
        <div key={index} className="card">
          <div className="card-img">
            {/* Example of using the first image from the images array */}
            <img src={property.images[0]} alt={`Property ${index + 1}`} style={{width:"250px"}} />
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
      </Link>
    </>
  );
};

export default ProductList;