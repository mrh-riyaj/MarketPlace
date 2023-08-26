import { createPortal } from "react-dom"

const SidePopUp = (props) => {
    return(
        createPortal(
        <div className="popup-main-container position-a">
            {props.SidePopUpShort &&
                <div className="short-popup-container position-a">
                    <div className="popup-header d-flex">
                        <div className="popup-title">{props.title}</div>
                        <span className="popup-close" onClick={props.onClose}>
                            <i className="icon-cancel-circle"></i>
                        </span>
                    </div>
                    {props.content}
                </div>
            }
            {props.SidePopUpFull &&
                <div className="full-popup-container position-a">
                    <div className="popup-header d-flex">
                        <div className="popup-title">{props.title}</div>
                        <span className="popup-close" onClick={props.onClose}>
                            <i className="icon-cancel-circle"></i>
                        </span>
                    </div>
                    {props.content}
                </div>
            }
            {props.SidePopUpFilter &&
                <div className="filter-popup-container position-a">
                    <div className="popup-header d-flex">
                        <div className="popup-title">{props.title}</div>
                        <span className="popup-close" onClick={props.onClose}>
                            <i className="icon-cancel-circle"></i>
                        </span>
                    </div>
                    {props.content}
                </div>
            }
        </div>,
        document.body
        )
    )
}

export default SidePopUp