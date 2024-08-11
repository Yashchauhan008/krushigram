import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { productId } = useParams(); // Assuming you're passing the product ID via route params
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch product details based on the productId
    fetch(`https://krushigram-backend.onrender.com/property/${productId}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching product details:", error);
        setError("Failed to fetch product details.");
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        {/* Product Image */}
        <div className="col-md-6">
          <img 
            src={product?.images || "https://t3.ftcdn.net/jpg/05/35/50/38/360_F_535503848_8CPJTV2aALt3urNrDfZphQXPdk1Vl1Zr.jpg"} 
            alt={product?.name || "Product Image"} 
            className="img-fluid rounded shadow-sm"
          />
        </div>

        {/* Product Details */}
        <div className="col-md-6">
          <h2 className="fw-bold">{product?.name || "Product Name"}</h2>
          <p className="text-muted">Category: {product?.category || "Agriculture Tools"}</p>
          <h4 className="text-success fw-bold">₹{product?.price || "5000"}</h4>

          <p className="mt-4">
            {product?.description || "This is a brief description of the product, highlighting key features and benefits."}
          </p>

          {/* Features List */}
          <ul className="list-unstyled mt-3">
            <li><strong>Feature 1:</strong> {product?.feature1 || "High durability and quality."}</li>
            <li><strong>Feature 2:</strong> {product?.feature2 || "Suitable for all types of soil."}</li>
            <li><strong>Feature 3:</strong> {product?.feature3 || "Easy to use and maintain."}</li>
          </ul>

          {/* Add to Cart Button */}
          <button className="btn btn-primary btn-lg mt-4">Add to Cart</button>
        </div>
      </div>

      {/* Product Description and Reviews */}
      <div className="row mt-5">
        <div className="col-md-8">
          <h3>Product Description</h3>
          <p>{product?.detailedDescription || "Here you can provide a detailed description of the product, including its usage, benefits, and any additional information that might be relevant to the buyer."}</p>
        </div>
        <div className="col-md-4">
          <h3>Customer Reviews</h3>
          <p><strong>John Doe:</strong> Great product! Highly recommend.</p>
          <p><strong>Jane Smith:</strong> Good value for the money.</p>
        </div>
      </div>

      {/* Related Products */}
      <div className="row mt-5">
        <h3>Related Products</h3>
        <div className="d-flex justify-content-between">
          {/* Placeholder related products */}
          <div className="card shadow-sm" style={{ width: "18rem" }}>
            <img 
              src="https://t3.ftcdn.net/jpg/05/35/50/38/360_F_535503848_8CPJTV2aALt3urNrDfZphQXPdk1Vl1Zr.jpg" 
              className="card-img-top" 
              alt="Related Product 1"
            />
            <div className="card-body">
              <h5 className="card-title">Related Product 1</h5>
              <p className="card-text">₹4000</p>
              <a href="#" className="btn btn-primary">View Details</a>
            </div>
          </div>
          {/* Additional related products can be added here */}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
