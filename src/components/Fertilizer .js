import React from "react";
import "../index.css";
const FertilizerList = () => {
    const dummyFertilizers = [
        {
          fertilizerName: "Organic Compost",
          quantity: 500, // in kg
          price: 100, // per kg in dollars
          images: [
            "https://example.com/images/organic_compost1.jpg",
            "https://example.com/images/organic_compost2.jpg",
          ],
          sellerId: "64d146a15b4fd83248e42b68", // example ObjectId
        },
        {
          fertilizerName: "Nitrogen Booster",
          quantity: 1000,
          price: 75,
          images: [
            "https://example.com/images/nitrogen_booster1.jpg",
            "https://example.com/images/nitrogen_booster2.jpg",
          ],
          sellerId: "64d146a15b4fd83248e42b68",
        },
        {
          fertilizerName: "Phosphate Enricher",
          quantity: 750,
          price: 80,
          images: [
            "https://example.com/images/phosphate_enricher1.jpg",
            "https://example.com/images/phosphate_enricher2.jpg",
          ],
          sellerId: "64d146a15b4fd83248e42b68",
        },
        {
          fertilizerName: "Potassium Mix",
          quantity: 600,
          price: 90,
          images: [
            "https://example.com/images/potassium_mix1.jpg",
            "https://example.com/images/potassium_mix2.jpg",
          ],
          sellerId: "64d146a15b4fd83248e42b68",
        },
      ];
      
  return (
    <>
      <div className="cards">
  {dummyFertilizers.map((fertilizer, index) => (
    <div key={index} className="card">
      <div className="card-img">
        {/* Display the first image from the images array */}
        <img src={fertilizer.images[0]} alt={`Fertilizer ${index + 1}`} />
      </div>
      <div className="card-info">
        <p className="text-title">Fertilizer: {fertilizer.fertilizerName}</p>
        <p className="text-body">
          Quantity: {fertilizer.quantity} kg<br />
        </p>
      </div>
      <div className="card-footer">
        <span className="text-title">Price: ${fertilizer.price}</span>
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

export default FertilizerList;