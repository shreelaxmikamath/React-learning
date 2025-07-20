
import '../index.css'
function Header(params) {
    return(
        <>
        <div className='header'>
            <div className='header-box'>    
        <img src="/planet-earth.png" alt="globe" width="60px" height="70px"/>
        <h2 className='header-title' >My travel journal</h2>
            </div>
        </div>
        </>
    )
}

export default Header