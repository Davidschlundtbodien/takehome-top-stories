import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return(
    <nav>
      <h1><Link to="/" className="link">Take Home Top Stories</Link></h1>
      <div className='nav-links'>
      </div>
    </nav>
  )
}

export default NavBar;
