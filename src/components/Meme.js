import memesData from "../memesData.js"
import React, { useState } from "react";

export default function Meme() {

    const [memeUrl, setMemeUrl] = useState("")

    function getImage() {
        const memesArray = memesData.data.memes;
        const randomNum = Math.floor(Math.random() * memesArray.length)
        setMemeUrl(memesArray[randomNum].url)
    }

    return (
        <main>
            <div className="meme--form">
                <input type="text" className="meme--input-text" placeholder="Top Text" />
                <input type="text" className="meme--input-text" placeholder="Bottom Text" />
                <button className="meme--btn" onClick={getImage}>Get a new meme image</button>
            </div>
            <img src={memeUrl} className="meme--image" alt="Meme" />
        </main>
    )
}