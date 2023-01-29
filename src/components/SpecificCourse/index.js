import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import HeaderPage from '../HeaderPage'
import FailurePage from '../FailurePage'

class SpecificPage extends Component {
  state = {specificData: [], isLoding: true, isError: false}

  componentDidMount() {
    this.getOneData()
  }

  getOneData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/te/courses/${id}`
    const response = await fetch(url)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const courseData = {
        id: data.course_details.id,
        name: data.course_details.name,
        description: data.course_details.description,
        imageUrl: data.course_details.image_url,
      }

      console.log(courseData)
      this.setState({specificData: courseData, isLoding: false})
    } else {
      this.setState({isLoding: false, isError: true})
    }
  }

  refresh = () => {
    this.getOneData()
  }

  render() {
    const {specificData, isLoding, isError} = this.state
    const {name, description, imageUrl} = specificData
    return (
      <>
        <HeaderPage />
        {isLoding ? (
          <div className="loader-container" data-testid="loader">
            <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
          </div>
        ) : (
          <>
            {isError ? (
              <FailurePage refresh={this.refresh} />
            ) : (
              <div className="specific-container">
                <div className="left-container">
                  <img src={imageUrl} className="S-image" alt={name} />
                </div>
                <div className="right-container">
                  <h1 className="s-heading">{name}</h1>
                  <p className="s-para">{description}</p>
                </div>
              </div>
            )}
          </>
        )}
      </>
    )
  }
}

export default SpecificPage
