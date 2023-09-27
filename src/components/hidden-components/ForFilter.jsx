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
                    <div className="formRow">
                        <div className="clm">
                            <select className="input-body select-input" name="categoryId">
                                <option>-- Categories --</option>
                                <option value="1">Beauty</option>
                                <option value="2">Baby products</option>
                                <option value="3">Books</option>
                                <option value="4">Beverages</option>
                                <option value="5">Clothing</option>
                                <option value="6">Cleaning Supplies</option>
                                <option value="7">Electronics</option>
                                <option value="8">Musical instruments</option>
                                <option value="9">Office Products</option>
                                <option value="10">Property for sale</option>
                                <option value="11">Sports</option>
                                <option value="12">Toys and games</option>
                                <option value="13">Vehicles</option>
                                <option value="14">Watches</option>
                            </select>
                        </div>
                        <div className="clm">
                            <select className="input-body select-input">
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
                            <Inputs input type="number" placeholder="Min"/>
                        </div>
                        <div className="clm">
                            <Inputs input type="number" placeholder="Max"/>
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