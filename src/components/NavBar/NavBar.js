import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = ({ changeSubject }) => {
  return(
    <nav>
      <Link to="/" className="link home">
        NY Times Top Stories
      </Link>
      <div className='nav-links'>
       <Link to="/" className="link" onClick={() => changeSubject('science')}>
        Science
       </Link>
       <Link to="/" className="link" onClick={() => changeSubject('arts')}>
        Art
       </Link>
       <Link to="/" className="link" onClick={() => changeSubject('travel')}>
        Travel
       </Link>
      </div>
    </nav>
  )
}

export default NavBar;
