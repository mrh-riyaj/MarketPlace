import { useState } from "react";
import Button from "../components/Button";
import SidePopUp from "../components/common/SidePopUp";
import Logo from "../components/Logo";
import MenuItem from "../components/MenuItem";

const NavBar = () => {
    const [messagePopUp, setMessagePopUp] = useState(false)
    const [notificationPopUp, setNotificationPopUp] = useState(false)
    const [moreMenuPopUp, setMoreMenuPopUp] = useState(false)

    return (
        <section className="position-r">
            <div className="menu-item-body">
                <Logo />
                <MenuItem text='Home' icon='home2' path="/"/>
                <MenuItem text='Messages' icon="bubbles4" onClick={() => setMessagePopUp(true)} />
                <MenuItem text='Notification' icon='bell' onClick={() => setNotificationPopUp(true)} />
                <MenuItem text='Profile' icon="user" path="/user-profile" />
                <MenuItem text='More' icon="list2" onClick={() => setMoreMenuPopUp(true)} />    
                <MenuItem text='Create' icon="pencil2" path="create-post" />
                <Button text="demo" icon="home" iconLeft="home" iconRight="home" />
            </div>
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