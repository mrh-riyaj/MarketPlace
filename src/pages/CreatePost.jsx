import { useEffect, useState } from "react"
import Button from "../components/Button"
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
        console.log(currentData)
    }

    const validateForm = () => {
        const requiredFields = ["name", "price","oldPrice","productCondition","sellerLocation","productDetails"]
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
                <div className="row">
                    <div className="clm">
                        <span className="label">Condition<i className="required">*</i></span>
                        <select 
                            className="input-body"
                            name="productCondition"
                            onChange={handInputField}
                            required
                        >
                            <option value="New">Select condition</option>
                            <option value="New">New</option>
                            <option value="Used">Used</option>
                        </select>
                    </div>
                    <div className="clm">
                        <span className="label">Price<i className="required">*</i></span>
                        <input
                            className="input-body" type="number" name="price"
                            onChange={handInputField}
                            required
                        />
                    </div>
                    <div className="clm">
                        <span className="label">OldPrice</span>
                        <input
                            className="input-body" type="number" name="oldPrice"
                            onChange={handInputField}
                            required
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="clm">
                        <span className="label">Product name<i className="required">*</i></span>
                        <input
                            className="input-body" 
                            name="name"
                            type="text"
                            id="productName"
                            onChange={handInputField}
                            required
                        />
                    </div>
                    <div className="clm">
                        <span className="label">Seller location<i className="required">*</i></span>
                        <input
                            className="input-body" type="text" name="sellerLocation"
                            onChange={handInputField}
                            required
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="clm">
                        <span className="label">Product details<i className="required">*</i></span>
                        <textarea
                            className="input-body textarea" name="productDetails"
                            onChange={handInputField}
                            required
                        />
                    </div>
                    <div className="clm">
                        <span className="label">Select your item<i className="required">*</i></span>
                        {/* <input
                            type="file"
                            name="productImage"
                            className="input-body select-photo"
                            onChange={handInputField}
                        /> */}
                    </div>
                </div>
                <div className="submit-section d-flex">
                    <LinkButton color="red" text="Cancel" />
                    <Button
                        text="Submit"
                        name="Submit"
                        type="primary"
                        iconLeft="pencil"
                        onClick={validateForm}
                    />
                </div>
            </div>
        </section>
    )
}

export default CreatePost