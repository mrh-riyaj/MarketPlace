import { useState } from "react"
import ForProductDetails from "./popUps/ForProductDetails"

const NewProduct = (props) => {
    const [ProductDetailsPopUp, setProductDetailsPopUp] = useState(false)

    return (
        <section className={"new-product position-r " + (props.class)}>
            <div onClick={() => setProductDetailsPopUp(true)}>
                <div className="product-images d-flex">
                    <img src={props.productImage}/>
                </div>
                <div className="info-section">
                    {props.price && <span className="price">৳{props.price}</span>}
                    {props.oldPrice && <del className="price old">৳{props.oldPrice}</del>}
                    {props.name && <div className="product-name">{props.name}</div>}
                    {props.sellerLocation &&
                        <div className="d-flex">
                            <span className="location">{props.sellerLocation}</span>
                            <i className="locket-icon icon-location"></i>
                        </div>
                    }
                </div>
            </div>
            {ProductDetailsPopUp && <ForProductDetails
                id={props.id}
                name={props.name}
                price={props.price}
                title={props.title}
                editBtn={props.editBtn}
                saveBtn={props.saveBtn}
                onClick={props.onClick}
                sendBtn={props.sendBtn}
                oldPrice={props.oldPrice}
                onDelete={props.onDelete}
                sellerName={props.sellerName}
                categoryId={props.categoryId}
                sellerImage={props.sellerImage}
                productImage={props.productImage}
                sellerLocation={props.sellerLocation}
                productDetails={props.productDetails}
                productCondition={props.productCondition}
                onClose={() => setProductDetailsPopUp(false)}
            />}
        </section>
    )
}

export default NewProduct