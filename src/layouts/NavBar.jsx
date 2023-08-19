import { useState } from "react";
import PopUp from "../components/common/PopUp";
import Logo from "../components/Logo";
import MenuItem from "../components/MenuItem";

const NavBar = () => {
    const [isPopup, setIsPopup] = useState(false)

    return (
        <section className="position-r">
            <div className="menu-item-body">
                <Logo />
                <MenuItem text='Home' icon='home' path="/home"/>
                <MenuItem text='Search' icon='search'/>
                <MenuItem text='Explore' icon='safari' />
                <MenuItem text='Reels' />
                <MenuItem text='Messages' />
                <MenuItem text='Notification' icon='notification' />
                <MenuItem text='Create' />
                <MenuItem text='Profile' path="/user-profile" />
                <div className="more-item position-a">
                    <MenuItem text='More' icon="menu" onClick={() => setIsPopup(true)} />
                </div>     
            </div>
            {isPopup && <PopUp content="Content"
                onClose={() => setIsPopup(false)}
                onSubmit={() => {}} title="Profile Edit"
            />}
        </section>
    )
}

export default NavBar