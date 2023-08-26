import { Link } from "react-router-dom";
import User from "../images/User.jpg"

const Header = () => {
    let userImage = User;

    return(
        <div className="header-body d-flex">
            <span className="header-tittle">Market place</span>
            <Link className="user-image" to={"/user-profile"}>
                <img src={userImage} />
            </Link>
        </div>
    )
}

export default Header