import React from 'react';

const DetailPage = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Product Image */}
        <div className="col-md-6">
          <img 
            src="https://t3.ftcdn.net/jpg/05/35/50/38/360_F_535503848_8CPJTV2aALt3urNrDfZphQXPdk1Vl1Zr.jpg" 
            alt="" 
            className="img-fluid rounded shadow-sm"
          />
        </div>

        {/* Product Details */}
        <div className="col-md-6">
          <h2 className="fw-bold">Product Name</h2>
          <p className="text-muted">Category: Agriculture Tools</p>
          <h4 className="text-success fw-bold">5000 </h4>

          <p className="mt-4">
            This is a brief description of the product, highlighting key features and benefits. It is designed to attract customers and provide essential information about the product.
          </p>

          {/* Features List */}
          <ul className="list-unstyled mt-3">
            <li><strong>Feature 1:</strong> High durability and quality.</li>
            <li><strong>Feature 2:</strong> Suitable for all types of soil.</li>
            <li><strong>Feature 3:</strong> Easy to use and maintain.</li>
          </ul>

          {/* Add to Cart Button */}
          <button className="btn btn-primary btn-lg mt-4">Add to Cart</button>
        </div>
      </div>

      {/* Product Description and Reviews */}
      <div className="row mt-5">
        <div className="col-md-8">
          <h3>Product Description</h3>
          <p>
            Here you can provide a detailed description of the product, including its usage, benefits, and any additional information that might be relevant to the buyer. You can also include images or videos to further showcase the product.
          </p>
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
        {/* Add cards or carousel for related products here */}
      </div>
    </div>
  );
};

export default DetailPage;
