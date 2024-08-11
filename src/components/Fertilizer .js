import React, { useEffect, useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import "../index.css";
const FertilizerList = () => {
    // const dummyFertilizers = [
    //     {
    //       fertilizerName: "Organic Compost",
    //       quantity: 500, // in kg
    //       price: 100, // per kg in dollars
    //       images: [
    //         "https://example.com/images/organic_compost1.jpg",
    //         "https://example.com/images/organic_compost2.jpg",
    //       ],
    //       sellerId: "64d146a15b4fd83248e42b68", // example ObjectId
    //     },
    //     {
    //       fertilizerName: "Nitrogen Booster",
    //       quantity: 1000,
    //       price: 75,
    //       images: [
    //         "https://example.com/images/nitrogen_booster1.jpg",
    //         "https://example.com/images/nitrogen_booster2.jpg",
    //       ],
    //       sellerId: "64d146a15b4fd83248e42b68",
    //     },
    //     {
    //       fertilizerName: "Phosphate Enricher",
    //       quantity: 750,
    //       price: 80,
    //       images: [
    //         "https://example.com/images/phosphate_enricher1.jpg",
    //         "https://example.com/images/phosphate_enricher2.jpg",
    //       ],
    //       sellerId: "64d146a15b4fd83248e42b68",
    //     },
    //     {
    //       fertilizerName: "Potassium Mix",
    //       quantity: 600,
    //       price: 90,
    //       images: [
    //         "https://example.com/images/potassium_mix1.jpg",
    //         "https://example.com/images/potassium_mix2.jpg",
    //       ],
    //       sellerId: "64d146a15b4fd83248e42b68",
    //     },
    //   ];

    const [fertilizer, setFertilizer] = useState([]);
useEffect(() => {
  (async () => {
    Axios.get(process.env.REACT_APP_BACKEND_DOMAIN + "/fertilizer")
      .then((res) => {
        setFertilizer(res.data);
      })
      .catch((err) => console.log(err));
  })();
}, []);
console.log(fertilizer)
      
  return (
    <>
      <div className="cards">
  {fertilizer.map((fertilizer, index) => (
            <div class="card">
            <div class="card-image">
            {/* <img src={dummyFertilizers.images[0]} alt={`dummyFertilizers ${index + 1}`} style={{objectFit:"cover",height:'100%',width:"100%"}}/> */}
            </div>
            <div class="category">Fertilizer: {fertilizer.fertilizerName}
            </div>
            <div class="heading">
              {" "}
              Quantity: {fertilizer.quantity} kg
              <br/>
              Price: ${fertilizer.price}
              <div class="author">
                {" "}
                By <span class="name">Abi</span> 4 days ago
              </div>
            </div>
          </div>
  ))}
</div>

    </>
  );
};

export default FertilizerList;