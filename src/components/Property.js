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
      <Link to="/detailPage">
        <div className="cards">
          {properties.map((property, index) => (
            <div class="card">
              <div class="card-image">
              <img src={property.images[0]} alt={`Property ${index + 1}`} style={{objectFit:"cover",height:'100%',width:"100%"}}/>
              </div>
              <div class="category">     Property Area: {property.propertyArea} {property.propertyAreaUnit}
              </div>
              <div class="heading">
                {" "}
                {/* Address: {property.address.street}, {property.address.city},{" "}
    {property.address.state} {property.address.pinCode} */}
                <div class="author">
                  {" "}
                  By <span class="name">Abi</span> 4 days ago
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
