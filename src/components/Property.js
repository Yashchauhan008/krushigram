// import React from "react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "../index.css";



const ProductList = () => {
  
const [properties, setProperties] = useState([]);
useEffect(() => {
  (async () => {
    Axios.get(process.env.REACT_APP_BACKEND_DOMAIN + "/property")
      .then((res) => {
        setProperties(res.data);
      })
      .catch((err) => console.log(err));
  })();
}, []);
console.log(properties)

  return (
    
    <>
    
    <div className="cards">
      {properties.map((property, index) => (
        <Link to={`/property/${property._id}`} >
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
              Address: {property.address}
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
        </Link>
      ))}
      </div>
      
    </>
  );
};

export default ProductList;
