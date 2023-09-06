import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { getProductById } from "../../services/product"
import Button from "../Button"
import LinkButton from "../LinkButton"

const ProductDetails = (props) => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        getProductById(props.id)
        .then(data => setProduct(data))
        // console.log(product)
    }, [])
    return(
        createPortal(
        <div className="middle-popup-main-container d-flex position-a">
            <div className="popup-container position-a">
                <div className="popup-header d-flex">
                    <div className="popup-title">Product Details</div>
                    <span className="popup-close" onClick={props.onClose}>
                        <i className="icon-cancel-circle"></i>
                    </span>
                </div>
                <div className="content d-flex">
                    <div className="column-left">
                        <div className="post-images">
                            <img src={props.productImage}/>
                        </div>
                        <div className="info-section d-flex">
                            <div>
                                {props.price && <span className="price">৳{props.price}</span>}
                                {props.oldPrice && <del className="price old">৳{props.oldPrice}</del>}
                                {props.name && <div className="product-name">{product.name}</div>}
                                {props.sellerLocation &&
                                    <div className="location">{props.sellerLocation}
                                        <i className="locket-icon icon-location"></i>
                                    </div>
                                }
                            </div>
                            <div className="message-seller d-flex">
                                <input
                                    className="message-value"
                                    type="text"
                                    disabled={true}
                                    value={`Hi ${"props.sellerName"}, is this still available?`}
                                />
                                <Button
                                    onClick={() => alert("Will be send")}
                                    text="Send" type="primary" iconLeft="home"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="column-right">
                        {props.productCondition &&
                            <div className="product-infos">
                                <span className="info-tittle">Condition : </span>
                                <span className={"condition " + props.productCondition}>{props.productCondition}</span>
                            </div>
                        }
                        {props.productDetails &&
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{props.productDetails}</span>
                            </div>
                        }
                        {props.sellerName &&
                            <div className="sellerName">Seller Name :-
                                <LinkButton color="black" text={props.sellerName} />
                            </div>
                        }
                    </div>
                    {/* <div className="seller-info d-flex">
                        <div className="seller-img">
                            Here seller image
                        </div>
                    </div> */}
                </div>
            </div>
        </div>,
        document.body
        )
    )
}

export default ProductDetails