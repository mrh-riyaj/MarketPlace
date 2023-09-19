import { useState } from "react"
import ForProductDetails from "./popUps/ForProductDetails"

const NewProduct = (props) => {
    const [ProductDetailsPopUp, setProductDetailsPopUp] = useState(false)
    const images = props.productImage && props.productImage.split(',')
    const imagePath = 'http://localhost:8888/file/' + images[0]

    return (
        <section className={"new-product position-r " + (props.class)}>
            <div onClick={() => setProductDetailsPopUp(true)}>
                <div className="product-images d-flex">
                    <img src={imagePath}/>
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
                title={props.title}
                editBtn={props.editBtn}
                saveBtn={props.saveBtn}
                onClick={props.onClick}
                sendBtn={props.sendBtn}
                sellerName={props.sellerName}
                sellerImage={props.sellerImage}
                productImage={props.productImage}
                onClose={() => setProductDetailsPopUp(false)}
                selfPopup = {setProductDetailsPopUp}
            />}
        </section>
    )
}

export default NewProduct