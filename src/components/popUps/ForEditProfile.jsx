import { createPortal } from "react-dom"
import LinkButton from "../LinkButton"
import Button from "../Button"
import Inputs from "../Inputs"

const ForEditProfile = (props) => {
    return(
        createPortal(
        <div className="middle-popup-main-container d-flex position-a">
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
                            <Inputs input label="Change user name" />
                        </div>
                        <div className="clm">
                            <Inputs input label="Change full name" />
                        </div>
                        <div className="clm">
                            <Inputs input label="Change mobile/email" />
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="clm">
                            <Inputs input type="date" label="Change date of birth" />
                        </div>
                        <div className="clm">
                            <span className="label">Change gender</span>
                            <select className="input-body select-input" name="gender">
                                <option>-- Select your gender --</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                                <option value="others">others</option>
                            </select>
                        </div>
                        <div className="clm">
                            <Inputs input label="Change current address" />
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="clm">
                            <Inputs input type="password" label="New Password"/>
                        </div>
                        <div className="clm">
                            <Inputs input required={true} type="password" label="Current Password"/>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="clm">
                            <Inputs textarea label="Change bio" />
                        </div>
                        <div className="clm">
                            <Inputs input class="file" type="file" label="Change your profile" />
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