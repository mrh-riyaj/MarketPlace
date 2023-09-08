import { createPortal } from "react-dom"
import LinkButton from "../LinkButton"
import Button from "../Button"
import Input from "../Input"

const ForProductEdit = (props) => {
    return(
        createPortal(
        <div className="middle-popup-main-container d-flex position-a">
            <div className="edit-product-container position-a">
                <div className="popup-header d-flex">
                    <div className="popup-title">Edit product</div>
                    <span className="popup-close" onClick={props.onClose}>
                        <i className="icon-cancel-circle"></i>
                    </span>
                </div>
                <div className="form-container">
                    <div className="formRow">
                        <div className="clm">
                            <Input input type="number" label="Change price" />
                        </div>
                        <div className="clm">
                            <Input input type="number" label="Change old price" />
                        </div>
                        <div className="clm">
                            <span className="label">Change condition</span>
                            <select
                                className="input-body" name="condition"
                            >
                                <option>-- Product condition --</option>
                                <option value="New">New</option>
                                <option value="Used">Used</option>
                            </select>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="clm">
                            <Input input label="Change product name" />
                        </div>
                        <div className="clm">
                            <Input input label="Change seller location" />
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="clm">
                            <Input textarea label="Change details" />
                        </div>
                        <div className="clm">
                            <Input imageSelector class="select-photo" label="Change product image" />
                        </div>
                    </div>
                    <div className="submit-section  d-flex">
                        <LinkButton text="Cancel" color="red" onClick={props.onClose} />
                        <Button text="Save" type="primary" />
                    </div>
                </div>
            </div>
        </div>,
        document.body
        )
    )
}

export default ForProductEdit