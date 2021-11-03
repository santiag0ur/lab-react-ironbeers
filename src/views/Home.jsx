import React from 'react';
import { Link } from 'react-router-dom';

const HomeView = () => {
  return (
    <div>
      <Link to="/random-beer">Random Beer</Link>
      <Link to="/beers">List All Beers</Link>
      <Link to="/new-beer">New Beer</Link>
    </div>
  );
};

export default HomeView;
