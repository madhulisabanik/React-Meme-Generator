import memesData from "../memesData.js"
import React, { useState } from "react";

export default function Meme() {

    const [memeUrl, setMemeUrl] = useState("https://i.imgflip.com/vdz0.jpg") //default image for first time page load
    const [memeText, setMemeText] = useState({
        topText: "",
        bottomText: ""
    })

    function getImage() {
        const memesArray = memesData.data.memes;
        const randomNum = Math.floor(Math.random() * memesArray.length)
        setMemeUrl(memesArray[randomNum].url)
    }

    function handleChange(event){
        const {name, value} = event.target
        setMemeText(prevMemeText => ({
            ...prevMemeText,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="meme--form">
                <input 
                    type="text" 
                    className="meme--input-text" 
                    placeholder="Top Text" 
                    name="topText"
                    value={memeText.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    className="meme--input-text" 
                    placeholder="Bottom Text" 
                    name="bottomText"
                    value={memeText.bottomText}
                    onChange={handleChange}
                />
                <button className="meme--btn" onClick={getImage}>Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={memeUrl} className="meme--image" alt="Meme" />
                <h2 className="meme--text top">{memeText.topText !== "" ? memeText.topText : "Hi there"}</h2>
                <h2 className="meme--text bottom">{memeText.bottomText !== "" ? memeText.bottomText : "You are Welcome!"}</h2>
            </div>
        </main>
    )
}