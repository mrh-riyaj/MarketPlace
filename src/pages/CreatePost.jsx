import { useState } from "react";
import Button from "../components/Button"
import LinkButton from "../components/LinkButton"

const CreatePost = () => {
    const [formValue, setFormValue] = useState({
        // Price: "",
        // OldPrice: "",
        // condition: "",
        // categories: "",
        // productName: "",
        productName: "",
        sellerLocation: "",
        // productDetails: "",
        // selectImage: "",
    });
    const handelInput = (e) => {
        const {productName, value} = e.target;
        setFormValue({...formValue, [productName]: value})
        // console.log(formValue)
    }
    const handelFormSubmit = (e) => {
        e.preventDefault();
        console.log(formValue)
    }

    return (
        <section className="create-section">
            <div className="form-body">
                <form className="will-be-form-section" onSubmit={handelFormSubmit}>
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
                        {/* <div className="clm">
                            <span className="label">Categories<i className="required">*</i></span>
                            <select className="input-body">
                                <option value="New">Select categories</option>
                                <option value="New">New</option>
                                <option value="Used">Used</option>
                            </select>
                        </div>
                        <div className="clm">
                            <span className="label">Condition<i className="required">*</i></span>
                            <select className="input-body">
                                <option value="New">Select condition</option>
                                <option value="New">New</option>
                                <option value="Used">Used</option>
                            </select>
                        </div> */}
                        <div className="clm">
                            
                        </div>
                        <div className="clm">
                            <span className="label">Product name<i className="required">*</i></span>
                            <input
                                className="input-body" type="text" name="productName"
                                onChange={handelInput}
                            />
                        </div>
                    </div>
                    <div className="row">
                        {/* <div className="clm">
                            <span className="label">Seller location<i className="required">*</i></span>
                            <input
                                className="input-body" type="text" name="sellerLocation"
                                value={formValue.sellerLocation}
                                onChange={handelInput}
                            />
                        </div> */}
                        {/* <div className="clm">
                            <span className="label">Price<i className="required">*</i></span>
                            <input
                                className="input-body" type="number" name="price" 
                                value={formValue.price}
                                onChange={handelInput}
                            />
                        </div>
                        <div className="clm">
                            <span className="label">OldPrice</span>
                            <input
                                className="input-body" type="number" name="OldPrice"
                                value={formValue.OldPrice}
                                onChange={handelInput}
                            />
                        </div> */}
                    </div>
                    <div className="row">
                        {/* <div className="clm">
                            <span className="label">Product details</span>
                            <textarea
                                rows="8" name="productDetails" className="input-body textarea"
                                value={formValue.productDetails}
                                onChange={handelInput}
                            />
                        </div>
                        <div className="clm">
                            <span className="label">Select your product<i className="required">*</i></span>
                            <input
                                type="file"
                                name="productImage"
                                className="input-body"
                                onChange={handelInput}
                                value={formValue.productImage}
                                accept="image/png, image/gif, image/jpeg"
                            />
                        </div> */}
                    </div>
                </form>
                <div className="submit-section d-flex">
                    <LinkButton
                        color="red"
                        text="Cancel"
                    />
                    <Button
                        text="Submit"
                        type="primary"
                        iconLeft="pencil"
                        onClick={() => handelFormSubmit()}
                    />
                </div>
            </div>
        </section>
    )
}

export default CreatePost