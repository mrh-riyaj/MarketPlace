import { createPortal } from "react-dom"
import LinkButton from "../LinkButton"
import Button from "../Button"

const ForProductDelete = (props) => {
    return(
        createPortal(
        <div className="middle-popup-main-container d-flex position-a">
            <div className="delete-popup-container position-a">
                <div className="popup-header d-flex">
                    <div className="popup-title">Delete Product</div>
                    <span className="popup-close" onClick={props.onClose}>
                        <i className="icon-cancel-circle"></i>
                    </span>
                </div>
                If you want to delete this product clock Remove
                <div className="content d-flex">
                    <LinkButton text="Cancel" color="red" onClick={props.onClose} />
                    <Button text="Remove" onClick={props.onRemove} />
                </div>
            </div>
        </div>,
        document.body
        )
    )
}

export default ForProductDelete