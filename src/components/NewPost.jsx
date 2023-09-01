import { useState } from "react"
import ProductDetails from "./popUps/ProductDetails"

const NewPost = (props) => {
    const [ProductDetailsPopUp, setProductDetailsPopUp] = useState(false)

    return (
        <section className="new-posts position-r">
            <div className="product-wrapper" onClick={() => setProductDetailsPopUp(true)}>
                <div className="post-images d-flex">
                    <img src={props.productImage}/>
                </div>
                <div className="info-section">
                    {props.price && <span className="price">{props.price}</span>}
                    {props.oldPrice && <del className="price old">{props.oldPrice}</del>}
                    {props.name && <div className="product-name">{props.name}</div>}
                    {props.sellerLocation &&
                        <div className="location">{props.sellerLocation}
                            <i className="locket-icon icon-location"></i>
                        </div>
                    }
                </div>
            </div>

            {ProductDetailsPopUp && <ProductDetails
                id={props.id}
                name={props.name}
                price={props.price}
                oldPrice={props.oldPrice}
                sellerName={props.sellerName}
                productImage={props.productImage}
                sellerLocation={props.sellerLocation}
                productDetails={props.productDetails}
                productCondition={props.productCondition}
                onClose={() => setProductDetailsPopUp(false)}
            />}
        </section>
    )
}

export default NewPost