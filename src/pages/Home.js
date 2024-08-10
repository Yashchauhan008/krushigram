import React, { useEffect, useState } from "react";
import ProductList from "../components/Property";
import EquipmentList from "../components/equipment";
import FertilizerList from "../components/Fertilizer ";
import SeedsList from "../components/Seed";

const Home = () => {
  const [category, setCategory] = useState("all");

  useEffect(() => {
    // Any side effects related to the category change can go here
  }, [category]);

  return (
    <>
      <div className="home">
        {/* property button */}

        <div className="buttons">
          <div className="search">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="btn-home">
            <div
              data-tooltip="Price:-$20"
              className="button"
              onClick={() => setCategory("property")}
            >
              <div className="button-wrapper">
                <div className="text">Property</div>
                <span className="icon">
                  <svg
                    viewBox="0 0 16 16"
                    className="bi bi-cart2"
                    fill="currentColor"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                  </svg>
                </span>
              </div>
            </div>

            {/* Equipment button */}
            <div
              data-tooltip="Price:-$20"
              className="button"
              onClick={() => setCategory("equipment")}
            >
              <div className="button-wrapper">
                <div className="text">Equipment</div>
                <span className="icon">
                  <svg
                    viewBox="0 0 16 16"
                    className="bi bi-cart2"
                    fill="currentColor"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                  </svg>
                </span>
              </div>
            </div>

            {/* fertilizer button */}
            <div
              data-tooltip="Price:-$20"
              className="button"
              onClick={() => setCategory("fertilizer")}
            >
              <div className="button-wrapper">
                <div className="text">Fertilizer</div>
                <span className="icon">
                  <svg
                    viewBox="0 0 16 16"
                    className="bi bi-cart2"
                    fill="currentColor"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                  </svg>
                </span>
              </div>
            </div>

            {/* Seeds button */}
            <div
              data-tooltip="Price:-$20"
              className="button"
              onClick={() => setCategory("seeds")}
            >
              <div className="button-wrapper">
                <div className="text">Seeds</div>
                <span className="icon">
                  <svg
                    viewBox="0 0 16 16"
                    className="bi bi-cart2"
                    fill="currentColor"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr />

        {category === "all" && (
          <>
            <ProductList />
            <EquipmentList />
            <FertilizerList />
            <SeedsList />
          </>
        )}
        {category === "fertilizer" && (
          <>
            <FertilizerList />
          </>
        )}
        {category === "property" && (
          <>
            <ProductList />
          </>
        )}
        {category === "equipment" && (
          <>
            <EquipmentList />
          </>
        )}
        {category === "seeds" && (
          <>
            <SeedsList />
          </>
        )}
      </div>
    </>
  );
};

export default Home;
