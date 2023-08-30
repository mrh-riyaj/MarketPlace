import { useState } from "react";
import SidePopUp from "../components/common/SidePopUp";
import Filter from "../components/Filter";
import MenuItem from "../components/MenuItem";

const NavBar = () => {
    const [messagePopUp, setMessagePopUp] = useState(false)
    const [notificationPopUp, setNotificationPopUp] = useState(false)
    const [moreMenuPopUp, setMoreMenuPopUp] = useState(false)

    return (
        <section className="position-r">
            <div className="filter-section">
                <Filter />
            </div>
            <div className="menu-body">
                <MenuItem text='Browse all' icon='home2' path="/"/>
                <MenuItem text='Notification' icon='bell' notification onClick={() => setNotificationPopUp(true)} />
                <MenuItem text='Inbox' icon="bubbles4" notification onClick={() => setMessagePopUp(true)} />
                <MenuItem text='Create' icon="pencil2" path="create-post" />
                <MenuItem text='Profile' icon="user" path="/user-profile" />
                <MenuItem text='Login' icon="user" path="/login" />
                <MenuItem text='More' icon="list2" onClick={() => setMoreMenuPopUp(true)} />
                <div className="tittle d-flex">
                    <span>Categories</span>
                    <i className="tittle-icon icon-social-media"></i>
                </div>
                <MenuItem text='Vehicles' notification icon="user"/>
                <MenuItem text='Classifieds' icon="user"/>
                <MenuItem text='Clothing' icon="user"/>
                <MenuItem text='Electronics' icon="user"/>
                <MenuItem text='Entertainment' icon="user"/>
                <MenuItem text='Family' icon="user"/>
                <MenuItem text='Garden and outdoors' icon="user"/>
                <MenuItem text='Hobbies' icon="user"/>
                <MenuItem text='Home goods' icon="user"/>
                <MenuItem text='Home Improvement supplies' icon="user"/>
                <MenuItem text='Musical instruments' icon="user"/>
                <MenuItem text='Office supplies' icon="user"/>
                <MenuItem text='Pet supplies' icon="user"/>
                <MenuItem text='Property for sale' icon="user"/>
                <MenuItem text='Sporting goods' icon="user"/>
                <MenuItem text='Toys and games' icon="user"/>
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