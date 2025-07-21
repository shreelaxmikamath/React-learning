export default function Joke(props) {

    return(
        <>
        {props.setup && <p className="setup">Setup: {props.setup}</p>}
            <p className="punchline">Punchline: {props.punchline}</p>
            <p>upvotes:{props.upvotes} | downvotes :{props.downvotes} | Pun: {props.ispun?"yes":"no"}</p>
            <ul>
                {props.comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>            <hr />
        </>
    )
    
}