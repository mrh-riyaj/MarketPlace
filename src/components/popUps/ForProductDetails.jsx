import Button from "../Button"
import LinkButton from "../LinkButton"
import { createPortal } from "react-dom"
import { useEffect, useState } from "react"
import ForProductEdit from "./ForProductEdit"
import ForProductDelete from "./ForProductDelete"
import { getProductById } from "../../services/product"

const ForProductDetails = (props) => {
    const [product, setProduct] = useState({})
    const [ProductEditPopUp, setProductEditPopUp] = useState(false)
    const [ProductDeletePopUp, setProductDeletePopUp] = useState(false)

    useEffect(() => {
        getProductById(props.id)
        .then(data => setProduct(data))
        // console.log(product)
    }, [])
    return(
        createPortal(
        <div className="middle-popup-main-container d-flex position-a">
            <div className="details-popup-container position-a">
                <div className="popup-header d-flex">
                    <span className="popup-title">
                        {props.title && <span>{props.title}</span>}
                    </span>
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
                            </div>
                            {props.saveIcon &&
                                <Button class="details-icon" icon="bookmark" />
                            }
                            {props.editIcon && 
                                <span>
                                    <Button
                                        type="red" class="details-icon" icon="bin"
                                        onClick={() => setProductDeletePopUp(true)}
                                    />
                                    <Button
                                        class="details-icon" icon="pencil"
                                        onClick={() => setProductEditPopUp(true)}
                                    />
                                </span>
                            }
                        </div>
                        {props.sellerLocation &&
                            <div className="d-flex">
                                <span className="location">{props.sellerLocation}</span>
                                <i className="locket-icon icon-location"></i>
                            </div>
                        }
                    </div>
                    <div className="column-right position-r">
                        <div className="details-section">
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
                        </div>
                        <div className="seller-info position-a d-flex">
                            <div className="img-box"> {/*Will be onClick*/}
                                <img src={props.sellerImage}/>
                            </div>
                            <span className="message-value">
                                {`Hi '${props.sellerName}' is this still available?`}
                            </span>
                            {props.sendBtn && 
                                <Button
                                    onClick={() => {
                                        alert(`Hi '${props.sellerName}' is this still available?`)
                                    }}
                                    text="Send" type="primary" iconRight="home"
                                />
                            }
                        </div>
                    </div>
                </div>
            </div>
            {ProductDeletePopUp && <ForProductDelete
                id={props.id}
                onClose={props.onClose}
                onDelete={props.onDelete}
                onClose={() => setProductDeletePopUp(false)}
            />}
            {ProductEditPopUp &&
                <ForProductEdit
                    onClose={() => setProductEditPopUp(false)}
                />
            }
        </div>,
        document.body
        )
    )
}

export default ForProductDetails