import {Link} from "react-router-dom"
import image from "../images/user.png"

const Logo = () => {
    return (
        <Link className="logo-body" to="/">
            <div className="logo">
                <img src={image}/>
            </div>
        </Link>
    )
}

export default Logo