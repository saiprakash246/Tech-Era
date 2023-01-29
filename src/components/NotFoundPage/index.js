import './index.css'
import HeaderPage from '../HeaderPage'

const NotfoundPage = () => (
  <>
    <HeaderPage />
    <div className="notfound-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
        className="n-image"
        alt="not found"
      />
      <h1 className="n-heading">Page Not Found</h1>
      <p className="n-para">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  </>
)

export default NotfoundPage
