import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import HeaderPage from '../HeaderPage'
import CourseList from '../CourseList'
import FailurePage from '../FailurePage'

class HomePage extends Component {
  state = {courseList: [], isLoding: true, isError: false}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    try {
      const url = 'https://apis.ccbp.in/te/courses'

      const response = await fetch(url)
      console.log(response)

      if (response.ok === true) {
        const data = await response.json()
        // console.log(data)
        const rbData = data.courses.map(eachCourse => ({
          id: eachCourse.id,
          name: eachCourse.name,
          imageUrl: eachCourse.logo_url,
        }))
        this.setState({courseList: rbData, isLoding: false})
      } else {
        this.setState({isLoding: false, isError: true})
      }
    } catch (e) {
      this.setState({isLoding: false, isError: true})
    }
  }

  refresh = () => {
    this.setState({isLoding: true, isError: false})
    this.getData()
  }

  render() {
    const {courseList, isLoding, isError} = this.state
    return (
      <>
        <HeaderPage />
        <div className="home-container">
          {isLoding ? (
            <div className="loader-container" data-testid="loader">
              <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
            </div>
          ) : (
            <>
              {isError ? (
                <FailurePage refresh={this.refresh} />
              ) : (
                <>
                  <h1 className="Courses">Courses</h1>
                  <ul className="ul1">
                    {courseList.map(eachCC => (
                      <CourseList key={eachCC.id} details={eachCC} />
                    ))}
                  </ul>
                </>
              )}
            </>
          )}
        </div>
      </>
    )
  }
}

export default HomePage
