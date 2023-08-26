import { createPortal } from "react-dom"
import Button from "../Button"

const ProductDetails = (props) => {
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
                                <span className="price">{props.price}</span>
                                {props.oldPrice && <del className="price old">{props.oldPrice}</del>}
                                <div className="product-name">{props.name}</div>
                                <div className="location">{props.location}</div>
                            </div>
                            <Button icon="home" />
                        </div>
                    </div>
                    <div className="column-right">
                        <span className={"condition " + props.condition}>{props.condition}</span>
                        <div><Button text="Message" type="primary"/></div>
                        <div><Button text="Message" /></div>
                        <div><Button text="Message" iconLeft="home" /></div>
                        <div><Button text="Message" iconLeft="home" iconRight="home" /></div>
                        <div><Button text="Message" iconRight="home" /></div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
        )
    )
}

export default ProductDetails