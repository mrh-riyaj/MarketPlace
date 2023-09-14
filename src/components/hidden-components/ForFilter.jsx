import LinkButton from "../LinkButton"
import Button from "../Button"
import Inputs from "../Inputs"

const ForFilter = (props) => {
    return(
            <div className="filter-container position-a">
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
                                <option>-- Condition --</option>
                                <option value="new">New</option>
                                <option value="used-like-new">Used - like new</option>
                                <option value="used-good">Used - good</option>
                                <option value="used-fair">Used - fair</option>
                            </select>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="clm">
                            <Inputs
                                input type="number" placeholder="Min"
                                class="filter-inputs"
                            />
                        </div>
                        <div className="clm">
                            <Inputs
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
                            <Button type="primary" text="Search" iconRight="search" />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ForFilter