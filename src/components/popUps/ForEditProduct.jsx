import Button from "../Button"
import Inputs from "../Inputs"
import { useState } from "react"
import LinkButton from "../LinkButton"
import { createPortal } from "react-dom"
// import { updateProductById } from "../../services/products"

const ForEditProduct = (props) => {
    const [formData, setFormData] = useState({})

    const handInputField = (e) => {
        const name = e.target.name
        let value = []
        const files = e.target.files
        const currentData = {...formData}
        if(files) {
            for (let i = 0; i < files.length; i++) {
                value.push(files[i])
            }
        }else {
            value = e.target.value
        }
        currentData[name] = value
        setFormData(currentData)

        // console.log(currentData)

    }
    
    const UpdateProduct = () => {
        console.log(formData)
        // updateProductById(formData)
        // .then(re => {
        //     alert("Updated")
        // })
        // .catch(err => {
        //     if(err) {
        //         alert(err)
        //     }
        // })
    }

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
                            <span className="label">Change Categories</span>
                            <select className="input-body select-input" name="categoryId" onChange={handInputField}>
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
                            <span className="label">Change Condition</span>
                            <select className="input-body select-input" name="productCondition" onChange={handInputField}>
                                <option className="options">-- Select condition --</option>
                                <option className="options" value="New">New</option>
                                <option className="options" value="Used-like-new">Used like new</option>
                                <option className="options" value="Used-good">Used good</option>
                                <option className="options" value="Used-fair">Used fair</option>
                            </select>
                        </div>
                        <div className="clm">
                            <Inputs onChange={handInputField} input label="Change product name" name="name"/>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="clm">
                            <Inputs onChange={handInputField} input type="number" label="Change price" name="price"/>
                        </div>
                        <div className="clm">
                            <Inputs onChange={handInputField} input type="number" label="Change old price" name="oldPrice"/>
                        </div>
                        <div className="clm">
                            <Inputs onChange={handInputField} input label="Change seller location" name="sellerLocation"/>
                        </div>
                    </div>
                    <div className="formRow">
                        <div className="clm">
                            <Inputs onChange={handInputField} textarea label="Change details" name="productDetails"/>
                        </div>
                        <div className="clm">
                            <Inputs
                                onChange={handInputField} multiple={true}
                                input type="file" label="Change product image (Max - 10)" name="productImages"
                            />
                        </div>
                    </div>
                    <div className="submit-section  d-flex">
                        <LinkButton text="Cancel" color="red" onClick={props.onClose} />
                        <Button text="Save" type="primary" onClick={UpdateProduct} />
                    </div>
                </div>
            </div>
        </div>,
        document.body
        )
    )
}

export default ForEditProduct