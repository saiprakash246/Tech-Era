import {Link} from 'react-router-dom'
import './index.css'

const HeaderPage = () => (
  <nav className="nav-container">
    <Link to="/" className="link">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        className="page-logo"
        alt="website logo"
      />
    </Link>
  </nav>
)

export default HeaderPage
