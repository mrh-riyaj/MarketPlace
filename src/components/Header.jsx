import { Link } from "react-router-dom";
import User from "../images/User.jpg"
import Button from "./Button";

const Header = () => {
    let userImage = User;

    return(
        <div className="header-body d-flex">
            <div className="header-tittle">
                <span>Clicked</span>
            </div>
            <div className="search-bar d-flex">
                <input className="input-body" className="input-body" type="text" placeholder="Search MarketPlace"/>
                <Button type="search-icon" icon="search" />
            </div>
            <Link className="user-image" to={"/user-profile"}>
                <img src={userImage} />
            </Link>
        </div>
    )
}

export default Header