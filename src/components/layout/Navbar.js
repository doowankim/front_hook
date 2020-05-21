import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div
      style={{display: 'flex', justifyContent: 'space-between', margin: '10px'}}
    >
      <Link
        to="/"
        style={{fontSize: '20px', color: '#9F765E', textDecoration: 'none'}}
      >
        Home
      </Link>
      <Link
        to="/login"
        style={{fontSize: '20px', color: '#9F765E', textDecoration: 'none'}}
      >
        Login
      </Link>
    </div>
  );
};

export default Navbar;
