import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/">Home</Link> | 
      <Link to="/search">Search</Link> | 
      <Link to="/lists">My Lists</Link>
    </div>
  );
}

export default Header;
