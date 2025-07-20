import '../index.css'
function Entry(params) {
    return(
        <article className="journal-entry">
            <div className='main-image-container'>
              <img src="/japan-img.jpg" alt="Japan" className='main-image'/>
</div>
   
            <div className='info-container'>
                <img src="/pin.png" alt="map marker icon" className='pinicon'/>
                <span>Japan</span>
                <a 
                    href="https://www.google.com/maps/place/Mount+Fuji/@35.3606422,138.7186005,17z/data=!4m14!1m6!3m5!1s0x6019619629a6f294:0x889c6631fce556b2!8m2!3d35.3606422!4d138.7273634!16zL20vMGNrc2A?entry=ttu"
                >
                    View on Google Maps
                </a>
                <h2 className="entry-title">Mount Fuji</h2>
<h5 className="trip-dates">12 Jan, 2021 - 24 Jan, 2021</h5>
<p className="entry-text">
  Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). 
  Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
  
</p>

            </div>

        </article>
    )
}

export default Entry


        

