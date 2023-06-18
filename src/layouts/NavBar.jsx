import Logo from "../components/Logo";
import MenuItem from "../components/MenuItem";
import ItemType from "../components/ItemType";

const NavBar = () => {
    return (
        <section className="menu-body">
            <Logo />
            <div className="menu-item-body">
                <ItemType text='Computers'/>

                <MenuItem text='Home'/>
                <MenuItem text='First text'/>
                <MenuItem text='First text'/>

                <ItemType text='Mobiles'/>

                <MenuItem text='First text'/>
                <MenuItem text='First text'/>
                <MenuItem text='First text'/>

                <ItemType text='Sports'/>

                <MenuItem text='First text'/>
                <MenuItem text='First text'/>
                <MenuItem text='First text'/>
                
            </div>
        </section>
    )
}

export default NavBar