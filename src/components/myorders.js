import React from 'react';
import "../styles/order.css"; // Adjust the path as needed

function MyOrderList({ dummyData }) {
    const mixedDummyData = [
        // Property
        {
          type: "Property",
          propertyArea: 12,
          propertyAreaUnit: "Acres",
          address: {
            street: "789 Greenfield Blvd",
            city: "Springfield",
            state: "IL",
            pinCode: "62701"
          },
          propertyPrice: 75000,
          soilType: "Sandy",
          isFarmable: true,
          images: [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150"
          ],
          sellerId: "60d5f488cb17c65e4d6b07d1" // Example user ID
        },
      
        // Fertilizer
        {
          type: "Fertilizer",
          fertilizerName: "Organic Compost",
          quantity: 100,
          price: 50,
          images: [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150"
          ],
          sellerId: "60d5f488cb17c65e4d6b07d2" // Example user ID
        },
      
        // Equipment
        {
          type: "Equipment",
          equipmentName: "Harvester",
          category: "Harvester",
          quantity: 1,
          price: 120000,
          equimentUsedTime: 200,
          images: [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150"
          ],
          sellerId: "60d5f488cb17c65e4d6b07d3" // Example user ID
        },
      
        // Crop
        {
          type: "Crop",
          cropName: "Soybean",
          cropQuantity: 200,
          price: 2200,
          fertilizerUsed: {
            fertilizerName: "Nitrogen Fertilizer",
            quantityUsed: 40,
            isOrganic: false
          },
          harvestingTime: new Date("2024-10-01"),
          images: [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150"
          ],
          cropType: "Harvested",
          sellerId: "60d5f488cb17c65e4d6b07d4" // Example user ID
        }
      ];
      
  return (
    <div className="cards">
      {mixedDummyData.map((item, index) => (
        <div key={index} className="card">
          <div className="card-img">
            {/* Using the first image from the images array */}
            <img src={item.images[0]} alt={`${item.type} ${index + 1}`} />
          </div>
          <div className="card-info">
            <p className="text-title">
              {/* Displaying type-specific titles */}
              {item.type === 'Property' && `Property Area: ${item.propertyArea} ${item.propertyAreaUnit}`}
              {item.type === 'Fertilizer' && `Fertilizer Name: ${item.fertilizerName}`}
              {item.type === 'Equipment' && `Equipment Name: ${item.equipmentName}`}
              {item.type === 'Crop' && `Crop Name: ${item.cropName}`}
            </p>
            <p className="text-body">
              {/* Displaying type-specific details */}
              {item.type === 'Property' && (
                <>
                  Address: {item.address.street}, {item.address.city}, {item.address.state} {item.address.pinCode}
                  <br />
                  Soil Type: {item.soilType}
                </>
              )}
              {item.type === 'Fertilizer' && (
                <>
                  Quantity: {item.quantity}
                  <br />
                  Price: ${item.price}
                </>
              )}
              {item.type === 'Equipment' && (
                <>
                  Category: {item.category}
                  <br />
                  Quantity: {item.quantity}
                  <br />
                  Used Time: {item.equimentUsedTime} hours
                </>
              )}
              {item.type === 'Crop' && (
                <>
                  Quantity: {item.cropQuantity}
                  <br />
                  Price: ${item.price}
                </>
              )}
            </p>
          </div>
          <div className="card-footer">
            {/* Price or similar footer content */}
            <span className="text-title">
              {item.type === 'Property' && `Price: $${item.propertyPrice}`}
              {item.type === 'Fertilizer' && `Price: $${item.price}`}
              {item.type === 'Equipment' && `Price: $${item.price}`}
              {item.type === 'Crop' && `Price: $${item.price}`}
            </span>
            <div className="card-button">
              <svg className="svg-icon" viewBox="0 0 20 20">
                {/* SVG path or other details */}
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyOrderList;
