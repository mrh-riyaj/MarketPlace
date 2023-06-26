import './scss/style.scss'
import Header from './layouts/Header'
import NavBar from './layouts/NavBar'
import Body from './layouts/Body'

function App() {
  return (
    <section className='main-container d-flex'>
      <div className='nav-body'>
        <NavBar />
      </div>
      <div className='landing-body position-r'>
        <Header />
        <Body />
      </div>
    </section>
  )
}

export default App
