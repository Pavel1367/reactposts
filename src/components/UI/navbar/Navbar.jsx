import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
export default function Navbar() {
  return (
    <div className="navbar_wrapper">
      <div className="navbar">
        <div className="navbar__links">
          <Link to="/about">
            <Button>About</Button>
          </Link>
          <Link to="/posts">
            <Button>Posts</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
