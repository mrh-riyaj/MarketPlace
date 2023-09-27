// import { createProduct } from "../services/product"
import LinkButton from "../components/LinkButton"
// import { useEffect, useState } from "react"
import Button from "../components/Button"
import Inputs from "../components/Inputs"
import { useState } from "react"

const CreateAccount = () => {
    const [formData, setFormData] = useState({})

    const handInputField = (e) => {
        const name = e.target.name
        const value = e.target.value
        const currentData = {...formData}
        currentData[name] = value
        setFormData(currentData)
    }

    const validateForm = () => {
        const requiredFields = [
            "user-name", "full-name", "mobile-email", "birth", "address",
            "gender", "password", "confirmPassword"
        ]

        const addedFields = []
        if(Object.keys(formData).length) {
            requiredFields.forEach((item) => {
                for(const k in formData) {
                    if(k === item && formData[k] !== '') {
                        addedFields.push(item)
                    }
                }
            })
        }else {
            alert('All missing')
        }
        if(addedFields.length === requiredFields.length) {
            // All Data here ="formData"
            // console.log(formData)
            alert("Created")

            // createUser(formData)
            // .then(re => {
            // alert("Created")
            // })
            // .catch(err => {
            //     if(err) {
            //         alert("Not Created")
            //     }
            // })
        }else {
            alert('Single field missing')
        }
    }

    return (
        <section className="create-user-section d-flex">
            <div className="form-body">
                <div className="row-head">
                    <div className="clm">
                        <span className="head-titles">Create account in <q>MarketPlace</q></span>
                    </div>
                </div>
                <div className="form-container">
                    <div className="formRow">
                        <div className="clm">
                            <Inputs
                                onChange={handInputField} required={true}
                                input name="user-name" label="User name"
                                />
                        </div>
                        <div className="clm">
                            <Inputs
                                onChange={handInputField} required={true}
                                input name="full-name" label="Full name"
                            />
                        </div>
                        <div className="clm">
                            <Inputs
                                onChange={handInputField} required={true} 
                                input name="mobile-email" label="Mobile/Email"
                            />
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="clm">
                            <Inputs
                                onChange={handInputField} required={true} 
                                input type="date" name="birth" label="Date of birth"
                            />
                        </div>
                        <div className="clm">
                            <Inputs
                                onChange={handInputField} required={true} 
                                input name="address" label="Current address"
                            />
                        </div>
                        <div className="clm">
                            <span className="label">Gender<i className="required">*</i></span>
                            <select 
                                onChange={handInputField} required={true}
                                className="select-input input-body" name="gender"
                            >
                                <option>-- Select your gender --</option>
                                <option value="male">male</option>
                                <option value="female">female</option>
                                <option value="others">others</option>
                            </select>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="clm">
                            <Inputs
                                onChange={handInputField} required={true} 
                                input type="password" name="password" label="Password"
                            />
                        </div>
                        <div className="clm">
                            <Inputs
                                onChange={handInputField} required={true}
                                input type="password" name="confirmPassword" label="Confirm password"
                                />
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="clm">
                            <Inputs
                                onChange={handInputField}
                                textarea name="bio" label="Bio"
                            />
                        </div>
                        <div className="clm">
                            <Inputs
                                input required={true} onChange={handInputField}
                                class="file" type="file" name="userImage" label="Select your profile"
                            />
                        </div>
                    </div>
                    <div className="submit-section d-flex">
                        <LinkButton color="red" text="Cancel" />
                        <Button
                            onClick={validateForm}
                            text="Create" name="create" type="primary" iconLeft="pencil"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CreateAccount