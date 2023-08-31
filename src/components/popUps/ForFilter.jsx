import { createPortal } from "react-dom"
import Button from "../Button"

const ForFilter = (props) => {
    return(
        createPortal(
        <div className="popup-main-container position-a">
            <div className="filter-popup-container position-a">
                <div className="popup-header d-flex">
                    <div className="popup-title">Filter item</div>
                    <span className="popup-close" onClick={props.onClose}>
                        <i className="icon-cancel-circle"></i>
                    </span>
                </div>
                <div className="container d-flex">
                    <div className="row">
                        <div className="clm">
                            <select className="filter-inputs">
                                <option value="#">-- Sort By --</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </select>
                        </div>
                        <div className="clm">
                            <select className="filter-inputs">
                                <option value="#">-- Categories --</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </select>
                        </div>
                        <div className="clm">
                            <div className="row">
                                <div className="clm">
                                    <input className="filter-inputs" type="number" placeholder="Min"/>
                                </div>
                                <div className="clm">
                                    <input className="filter-inputs" type="number" placeholder="Max"/>
                                </div>
                                <div className="clm">
                                    <Button text="Search" iconLeft="search" type="primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
        )
    )
}

export default ForFilter