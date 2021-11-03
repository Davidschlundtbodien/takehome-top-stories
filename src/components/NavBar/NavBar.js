import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return(
    <nav>
      <Link to="/" className="link home">
        NY Times Top Stories
      </Link>
      <div className='nav-links'>
       <Link to="/" className="link">
        Science
       </Link>
       <Link to="/" className="link">
        Technology
       </Link>
       <Link to="/" className="link">
        Travel
       </Link>
      </div>
    </nav>
  )
}

export default NavBar;
