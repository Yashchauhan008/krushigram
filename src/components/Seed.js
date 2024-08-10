import React from "react";
import "../index.css";
const SeedsList = () => {
    const dummyCrops = [
        {
          cropName: "Wheat",
          cropQuantity: 1500,
          price: 1200,
          fertilizerUsed: {
            fertilizerName: "NPK",
            quantityUsed: 50,
            isOrganic: true,
          },
          harvestingTime: new Date("2024-09-01T00:00:00Z"),
          images: [
            "path/to/image1.jpg",
            "path/to/image2.jpg",
          ],
          cropType: "Harvested",
          sellerId: "60d5f436f47c0f001d5e4c22", // Example ObjectId of a User
        },
        {
          cropName: "Corn",
          cropQuantity: 2000,
          price: 1000,
          fertilizerUsed: {
            fertilizerName: "Urea",
            quantityUsed: 30,
            isOrganic: false,
          },
          harvestingTime: new Date("2024-10-15T00:00:00Z"),
          images: [
            "path/to/image3.jpg",
            "path/to/image4.jpg",
          ],
          cropType: "Harvested",
          sellerId: "60d5f436f47c0f001d5e4c23", // Example ObjectId of a User
        },
        {
          cropName: "Rice",
          cropQuantity: 1000,
          price: 900,
          fertilizerUsed: {
            fertilizerName: "DAP",
            quantityUsed: 40,
            isOrganic: false,
          },
          harvestingTime: new Date("2024-11-01T00:00:00Z"),
          images: [
            "path/to/image5.jpg",
            "path/to/image6.jpg",
          ],
          cropType: "Harvested",
          sellerId: "60d5f436f47c0f001d5e4c24", // Example ObjectId of a User
        },
        {
          cropName: "Soybean",
          cropQuantity: 500,
          price: 700,
          fertilizerUsed: {
            fertilizerName: "Compost",
            quantityUsed: 20,
            isOrganic: true,
          },
          harvestingTime: new Date("2024-12-15T00:00:00Z"),
          images: [
            "path/to/image7.jpg",
            "path/to/image8.jpg",
          ],
          cropType: "Harvested",
          sellerId: "60d5f436f47c0f001d5e4c25", // Example ObjectId of a User
        },
        {
          cropName: "Tomato",
          cropQuantity: 300,
          price: 400,
          fertilizerUsed: {
            fertilizerName: "Tomato Mix",
            quantityUsed: 10,
            isOrganic: false,
          },
          harvestingTime: new Date("2024-08-20T00:00:00Z"),
          images: [
            "path/to/image9.jpg",
            "path/to/image10.jpg",
          ],
          cropType: "Seed",
          sellerId: "60d5f436f47c0f001d5e4c26", // Example ObjectId of a User
        },
        {
          cropName: "Carrot",
          cropQuantity: 250,
          price: 300,
          fertilizerUsed: {
            fertilizerName: "Carrot Blend",
            quantityUsed: 15,
            isOrganic: true,
          },
          harvestingTime: new Date("2024-09-15T00:00:00Z"),
          images: [
            "path/to/image11.jpg",
            "path/to/image12.jpg",
          ],
          cropType: "Seed",
          sellerId: "60d5f436f47c0f001d5e4c27", // Example ObjectId of a User
        },
        {
          cropName: "Cucumber",
          cropQuantity: 400,
          price: 500,
          fertilizerUsed: {
            fertilizerName: "Veggie Mix",
            quantityUsed: 25,
            isOrganic: false,
          },
          harvestingTime: new Date("2024-10-10T00:00:00Z"),
          images: [
            "path/to/image13.jpg",
            "path/to/image14.jpg",
          ],
          cropType: "Seed",
          sellerId: "60d5f436f47c0f001d5e4c28", // Example ObjectId of a User
        },
      ];
      
      
    return (
        <>
    <div className="cards">
      {dummyCrops.map((crop, index) => (
        <div key={index} className="card">
          <div className="card-img">
            {/* Example of using the first image from the images array */}
            <img src={crop.images[0]} alt={`Crop ${index + 1}`} />
          </div>
          <div className="card-info">
            <p className="text-title">{crop.cropName}</p>
            <p className="text-body">
              Quantity: {crop.cropQuantity} <br />
              Price: ${crop.price} <br />
              Fertilizer Used: {crop.fertilizerUsed.fertilizerName} ({crop.fertilizerUsed.quantityUsed} kg, Organic: {crop.fertilizerUsed.isOrganic ? 'Yes' : 'No'}) <br />
              Harvesting Time: {new Date(crop.harvestingTime).toLocaleDateString()} <br />
              Type: {crop.cropType}
            </p>
          </div>
          <div className="card-footer">
            <div className="card-button">
              <svg className="svg-icon" viewBox="0 0 20 20">
                {/* Example SVG path */}
                <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default SeedsList;