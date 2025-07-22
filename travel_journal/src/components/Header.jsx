
import '../index.css'
function Header(params) {
    return(
        <>
        <div className='header'>
            <div className='header-box'>    
        <img src="/planet-earth.png" alt="globe" width="50px" height="50px"/>
        <h2 className='header-title' >My travel journal</h2>
            </div>
        </div>
        </>
    )
}

export default Header