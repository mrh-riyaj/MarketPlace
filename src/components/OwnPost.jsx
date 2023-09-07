import { useState } from "react"
import ForProductDelete from "./popUps/ForProductDelete"

const OwnPost = (props) => {
    const [ProductDeletePopUp, setProductDeletePopUp] = useState(false)

    return (
        <section className="own-posts position-r">
            <div onClick={() => alert("hi")}>
                <span className="delete-icon position-a" onClick={() => setProductDeletePopUp(true)}>
                    <i className="icon-cancel-circle"></i>
                </span>
                <div className="post-images d-flex">
                    <img src={props.productImage}/>
                </div>
                <div className="info-section">
                    {props.price && <span className="price">৳{props.price}</span>}
                    {props.oldPrice && <del className="price old">৳{props.oldPrice}</del>}
                    {props.name && <div className="product-name">{props.name}</div>}
                    {props.sellerLocation &&
                        <div className="location">{props.sellerLocation}
                            <i className="locket-icon icon-location"></i>
                        </div>
                    }
                </div>
            </div>

            {ProductDeletePopUp && <ForProductDelete
                id={props.id}
                name={props.name}
                price={props.price}
                oldPrice={props.oldPrice}
                sellerName={props.sellerName}
                productImage={props.productImage}
                sellerLocation={props.sellerLocation}
                productDetails={props.productDetails}
                productCondition={props.productCondition}
                onClose={() => setProductDeletePopUp(false)}
            />}
        </section>
    )
}

export default OwnPost