import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "top text",
    bottomText: "bottom text",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const RandomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[RandomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
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
      <img src={meme.randomImage} className="meme--image" />
    </main>
  );
}
