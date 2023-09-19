import './scss/style.scss'
// import Login from './pages/Login'
import Body from './layouts/Body'
import NavBar from './layouts/NavBar'
import Header from './components/Header'
// import CreateAccount from './pages/CreateAccount'
import {BrowserRouter as Router} from 'react-router-dom'

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
