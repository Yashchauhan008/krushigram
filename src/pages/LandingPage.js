import React from "react";
import "../index.css";
import { SignInButton } from "@clerk/clerk-react";

const LandingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div id="HomePage" className="hero-section text-center text-white">
        <div className="overlay">
          <div className="container">
            <h1 className="fw-bold fs-1 mb-3 animate-fade-in">
              The All-in-One Farm to Fork Platform
            </h1>
            <p className="lead mb-4 animate-slide-up">
              Unlock the power of local food. Start your free trial today to see
              why farms, food hubs, grocers, and restaurants choose Local Line
              as their exclusive local food commerce platform.
            </p>
            <SignInButton afterSignInUrl="/home">
              <button className="bg-blue-500 btn-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded btn-lg animate-bounce">
                Sign In
              </button>
            </SignInButton>
          </div>
        </div>
      </div>

      {/* E-commerce Section */}
      {/* <div className="text-center my-5 animate-slide-left">
        <h2 className="fw-bold">E-commerce built for farms, food hubs & more</h2>
        <p className="text-muted">Simplify your operations, grow your business, and stay connected with your community.</p>
      </div>

      {/* Cards Section */}
      {/* <div className="container my-4" id="cards">
        <div className="row justify-content-center">
          {[
            { 
              title: 'For farms', 
              text: 'Farming is hard enough as it is. You need a platform that makes your life easier. No matter what you grow, use Local Line to increase your sales and your profits.', 
              img: 'https://cdn.prod.website-files.com/65ddf7b99a8b454b93dd2a82/65e5d1cf9b4ab1a04b2699fc_localline-for-farms-p-500.webp', 
              alt: 'For farms' 
            },
            { 
              title: 'For food hubs', 
              text: 'Aggregating local food is complex. There\'s a lot of moving parts. Our platform has the features your food hub needs to stay on top of it all with ease!', 
              img: 'https://cdn.prod.website-files.com/65ddf7b99a8b454b93dd2a82/65e5d1e7026ff348f2f626e3_localline-for-food-hubs-p-500.webp', 
              alt: 'For food hubs' 
            },
            { 
              title: 'For buyers', 
              text: 'Looking for new suppliers? Search thousands of farms and more than 200,000 products across all categories. Use Local Line to scale your local food procurement.', 
              img: 'https://cdn.prod.website-files.com/65ddf7b99a8b454b93dd2a82/65e5d1fa4ec718045936c95f_localline-for-buyers-p-500.webp', 
              alt: 'For buyers' 
            }
          ].map((card, index) => (
            <div className="col-md-4 mb-4 animate-zoom-in" key={index}>
              <div className="card h-100 shadow-lg">
                <img src={card.img} className="card-img-top" alt={card.alt} />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Agricultural Equipment Section */}
      {/* <div className="container my-5 animate-slide-right">
        <h3 className="text-center fw-bold mb-4">Discover Agricultural Equipment</h3>
        <div className="row">
          <div className="col-lg-3">
            <div className="card border-0 hover-shine hover-zoom-in banner banner-04 fadeIn animated" data-animate="fadeIn">
              <div className="card-img bg-img-cover-center" style={{backgroundImage: 'url(https://www.kisaantrade.com/public/uploads/all/xpOlyVgizHP2amPZGjWNeeJBYs9UoCF1OyY4Rz4j.png)'}} alt="Agri Machinery & Tools" title="Agri Machinery & Tools">
              </div>
              <div className="card-img-overlay p-2 d-inline-flex flex-column justify-content-end text-center">
                <h2 className="text-white">Agri Machinery & Tools</h2>
                <div>
                  <a href="https://www.kisaantrade.com/agri-machinery-tools-pjhgb" className="ml-auto mr-0 btn btn-primary btn-sm shadow-md">View More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row sub_c_a">
              {[
                {
                  link: 'https://www.kisaantrade.com/agri-machinery-tools-pjhgb/agriculture-equipments-eiojs',
                  img: 'https://www.kisaantrade.com/public/uploads/all/2IBjCOERIaGhICm8nFZFmGWO49uEf3EICzNkyXqQ.png',
                  title: 'Agriculture Equipments'
                },
                {
                  link: 'https://www.kisaantrade.com/agri-machinery-tools-pjhgb/harvesting-machinery-ogcv5',
                  img: 'https://www.kisaantrade.com/public/uploads/all/9dhVoy11pE3mSM21t8lXPZ1Gsl842HkeJcfU1bUR.png',
                  title: 'Harvesting Machinery'
                },
                {
                  link: 'https://www.kisaantrade.com/agri-machinery-tools-pjhgb/drone-sprayer-wpufn',
                  img: 'https://www.kisaantrade.com/public/uploads/all/4xwG6xfbnT3nWPQxgLx4iWeSbyqOht7qi34efvTq.png',
                  title: 'Drone Sprayer'
                },
                {
                  link: 'https://www.kisaantrade.com/agri-machinery-tools-pjhgb/drone-sprayer-wpufn',
                  img: 'https://www.kisaantrade.com/seeds-ukflf/grass-seeds-up2jx',
                  title: 'Grass Seeds'
                },
                {
                  link: 'https://www.kisaantrade.com/agri-machinery-tools-pjhgb/drone-sprayer-wpufn',
                  img: 'https://www.kisaantrade.com/public/uploads/all/rEM0so00uQ28a2tDSdOYEy0gbhg1ps9LhiAJUSUk.png',
                  title: 'Water Pumps'
                },
              ].map((item, index) => (
                <div className="col-md-4 mb-4 animate-fade-in" key={index}>
                  <a className="dropdown-link" href={item.link}>
                    <img className="img-thumbnail height-50" src={item.img} alt={item.title} title={item.title} /> {item.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default LandingPage;
