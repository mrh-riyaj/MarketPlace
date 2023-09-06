import './scss/style.scss'
import {BrowserRouter as Router} from 'react-router-dom'
// import CreateAccount from './pages/CreateAccount'
import Header from './components/Header'
import NavBar from './layouts/NavBar'
// import Login from './pages/Login'
import Body from './layouts/Body'

function App() {
  return (
    <Router>
      {/* <CreateAccount /> */}
      {/* <Login /> */}
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
