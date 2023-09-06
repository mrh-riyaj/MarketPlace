// import { useEffect, useRef } from "react"
import MenuItem from "../MenuItem"

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
    return(
        <div className="more-container position-a" ref={props.ref} > 
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