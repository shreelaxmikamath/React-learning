import reactLogo from './assets/react.svg';
function Header() {
  return(
    <header className='header'>
      <img src={reactLogo} className='header-image' alt="React logo" />
      <nav>
        <ul className='nav-list'>
          <li>pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    
    </header>
  )
}

export default Header