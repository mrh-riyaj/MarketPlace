import { createPortal } from "react-dom"
import LinkButton from "../LinkButton"

const PopUp = (props) => {
    return(
        createPortal(
        <div className="popup-main-container">
            <div className="popup-container">
                <div className="popup-header">
                    <div className="popup-title">{props.title}</div>
                    <span className="popup-close" onClick={props.onClose}><i className="icon-cross"></i></span>
                </div>
                <div className="popup-body">
                    {props.content}
                </div>
                <div className="popup-footer">
                    <LinkButton text="Cancel" onClick={props.onClose} color="red" />
                    <LinkButton text="Submit" onClick={props.onSubmit} />
                </div>
            </div>
        </div>,
        document.body
        )
    )
}

export default PopUp