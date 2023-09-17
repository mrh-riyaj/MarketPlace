import Button from "../Button"
import { createPortal } from "react-dom"
import { useEffect, useState } from "react"
import ForProductEdit from "./ForProductEdit"
import ForProductDelete from "./ForProductDelete"
import { getProductById } from "../../services/products"

// will be delete
import user from "../../images/User.jpg"
import DemoProduct from "../../images/demo_product.jpg"
// will be delete

const ForProductDetails = (props) => {
    const [product, setProduct] = useState({})
    const [ProductEdit, setProductEdit] = useState(false)
    const [ProductDelete, setProductDelete] = useState(false)

    useEffect(() => {
        getProductById(props.id)
        .then(data => setProduct(data))
        
        // For in future
        .catch(err => console.log("1 Error"))
    }, [])


    const images = props.productImage && props.productImage.split(',')
    const imagePath = 'http://localhost:8888/file/' + images[1]

    let test = [
        DemoProduct,user
    ]

    // console.log(imagePath)
    
    // const handleClick = (index) => {
    //     console.log("clicked")
    // }
    return(
        createPortal(
        <div className="middle-popup-main-container d-flex position-a">
            <div className="details-popup-container position-a">
                <div className="popup-header d-flex">
                    <span className="popup-title">
                        {props.title && <span>{props.title} :- CategoryId : {props.categoryId} -:</span>}
                    </span>
                    <span className="popup-close" onClick={props.onClose}>
                        <i className="icon-cancel-circle"></i>
                    </span>
                </div>
                <div className="content d-flex">
                    <div className="column-left">
                        <div className="product-images">
                            <img src={imagePath}/>
                        </div>
                        {/* <div className="product-images">
                            {test.map((k) => {
                                <img key={k} src={DemoProduct}/>
                            })}
                        </div> */}
                        {/* <div className="product-images">
                            {images.map((item, k) => {
                                <img
                                    key={k}
                                    src={imagePath}
                                    onclick={() => handleClick()}
                                />
                            })}
                        </div> */}
                    </div>
                    <div className="column-right position-r">
                        <div className="info-section">
                            <div className="product-infos product-name">{props.name}</div>
                            <div className="product-infos d-flex">
                                <div>
                                    <span className="price">৳{props.price}</span>
                                    {props.oldPrice && <del className="price old">৳{props.oldPrice}</del>}
                                </div>
                                <div>
                                    {props.saveBtn && <Button icon="bookmark" />}
                                    {props.editBtn && 
                                        <span>
                                            <Button type="red" icon="bin" onClick={() => setProductDelete(true)}/>
                                            <Button class="details-icon" icon="pencil" onClick={() => setProductEdit(true)}/>
                                        </span>
                                    }
                                </div>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Location : </span>
                                <span className="location">{props.sellerLocation}</span>
                            </div>
                            <div className="product-infos d-flex">
                                <span className="info-tittle">Condition : </span>
                                <span className={"condition " + props.productCondition}>{props.productCondition}</span>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{props.productDetails}</span>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{props.productDetails}</span>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{props.productDetails}</span>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{props.productDetails}</span>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{props.productDetails}</span>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{props.productDetails}</span>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{props.productDetails}</span>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{props.productDetails}</span>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{props.productDetails}</span>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{props.productDetails}</span>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{props.productDetails}</span>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{props.productDetails}</span>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{props.productDetails}</span>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{props.productDetails}</span>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{props.productDetails}</span>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{props.productDetails}</span>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{props.productDetails}</span>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{props.productDetails}</span>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{props.productDetails}</span>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{props.productDetails}</span>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{props.productDetails}</span>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{props.productDetails}</span>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{props.productDetails}</span>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{props.productDetails}</span>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{props.productDetails}</span>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{props.productDetails}</span>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{props.productDetails}</span>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{props.productDetails}</span>
                            </div>
                        </div>
                        <div className="seller-info position-a d-flex">
                            <div className="img-box" onClick={props.onClick}>
                                <img src={props.sellerImage}/>
                            </div>
                            <span className="message-value">
                                {`Hi '${props.sellerName}' is this still available?`}
                            </span>
                            {props.sendBtn && 
                                <Button
                                    text="Send" type="primary" iconRight="home"
                                    onClick={() => {alert(`Hi '${props.sellerName}' is this still available?`)}}
                                />
                            }
                        </div>
                    </div>
                </div>
            </div>
            {ProductDelete && <ForProductDelete
                id={props.id}
                name={props.name}
                onClose={props.onClose}
                onDelete={props.onDelete}
                onClose={() => setProductDelete(false)}
            />}
            {ProductEdit && <ForProductEdit onClose={() => setProductEdit(false)}/>}
        </div>,
        document.body
        )
    )
}

export default ForProductDetails