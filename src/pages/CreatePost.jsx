import { useEffect, useState } from "react"
import Button from "../components/Button"
import Input from "../components/Input"
import LinkButton from "../components/LinkButton"
import { createProduct } from "../services/product"

const CreatePost = () => {
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
            "name", "price", "productDetails", "sellerLocation"
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
        }
        else {
            alert('All missing')
        }
        if(addedFields.length === requiredFields.length) {
            createProduct(formData)
            .then(re => {
                alert("Created")
            })
            .catch(err => {
                if(err) {
                    alert("Not Created")
                }
            })
        }
        else {
            alert('Single field missing')
        }
    }

    return (
        <section className="create-section d-flex">
            <div className="form-body">
                <div className="row-head">
                    <div className="clm">
                        <span className="head-titles">For sell</span>
                    </div>
                    <div className="clm">
                        <span className="head-titles">Market place</span>
                    </div>
                    <div className="clm">
                        <span className="head-titles">
                            <Button icon="bookmark" />
                        </span>
                    </div>
                </div>
                <div className="form-container">
                    <div className="formRow">
                        <div className="clm">
                            <span className="label">Condition<i className="required">*</i></span>
                            <select 
                                onChange={handInputField} required={true}
                                className="input-body" name="productCondition"
                            >
                                <option className="options">-- Select condition --</option>
                                <option className="options" value="New">New</option>
                                <option className="options" value="Used">Used</option>
                            </select>
                        </div>
                        <div className="clm">
                            <Input
                                required={true} onChange={handInputField}
                                input name="price" type="number" label="Price"
                            />
                        </div>
                        <div className="clm">
                            <Input
                                onChange={handInputField}
                                input type="number" name="oldPrice" label="OldPrice"
                            />
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="clm">
                            <Input
                                required={true} onChange={handInputField}
                                input name="name" type="text" label="Product name"
                            />
                        </div>
                        <div className="clm">
                            <Input
                                required={true} onChange={handInputField}
                                input type="text" name="sellerLocation" label="Seller location"
                            />
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="clm">
                            <Input
                                required={true} onChange={handInputField}
                                textarea name="productDetails" label="Product details"
                            />
                        </div>
                        <div className="clm">
                            <Input
                                imageSelector onChange={handInputField}
                                type="file" name="productImage" label="Select your item"
                            />
                        </div>
                    </div>
                    <div className="submit-section d-flex">
                        <LinkButton color="red" text="Cancel" />
                        <Button
                            onClick={validateForm}
                            text="Submit" name="Submit" type="primary" iconLeft="pencil"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CreatePost