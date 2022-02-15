import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar--container">
      <img
        src="../images/troll-face.png"
        alt="troll face"
        className="navbar--image"
      />
      <h1 className="navbar--title">Meme Generator</h1>
      <h3 className="navbar--subtitle"> React Course - Project 3</h3>
    </nav>
  );
}
