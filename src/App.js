import './scss/style.scss'
import NavBar from './layouts/NavBar'
import Body from './layouts/Body'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <section className='main-container d-flex'>
        <div className='nav-section'>
          <NavBar />
        </div>
        <div className='landing-section'>
          <Body />
        </div>
      </section>
    </Router>
  )
}

export default App
