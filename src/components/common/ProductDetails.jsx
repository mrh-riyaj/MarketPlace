// import { queryAllByAttribute } from "@testing-library/react"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { getProductById } from "../../services/product"
import Button from "../Button"
import image from "../../images.User.jpg"

const ProductDetails = (props) => {
    let sellerImage = image;
    const [product, setProduct] = useState({})
    useEffect(() => {
        getProductById(props.id)
        .then(data => setProduct(data))
        console.log(product)
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
                                {props.price && <span className="price">{props.price}</span>}
                                {props.oldPrice && <del className="price old">{props.oldPrice}</del>}
                                {props.name && <div className="product-name">{product.name}</div>}
                                {props.location &&
                                    <div className="location">{props.location}
                                        <i className="icon-location"></i>
                                    </div>
                                }
                            </div>
                            <div className="message-seller d-flex">
                                <input
                                    className="message-value"
                                    type="text"
                                    disabled={true}
                                    value={`Hi ${"seller_name"}, is this still available?`}
                                />
                                <Button text="Send" type="primary" onClick={() => alert("Hi Ahad")}/>
                            </div>
                        </div>
                    </div>
                    <div className="column-right">
                        {props.condition &&
                            <div className="product-infos">
                                <span className="info-tittle">Condition : </span>
                                <span className={"condition " + props.condition}>{props.condition}</span>
                            </div>
                        }
                        {props.description &&
                            <div className="product-infos">
                                <span className="info-tittle">Description : </span>
                                <span className="infos">{props.description}</span>
                            </div>
                        }
                    </div>
                    <div className="seller-info d-flex">
                        <div className="seller-img">
                            <img src={sellerImage}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
        )
    )
}

export default ProductDetails