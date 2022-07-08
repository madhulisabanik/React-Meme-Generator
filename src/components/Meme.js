import React, { useEffect, useState } from "react";

export default function Meme() {

    const [allMeme, setAllMeme] = useState([])
    const [memeText, setMemeText] = useState({
        topText: "",
        bottomText: "",
        randImg: "https://i.imgflip.com/vdz0.jpg"
    })

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes") //external API call
            .then(res => res.json())
            .then(data => setAllMeme(data.data.memes))
    }, [])

    function getImage() {
        const randomNum = Math.floor(Math.random() * allMeme.length)
        const randUrl = allMeme[randomNum].url
        setMemeText(prevMemeText => ({
            ...prevMemeText,
            randImg: randUrl
        }))
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
                <img src={memeText.randImg} className="meme--image" alt="Meme" />
                <h2 className="meme--text top">{memeText.topText !== "" ? memeText.topText : "Hi there"}</h2>
                <h2 className="meme--text bottom">{memeText.bottomText !== "" ? memeText.bottomText : "You are Welcome!"}</h2>
            </div>
        </main>
    )
}