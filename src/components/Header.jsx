import { Link } from "react-router-dom";
import User from "../images/User.jpg"
import { useState } from "react";
import Button from "./Button";
import ForMore from "../components/hidden-components/ForMore"

const Header = () => {
    let userImage = User;
    const [moreOptions, setMoreOptions] = useState(false)

    return(
        <div className="header-body d-flex">
            <div className="header-tittle">
                <span>Clicked</span>
            </div>
            <div className="search-bar d-flex">
                <input className="input-body" className="input-body" type="text" placeholder="Search MarketPlace"/>
                <Button type="search-icon" icon="search" />
            </div>
            <Link className="user-image" onClick={() => setMoreOptions(true)}>
                <img src={userImage} />
            </Link>
            {moreOptions && <ForMore onClose={() => setMoreOptions(false)}/>}
        </div>
    )
}

export default Header