import { useState } from "react"
export default function Joke(props) {
const [isShown,setisShown]=useState(false)
function handleClick() {
    setisShown(previsShown=>!previsShown)
}
const [unread,setunread]=useState([])
    return(
        <>
        {props.setup && <p className="setup">Setup: {props.setup}</p>}
           {isShown && <p className="punchline">Punchline: { props.punchline}</p>}
            <p>upvotes:{props.upvotes} | downvotes :{props.downvotes} | Pun: {props.ispun?"yes":"no"}</p>
            {unread.length>0 && <p>Unread message: {unread.length}</p>}

            <ul>
                {props.comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>   
            <button onClick={handleClick}> {isShown?"Hide":"Show" }  punchline</button>   
               <hr />
        </>
    )
    
}