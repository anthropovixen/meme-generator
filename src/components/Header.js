import React from "react";

export default function Header() {
  return (
    <nav className="header">
      <img
        src="../images/troll-face.png"
        alt="troll face"
        className="header--image"
      />
      <h1 className="header--title">Meme Generator</h1>
      <h3 className="header--subtitle"> React Course - Project 3</h3>
    </nav>
  );
}
