import LinkButton from "../LinkButton"
import Button from "../Button"
import Input from "../Input"

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
                                <option>-- Select Categories --</option>
                                <option value="vehicles">Vehicles</option>
                                <option value="classifieds">Classifieds</option>
                                <option value="clothing">Clothing</option>
                                <option value="electronics">Electronics</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="family">Family</option>
                                <option value="garden-and-outdoors">Garden and outdoors</option>
                                <option value="hobbies">Hobbies</option>
                                <option value="home-goods">Home goods</option>
                                <option value="home-improvement-supplies">Home Improvement supplies</option>
                                <option value="musical-instruments">Musical instruments</option>
                                <option value="office-supplies">Office supplies</option>
                                <option value="pet-supplies">Pet supplies</option>
                                <option value="property-for-sale">Property for sale</option>
                                <option value="sporting-goods">Sporting goods</option>
                                <option value="toys-and-games">Toys and games</option>
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
    )
}

export default ForFilter