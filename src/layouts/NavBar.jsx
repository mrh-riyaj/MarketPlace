import MenuItem from "../components/MenuItem";
import Filter from "../components/Filter";

const NavBar = () => {
    return (
        <section className="position-r">
            <div className="filter-section">
                <Filter />
            </div>
            <div className="menu-body">
                <div>
                    <MenuItem text='Browse all' icon='home2' path="/"/>
                    <MenuItem text='Notification' icon='bell' notification path="/notification"/>
                    <MenuItem text='Inbox' icon="bubbles4" notification path="/inbox"/>
                    <MenuItem text='Create' icon="pencil2" path="create-product" />
                    <div className="tittle d-flex">
                        <span>Will be delete</span>
                        <i className="tittle-icon icon-social-media"></i>
                    </div>
                    <MenuItem text='Login' icon="user" path="/login" />
                    <MenuItem text='Create account' icon="user" path="/create-account" />
                </div>
                <div className="tittle d-flex">
                    <span>Categories</span>
                    <i className="tittle-icon icon-social-media"></i>
                </div>
                <div>
                    <MenuItem text='Beauty' icon="user"/>
                    <MenuItem text='Baby products' icon="user"/>
                    <MenuItem text='Books' icon="user"/>
                    <MenuItem text='Beverages' icon="user"/>
                    <MenuItem text='Clothing' icon="user"/>
                    <MenuItem text='Cleaning Supplies' icon="user"/>
                    <MenuItem text='Electronics' icon="user"/>
                    <MenuItem text='Musical instruments' icon="user"/>
                    <MenuItem text='Office Products' icon="user"/>
                    <MenuItem text='Property for sale' icon="user"/>
                    <MenuItem text='Sports' icon="user"/>
                    <MenuItem text='Toys and games' icon="user"/>
                    <MenuItem text='Vehicles' notification icon="user"/>
                    <MenuItem text='Watches' icon="user"/>
                </div>
            </div>
        </section>
    )
}

export default NavBar