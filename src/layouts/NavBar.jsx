import Logo from "../components/Logo";
import MenuItem from "../components/MenuItem";
import ItemType from "../components/ItemType";

const NavBar = () => {
    return (
        <section className="position-r">
            <Logo />
            <div className="menu-item-body">
                <ItemType text='Social Media' icon='social-media'/>

                <MenuItem text='Facebook' icon='facebook'/>
                <MenuItem text='Instagram' icon='instagram'/>
                <MenuItem text='Whatsapp' icon='whatsapp'/>

                <ItemType text='Browsers' icon='google2'/>

                <MenuItem text='Chrome' icon='chrome'/>
                <MenuItem text='First text' icon='chrome'/>
                <MenuItem text='First text' icon='chrome'/>

                <ItemType text='Sports'/>

                <MenuItem text='First text' icon='chrome'/>
                <MenuItem text='First text' icon='chrome'/>
                <MenuItem text='First text' icon='chrome'/>
                
            </div>
        </section>
    )
}

export default NavBar