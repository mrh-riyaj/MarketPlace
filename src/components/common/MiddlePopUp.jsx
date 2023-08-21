import { createPortal } from "react-dom"

const MiddlePopUp = (props) => {
    return(
        createPortal(
        <div className="middle-popup-main-container d-flex position-a">
            {props.MiddleMenuPopUp &&
                <div className="menu-popup-container position-a">
                    <div className="popup-header d-flex">
                        <div className="popup-title">{props.title}</div>
                        <span className="popup-close" onClick={props.onClose}>
                            <i className="icon-cancel-circle"></i>
                        </span>
                    </div>
                    {props.content}
                </div>
            }
            {/* {props. &&
                <div className="full-popup-container position-a">
                    <div className="popup-header d-flex">
                        <div className="popup-title">{props.title}</div>
                        <span className="popup-close" onClick={props.onClose}>
                            <i className="icon-cancel-circle"></i>
                        </span>
                    </div>
                    {props.content}
                </div>
            } */}
        </div>,
        document.body
        )
    )
}

export default MiddlePopUp