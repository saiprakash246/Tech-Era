import {Link} from 'react-router-dom'
import './index.css'

const CourseList = props => {
  const {details} = props
  const {name, imageUrl, id} = details

  return (
    <Link to={`/courses/${id}`} className="link">
      <li className="li1">
        <img src={imageUrl} className="t-image" alt={name} />
        <p className="name-t">{name}</p>
      </li>
    </Link>
  )
}

export default CourseList
