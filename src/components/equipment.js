import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "../index.css";
const EquipmentList = () => {

  const [equipment, setEquipment] = useState([]);
  useEffect(() => {
    (async () => {
      Axios.get(process.env.REACT_APP_BACKEND_DOMAIN + "/Equipment")
        .then((res) => {
          setEquipment(res.data);
        })
        .catch((err) => console.log(err));
    })();
  }, []);
  console.log(equipment)
  return (
    <>
      <div className="cards">
        {equipment.map((equipment, index) => (
          <div class="card">
            <div class="card-image">
            <img src={equipment.images[0]} alt={`Equipment ${index + 1}`} />
            </div>
            <div class="category">
              {" "}
              Equipment Name: {equipment.equipmentName}
              </div>
            <div class="heading">
              {" "}
              Category: {equipment.category}
                <br />
                Quantity: {equipment.quantity}
                <br />
                Used Time: {equipment.equimentUsedTime} hours
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

export default EquipmentList;
