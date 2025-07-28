import starFilled from "/star-filled.png"
import starEmpty from "/star-empty.png"
export default function Star(props){
let starIcon= props.isFilled===true?starFilled:starEmpty

    return(
        <>
        <button
                                onClick={props.onClick}
                                aria-pressed={props.isFilled}
                                aria-label={props.isFilled===true?"Add to fav":"Remove from fav"}
                                className="favorite-button"
                            >
<img
                            src={starIcon}
                            alt={props.isFilled===true?"filled star icon":"empty star icon"}
                            className="favorite"
                        />                           
                         </button>
        
        </>
    )
}