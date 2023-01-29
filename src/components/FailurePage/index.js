import './index.css'

const FailurePage = props => {
  const {refresh} = props

  const newFresh = () => {
    refresh()
  }

  return (
    <>
      <div className="failure-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
          className="f-image"
          alt="failure view"
        />
        <h1 className="f-heading">Oops! Something Went Wrong</h1>
        <p className="f-para">
          We cannot seem to find the page you are looking for
        </p>
        <button className="f-button" type="button" onClick={newFresh}>
          Retry
        </button>
      </div>
    </>
  )
}

export default FailurePage
