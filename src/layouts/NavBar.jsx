import Logo from "../components/Logo";
import MenuItem from "../components/MenuItem";

const NavBar = () => {
    return (
        <section className="position-r">
            <div className="menu-item-body">
                <Logo />
                <MenuItem text='Home' icon='home' path="/home"/>
                <MenuItem text='Search' icon='search' path="/user-profile"/>
                <MenuItem text='Explore' icon='safari' />
                <MenuItem text='Reels' />
                <MenuItem text='Messages' />
                <MenuItem text='Notification' icon='notification' />
                <MenuItem text='Create' />
                <MenuItem text='Profile' path="/user-profile" />
                <div className="more-item position-a">
                    <MenuItem text='More' icon="menu" />
                </div>     
            </div>
        </section>
    )
}

export default NavBar