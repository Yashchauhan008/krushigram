import React from "react";
import "../index.css";
const EquipmentList = () => {
  const dummyEquipments = [
    {
      equipmentName: "John Deere Tractor",
      category: "Tractor",
      quantity: 5,
      price: 75000,
      equimentUsedTime: 120,
      images: [
        "https://example.com/images/john-deere-tractor-1.jpg",
        "https://example.com/images/john-deere-tractor-2.jpg",
      ],
      sellerId: "64a62cefcabdf109e65a4601",
    },
    {
      equipmentName: "Heavy-Duty Plough",
      category: "Plough",
      quantity: 10,
      price: 1500,
      equimentUsedTime: 50,
      images: [
        "https://example.com/images/heavy-duty-plough-1.jpg",
        "https://example.com/images/heavy-duty-plough-2.jpg",
      ],
      sellerId: "64a62cefcabdf109e65a4602",
    },
    {
      equipmentName: "Modern Harvester",
      category: "Harvester",
      quantity: 2,
      price: 120000,
      equimentUsedTime: 200,
      images: [
        "https://example.com/images/modern-harvester-1.jpg",
        "https://example.com/images/modern-harvester-2.jpg",
      ],
      sellerId: "64a62cefcabdf109e65a4603",
    },
    {
      equipmentName: "Precision Seeder",
      category: "Seeder",
      quantity: 8,
      price: 3000,
      equimentUsedTime: 30,
      images: [
        "https://example.com/images/precision-seeder-1.jpg",
        "https://example.com/images/precision-seeder-2.jpg",
      ],
      sellerId: "64a62cefcabdf109e65a4604",
    },
  ];

  return (
    <>
      <div className="cards">
        {dummyEquipments.map((equipment, index) => (
          <div key={index} className="card">
            <div className="card-img">
              {/* Using the first image from the images array */}
              <img src={equipment.images[0]} alt={`Equipment ${index + 1}`} />
            </div>
            <div className="card-info">
              <p className="text-title">
                Equipment Name: {equipment.equipmentName}
              </p>
              <p className="text-body">
                Category: {equipment.category}
                <br />
                Quantity: {equipment.quantity}
                <br />
                Used Time: {equipment.equimentUsedTime} hours
              </p>
            </div>
            <div className="card-footer">
              <span className="text-title">Price: ${equipment.price}</span>
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

export default EquipmentList;