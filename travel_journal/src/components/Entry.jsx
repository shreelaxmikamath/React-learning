import '../index.css'
function Entry(props) {
    return(
        <article className="journal-entry">
            <div className='main-image-container'>
              <img src={props.img} alt={props.alt} className='main-image'/>
</div>
   
            <div className='info-container'>
                <img src="/pin.png" alt="map marker icon" className='pinicon'/>
                <span>{props.country}</span>
                <a 
                    href={props.googleMapsLink}
                >
                    View on Google Maps
                </a>
                <h2 className="entry-title">{props.title}</h2>
<h5 className="trip-dates">{props.dates}</h5>
<p className="entry-text">{props.text}</p>

            </div>

        </article>
    )
}

export default Entry


        

