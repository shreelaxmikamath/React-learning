
import React, { useState ,useEffect} from "react";
export default function Main(props) {
    const [meme, setmeme] = useState({
            topText:"One does not simply",
            bottomText:"Walk into Mordor",
            imageUrl:"http://i.imgflip.com/1bij.jpg"
        });
    const [allMemes, setallMemes] = useState([]);
        React.useEffect(() => {
             fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setallMemes(data.data.memes))
    
        }, []);
    function handleChange(event){
        const {value,name}=event.currentTarget 
        setmeme(prevmeme=>({...prevmeme,[name]:value}
    ))}
    
    function generateImg() {
        setmeme(prevmeme=>({...prevmeme,
            imageUrl:allMemes[Math.floor(Math.random()*101)]["url"]}))
    }
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </label>
                <button onClick={generateImg}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    )
}