import LinkButton from "../LinkButton"
import Button from "../Button"
import Input from "../Input"

const ForFilter = (props) => {
    return(
        // <div className="popup-main-container position-a">
            <div className="filter-popup-container position-a">
                <div className="popup-header d-flex">
                    <div className="popup-title">Filter item</div>
                    <span className="popup-close" onClick={props.onClose}>
                        <i className="icon-cancel-circle"></i>
                    </span>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="clm">
                            <select className="filter-inputs">
                                <option value="#">-- Categories --</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </select>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="clm">
                            <Input
                                input type="number" placeholder="Min"
                                class="filter-inputs"
                            />
                        </div>
                        <div className="clm">
                            <Input
                                input type="number" placeholder="Max"
                                class="filter-inputs"
                            />
                        </div>
                    </div>
                    <div className="row filter-buttons">
                        <div className="clm">
                            <LinkButton text="Cancel" color="red" onClick={props.onClose} />
                        </div>
                        <div className="clm filter-search">
                            <Button text="Search" iconLeft="search" />
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    )
}

export default ForFilter