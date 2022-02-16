import React from "react";
import memesData from "../memesData";

export default function Meme() {
  function getMemeImage() {
    const memesArray = memesData.data.memes
    const RandomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[RandomNumber].url;
    console.log(url);
    
  }

  return (
    <main>
      <form className="form">
        <input type="text" placeholder="Top text" className="input--textUp" />
        <input
          type="text"
          placeholder="Bottom text"
          className="input--textDown"
        />

        <button onClick={getMemeImage} className="generateMeme--button">
          Get a new meme image 🖼️
        </button>
      </form>
    </main>
  );
}
