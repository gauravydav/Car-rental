import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to Car Rental App</h1>
      <Link to="/booking">Book a Vehicle</Link>
    </div>
  );
}

export default HomePage;
