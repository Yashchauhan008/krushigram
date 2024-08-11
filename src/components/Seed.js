import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../index.css";

const SeedsList = () => {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await Axios.get(process.env.REACT_APP_BACKEND_DOMAIN + "/crop");
        setCrops(response.data);
      } catch (err) {
        console.error("Error fetching crops:", err);
      }
    })();
  }, []);

  return (
    <div className="cards">
      {crops.map((crop, index) => (
        <div className="card" key={index}>
          <div className="card-image">
            <img src={crop.images[0]} alt={`Crop ${index + 1}`} />
          </div>
          <div className="category">
            Crop Name: {crop.cropName}
          </div>
          <div className="heading">
            Quantity: {crop.cropQuantity} <br />
            Price: ${crop.price} <br />
            Fertilizer Used: {crop.fertilizerUsed?.fertilizerName || "N/A"} 
            ({crop.fertilizerUsed?.quantityUsed || 0} kg, 
            Organic: {crop.fertilizerUsed?.isOrganic ? 'Yes' : 'No'}) <br />
            <div className="author">
              By <span className="name">Abi</span> 4 days ago
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeedsList;
