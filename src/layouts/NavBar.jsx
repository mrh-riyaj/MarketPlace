import { useState } from "react";
import SidePopUp from "../components/common/SidePopUp";
import Logo from "../components/Logo";
import MenuItem from "../components/MenuItem";

const NavBar = () => {
    const [moreMenuPopUp, setMoreMenuPopUp] = useState(false)
    const [searchPopUp, setSearchPopUp] = useState(false)
    const [messagePopUp, setMessagePopUp] = useState(false)
    const [notificationPopUp, setNotificationPopUp] = useState(false)

    return (
        <section className="position-r">
            <div className="menu-item-body">
                <Logo />
                <MenuItem text='Home' icon='home2' path="/"/>
                <MenuItem text='Search' icon='search' onClick={() => setSearchPopUp(true)} />
                <MenuItem text='Explore' icon='compass2' />
                <MenuItem text='Reels' icon="home" />
                <MenuItem text='Messages' icon="bubbles4" onClick={() => setMessagePopUp(true)} />
                <MenuItem text='Notification' icon='bell' onClick={() => setNotificationPopUp(true)} />
                <MenuItem text='Create' icon="pencil2" />
                <MenuItem text='Profile' icon="user" path="/user-profile" />
                <div className="more-item position-a">
                    <MenuItem text='More' icon="list2" onClick={() => setMoreMenuPopUp(true)} />
                </div>     
            </div>
            {searchPopUp && <SidePopUp 
                title="Search"
                SidePopUpFull
                onClose={() => setSearchPopUp(false)}
            />}
            {messagePopUp && <SidePopUp 
                title="Messages"
                SidePopUpFull
                onClose={() => setMessagePopUp(false)}
            />}
            {notificationPopUp && <SidePopUp 
                title="Notification"
                SidePopUpFull
                onClose={() => setNotificationPopUp(false)}
            />}
            {moreMenuPopUp && <SidePopUp 
                title="More"
                content={
                    <div>
                        <MenuItem text="Settings" icon="cog" />
                        <MenuItem text="Your activity" icon="history" />
                        <MenuItem text="Saved" icon="bookmarks" />
                        <MenuItem text="Keyboard shortcuts" icon="social-media" />
                        <MenuItem text="Switch appearance" icon ="sun"/>
                        <MenuItem text="Report a problem" icon="warning" />
                        <MenuItem text="Switch accounts" icon="exit" />
                        <MenuItem text="Lock out" icon="evil"/>
                    </div>
                }
                SidePopUpShort
                onClose={() => setMoreMenuPopUp(false)}
            />}
        </section>
    )
}

export default NavBar