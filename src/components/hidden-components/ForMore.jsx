import MenuItem from "../MenuItem"
// import { Link } from "react-router-dom"
// import { useEffect, useRef } from "react"
import userImage from "../../images/User.jpg"

const ForMore = (props) => {
    // const forMoreRef = useRef()
    
    // const manageOutsideClick = (event) => {
    //     if(
    //         forMoreRef && forMoreRef.current &&
    //         forMoreRef.current.contains(event.target)
    //         ) {
    //             console.log("Inside clicked")
    //         } else {
                
    //             console.log("Outside clicked")
    //         }
    //     }
    //     useEffect(() => {
    //         document.addEventListener("click", manageOutsideClick)
    //         return () => {
    //             document.removeEventListener("click", manageOutsideClick)
    //         }
    //     },[])

    //ref={forMoreRef}
    let image = userImage;

    return(
        <div className="more-container position-a" ref={props.ref} > 
            <div className="popup-header d-flex">
                <div className="popup-title">More</div>
                <span className="popup-close" onClick={props.onClose}>
                    <i className="icon-cancel-circle"></i>
                </span>
            </div>
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