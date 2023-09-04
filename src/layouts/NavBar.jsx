import ForMore from "../components/hidden-components/ForMore";
import MenuItem from "../components/MenuItem";
import Filter from "../components/Filter";
import { useState } from "react";

const NavBar = () => {
    const [moreMenu, setMoreMenu] = useState(false)
    console.log(useState(10, 20))

    return (
        <section className="position-r">
            <div className="filter-section">
                <Filter />
            </div>
            <div className="menu-body">
                <div>
                    <MenuItem text='Browse all' icon='home2' path="/"/>
                    <MenuItem text='Notification' icon='bell' notification path="/notification"/>
                    <MenuItem text='Inbox' icon="bubbles4" notification path="/Inbox"/>
                    <MenuItem text='Create' icon="pencil2" path="create-post" />
                    <MenuItem text='Profile' icon="user" path="/user-profile" />
                    <MenuItem text='Login' icon="user" path="/login" />
                </div>
                <div className="position-r">
                    <div className="menu_item d-flex" onClick={() => setMoreMenu(true)}>
                        <i className="icon icon-list2"></i>
                        <span className="item-text">More</span>
                    </div>
                    {moreMenu && <ForMore onClose={() => setMoreMenu(false)}/>}
                </div>
                <div className="tittle d-flex">
                    <span>Categories</span>
                    <i className="tittle-icon icon-social-media"></i>
                </div>
                <div>
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
            </div>
        </section>
    )
}

export default NavBar