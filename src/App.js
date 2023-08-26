import './scss/style.scss'
import {BrowserRouter as Router} from 'react-router-dom'
import NavBar from './layouts/NavBar'
import Body from './layouts/Body'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <section className='main-container d-flex position-r'>
        <div className='nav-section'>
          <NavBar />
        </div>
        <div className='landing-section'>
          <Header />
          <Body />
        </div>
      </section>
    </Router>
  )
}

export default App
