import MenuItem from "../MenuItem"
import userImage from "../../images/User.jpg"

const ForMore = (props) => {
    let image = userImage;

    return(
        <div className="more-container position-a" ref={props.onRef}>
            <div className="container">
                <MenuItem text="Profile" icon="user" img={image} path="/user-profile" />
                <MenuItem text="Settings" icon="cog" path="settings" />
                <MenuItem text="Your activity" icon="history" />
                <MenuItem text="Saved" icon="bookmarks" path="save-items" />
                <MenuItem text="Switch accounts" icon="exit" />
                <MenuItem text="Lock out" icon="evil"/>
            </div>
        </div>
    )
}

export default ForMore