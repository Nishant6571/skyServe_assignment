import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#2c96dc",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "40%",
          height: "30px",
          borderRadius: "10px",
          alignItems: "center",
          backgroundColor: "#85c8f5",
        }}
      >
        <Link to="/mapcomponent">Map</Link>
      </div>
    </div>
  );
};

export default Navbar;
