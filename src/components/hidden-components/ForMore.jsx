import MenuItem from "../MenuItem"
import userImage from "../../images/User.jpg"

const ForMore = (props) => {
    let image = userImage;

    return(
        <div className="more-container position-a" ref={props.onRef}>
            <div className="container">
                <MenuItem onClick={props.onClose} text="Profile" icon="user" img={image} path="/user-profile" />
                <MenuItem onClick={props.onClose} text="Settings" icon="cog" path="settings" />
                <MenuItem onClick={props.onClose} text="Your activity" icon="history" />
                <MenuItem onClick={props.onClose} text="Saved" icon="bookmarks" path="save-items" />
                <MenuItem onClick={props.onClose} text="Switch accounts" icon="exit" />
                <MenuItem onClick={props.onClose} text="Lock out" icon="evil"/>
            </div>
        </div>
    )
}

export default ForMore