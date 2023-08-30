import {Link} from "react-router-dom"
import image from "../images/Logo.svg"

const Logo = () => {
    return (
        <Link className="logo-body position-r" to="/">
            <span className="logo-design"></span>
            <div className="logo position-a">
                <img src={image}/>
            </div>
        </Link>
    )
}

export default Logo