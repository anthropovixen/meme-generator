import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const RandomNumber = Math.floor(Math.random() * memesArray.length);

    setMemeImage(memesArray[RandomNumber].url);
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="input--textUp" />
        <input
          type="text"
          placeholder="Bottom text"
          className="input--textDown"
        />

        <button onClick={getMemeImage} className="generateMeme--button">
          Get a new meme image 🖼️
        </button>
      </div>
      <img src={memeImage} />
    </main>
  );
}
