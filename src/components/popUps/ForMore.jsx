import { createPortal } from "react-dom"
import MenuItem from "../MenuItem"

const ForMore = (props) => {
    return(
        createPortal(
        <div className="popup-main-container position-a">
            <div className="more-popup-container position-a">
                <div className="popup-header d-flex">
                    <div className="popup-title">{props.title}</div>
                    <span className="popup-close" onClick={props.onClose}>
                        <i className="icon-cancel-circle"></i>
                    </span>
                </div>
                <div className="container">
                    <MenuItem text="Settings" icon="cog" />
                    <MenuItem text="Your activity" icon="history" />
                    <MenuItem text="Saved" icon="bookmarks" />
                    <MenuItem text="Keyboard shortcuts" icon="social-media" />
                    <MenuItem text="Switch appearance" icon ="sun"/>
                    <MenuItem text="Switch accounts" icon="exit" />
                    <MenuItem text="Lock out" icon="evil"/>
                </div>
            </div>
        </div>,
        document.body
        )
    )
}

export default ForMore