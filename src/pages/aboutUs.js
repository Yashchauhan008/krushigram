import React from 'react';

const AboutUs = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* About Us Section */}
        <div className="col-md-6">
          <h1 className="fw-bold text-green-800">About Us</h1>
          <p className="mt-4">
            Welcome to KrushiGram, where we are dedicated to connecting farmers with the resources they need to succeed. Our mission is to provide a comprehensive platform that enables farmers to easily sell their crops, seeds, land, and equipment to a wide audience.
          </p>
          <p>
            At KrushiGram, we believe in empowering farmers with the tools and opportunities they need to thrive. Our platform is designed to streamline the selling process, providing a user-friendly experience that helps you reach potential buyers efficiently.
          </p>
          <p>
            We are committed to supporting the agricultural community and fostering a sustainable future through innovation and collaboration.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="col-md-6">
          <h2 className="fw-bold text-green-800">Our Mission</h2>
          <p className="mt-4">
            Our mission is to revolutionize the agricultural industry by providing a platform that enhances the efficiency of buying and selling agricultural products. We aim to bridge the gap between farmers and buyers, promoting fair trade and sustainable practices.
          </p>

          <h2 className="fw-bold text-green-800 mt-4">Our Vision</h2>
          <p className="mt-4">
            We envision a world where every farmer has access to the resources they need to grow their business and where buyers can easily find quality agricultural products. Our vision is to be the leading platform in the agricultural sector, fostering innovation and growth.
          </p>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="row mt-5">
        <h2 className="fw-bold text-green-800">Meet Our Team</h2>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 1"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">John Doe</h5>
              <p className="card-text">Founder & CEO</p>
              <p>John is passionate about agriculture and technology, and he leads our team with a vision to transform the industry.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 2"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Jane Smith</h5>
              <p className="card-text">Chief Technology Officer</p>
              <p>Jane oversees our tech development and ensures our platform remains innovative and user-friendly.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 3"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Michael Brown</h5>
              <p className="card-text">Marketing Director</p>
              <p>Michael is responsible for our marketing strategies, helping us reach a wider audience and grow our platform.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
