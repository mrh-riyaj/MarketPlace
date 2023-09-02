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
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                                <option value="E">E</option>
                                <option value="F">F</option>
                                <option value="G">G</option>
                                <option value="H">H</option>
                                <option value="I">I</option>
                                <option value="J">J</option>
                                <option value="K">K</option>
                                <option value="L">L</option>
                                <option value="M">M</option>
                                <option value="N">N</option>
                                <option value="O">O</option>
                                <option value="P">P</option>
                                <option value="Q">Q</option>
                                <option value="R">R</option>
                                <option value="S">S</option>
                                <option value="T">T</option>
                                <option value="U">U</option>
                                <option value="V">V</option>
                                <option value="W">W</option>
                                <option value="X">X</option>
                                <option value="Y">Y</option>
                                <option value="Z">Z</option>
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