import MenuItem from "../MenuItem"

const ForMore = (props) => {
    return(
        <div className="more-container position-a">
            <div className="popup-header d-flex">
                <div className="popup-title">More</div>
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
    )
}

export default ForMore