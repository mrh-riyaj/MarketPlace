import { createPortal } from "react-dom"
import LinkButton from "../LinkButton"
import Button from "../Button"
import Input from "../Input"

const ForEditProfile = (props) => {
    return(
        createPortal(
        <div className="popup-main-container position-a">
            <div className="edit-profile-container position-a">
                <div className="popup-header d-flex">
                    <div className="popup-title">Edit profile</div>
                    <span className="popup-close" onClick={props.onClose}>
                        <i className="icon-cancel-circle"></i>
                    </span>
                </div>
                <div className="form-container">
                    <div className="formRow">
                        <div className="clm">
                            <Input input label="Change userName" />
                        </div>
                        <div className="clm">
                            <Input input label="Change fullName" />
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="clm">
                            <Input input label="Change email" />
                        </div>
                        <div className="clm">
                            <Input input label="Change mobile" />
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="clm">
                            <Input
                                input type="password"
                                label="New Password"
                            />
                        </div>
                        <div className="clm">
                            <Input
                                input required={true} type="password"
                                label="Current Password"
                            />
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="clm">
                            <Input textarea />
                        </div>
                        <div className="clm">
                            <Input imageSelector class="select-photo" />
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

export default ForEditProfile