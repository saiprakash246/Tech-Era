import {Route, Switch} from 'react-router-dom'
import './App.css'
import SpecificCourse from './components/SpecificCourse'
import HomePage from './components/HomePage'
import NotfoundPage from './components/NotFoundPage'

// Replace your code here

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/courses/:id" component={SpecificCourse} />
      <Route component={NotfoundPage} />
    </Switch>
  </>
)

export default App
