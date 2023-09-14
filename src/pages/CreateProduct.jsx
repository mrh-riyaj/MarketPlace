import Inputs from "../components/Inputs"
import Button from "../components/Button"
import { useEffect, useState } from "react"
import LinkButton from "../components/LinkButton"
import { createProduct } from "../services/product"

const CreateProduct = () => {
    const [formData, setFormData] = useState({})

    const handInputField = (e) => {
        const name = e.target.name
        const value = e.target.value
        const currentData = {...formData}
        currentData[name] = value
        setFormData(currentData)
    }

    const validateForm = () => {
        const addedFields = []
        const requiredFields = [
            "name", "price", "productDetails", "sellerLocation", "categoryId", "productImages"
        ]
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
                // console.log(formData)
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
                            <span className="label">Categories<i className="required">*</i></span>
                            <select 
                                onChange={handInputField} required={true}
                                className="input-body" name="categoryId"
                            >
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
                            <span className="label">Condition<i className="required">*</i></span>
                            <select 
                                onChange={handInputField} required={true}
                                className="input-body" name="productCondition"
                            >
                                <option className="options">-- Select condition --</option>
                                <option className="options" value="New">New</option>
                                <option className="options" value="Used-like-new">Used like new</option>
                                <option className="options" value="Used-good">Used good</option>
                                <option className="options" value="Used-fair">Used fair</option>
                            </select>
                        </div>
                        <div className="clm">
                            <Inputs
                                required={true} onChange={handInputField}
                                input name="name" label="Product name"
                            />
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="clm">
                            <Inputs
                                required={true} onChange={handInputField}
                                input name="price" type="number" label="Price"
                            />
                        </div>
                        <div className="clm">
                            <Inputs
                                onChange={handInputField}
                                input type="number" name="oldPrice" label="OldPrice"
                            />
                        </div>
                        <div className="clm">
                            <Inputs
                                required={true} onChange={handInputField}
                                input name="sellerLocation" label="Seller location"
                            />
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="clm">
                            <Inputs
                                required={true} onChange={handInputField}
                                textarea name="productDetails" label="Product details"
                            />
                        </div>
                        <div className="clm">
                            <Inputs
                                imageSelector onChange={handInputField}
                                type="file" name="productImages" label="Select your item"
                            />
                        </div>
                    </div>
                    <div className="submit-section d-flex">
                        <LinkButton color="red" text="Cancel" />
                        <Button
                            onClick={validateForm}
                            text="Create" type="primary" iconLeft="pencil"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CreateProduct