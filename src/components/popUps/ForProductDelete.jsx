import { createPortal } from "react-dom"
import LinkButton from "../LinkButton"
import Button from "../Button"

const ForProductDelete = (props) => {
    return(
        createPortal(
        <div className="middle-popup-main-container d-flex position-a">
            <div className="delete-popup-container position-a">
                <div className="popup-header d-flex">
                    <div className="popup-title">Delete this item</div>
                </div>
                <div className="alert-text">Are you sure you want to delete this item? "{props.name}"</div>
                <div className="alert-btn d-flex">
                    <LinkButton text="Cancel" onClick={props.onClose} />
                    <Button type="red" text="Delete" onClick={props.onDelete} />
                </div>
            </div>
        </div>,
        document.body
        )
    )
}

export default ForProductDelete