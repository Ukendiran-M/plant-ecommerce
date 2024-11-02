import React from 'react';
import { Link } from 'react-router-dom';// Import CSS if you put it in a separate CSS file

const LandingPage = () => (
  <div className="landing-page">
    <h1>Welcome to PlantHouse</h1>
    <p>PlantHouse offers a variety of beautiful houseplants to brighten up your space.</p>
    <Link to="/products">
      <button>Get Started</button>
    </Link>
  </div>
);

export default LandingPage;