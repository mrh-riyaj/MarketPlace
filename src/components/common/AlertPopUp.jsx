import { createPortal } from "react-dom"

const AlertPopUp = (props) => {
    return(
        createPortal(
        <div className="popup-main-container">
            <div className="popup-container">
                <div className="popup-body">
                    {props.content}
                </div>
                <div className="popup-footer">
                    <span>Cancel</span>
                    <span>Submit</span>
                </div>
            </div>
        </div>,
        document.body
        )
    )
}

export default AlertPopUp