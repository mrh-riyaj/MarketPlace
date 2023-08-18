import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "../pages/Home"
import UserProfile from "../pages/UserProfile"

const Routing = () => {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/user-profile" component={UserProfile} />
        </Router>
    )
}

export default Routing