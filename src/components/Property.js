import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("https://krushigram-backend.onrender.com/property/")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProperties(data);
        } else {
          console.error("Data is not an array:", data);
        }
      })
      .catch((error) => console.error("Error fetching properties:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {Array.isArray(properties) && properties.length > 0 ? (
        properties.map((property) => (
          <Link 
            to={`/property/${property._id}`} 
            key={property._id}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-bold text-gray-800">{property.name}</h3>
            <p className="text-gray-600 mt-2">Area: {property.propertyArea} {property.propertyAreaUnit}</p>
            <p className="text-gray-600 mt-2">Price: ₹{property.propertyPrice}</p>
            <p className="text-gray-600 mt-2">Soil Type: {property.soilType}</p>
            <p className="text-gray-600 mt-2">Farmable: {property.isFarmable ? "Yes" : "No"}</p>
            <p className="text-gray-600 mt-2">Address: {property.address}</p>
          </Link>
        ))
      ) : (
        <p>No properties available</p>
      )}
    </div>
  );
};

export default ProductList;
