import reactLogo from '../assets/react.svg'
import '../index.css'
function Header(params) {
    return(
        <>
        <header className='header'><a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>ReactFacts</h1>
        </header>
        
        </>
    )
    
}

export default Header