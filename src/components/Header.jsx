import Button from "./Button";
import Inputs from "./Inputs";
import User from "../images/User.jpg"
import { useRef, useState } from "react";
import ForMore from "../components/hidden-components/ForMore"

const Header = () => {
    let userImage = User;
    const imgRef = useRef()
    const menuRef = useRef()
    const [moreOptions, setMoreOptions] = useState(false)

    window.addEventListener("click", (action) => {
        if(action.target !== imgRef.current) {
            setMoreOptions(false)
        }
    })

    return(
        <div className="header-body d-flex">
            <div className="header-tittle">
                <span>Will be dynamic text</span>
            </div>
            <div className="search-bar d-flex">
                <Inputs input placeholder="Search here..."/>
                <Button type="search-icon" icon="search" />
            </div>
            <div
                className="user-image"
                onClick={() => setMoreOptions(!moreOptions)}
            >
                <img src={userImage} ref={imgRef}/>
            </div>
            {moreOptions &&
                <ForMore
                    onRef={menuRef}
                    onClose={() => setMoreOptions(false)}
                />
            }
        </div>
    )
}

export default Header