import Button from "../Button"
import { createPortal } from "react-dom"
import { useEffect, useState } from "react"
import ForEditProduct from "./ForEditProduct"
import ForProductDelete from "./ForProductDelete"
import { getProductById, deleteProductById } from "../../services/products"
import { getProductState, setProductState } from "../../globalState"

// will be delete
// import DemoProduct from "../../images/demo_product.jpg"
// will be delete

const ForProductDetails = (props) => {
    const newImages = []
    const [product, setProduct] = useState({})
    const imagePath = 'http://localhost:8888/file/'
    const [ProductEdit, setProductEdit] = useState(false)
    const [ProductDelete, setProductDelete] = useState(false)
    const images = props.productImage && props.productImage.split(',')
    const [viewImage, setViewImage] = useState(imagePath + images[0])
    
    useEffect(() => {
        getProductById(props.id)
        .then(data => setProduct(data))
        
        // For in future
        .catch(err => console.log("1 Error"))
    }, [])
    
    const handleImage = (path) => {
        setViewImage(imagePath + path)
    }
    const deleteProduct = (id) => {
        deleteProductById(id)
        .then(res => {
            if(res.success) {
                setProductDelete(false)
                props.selfPopup(false)
                const proState = getProductState('proList')
                const newList = proState.products.filter(item => item.id !== id)
                proState.setProducts(newList)
            }
        })
        
        // For in future
        .catch(err => console.log("1 Error"))
    }
    return(
        createPortal(
        <div className="middle-popup-main-container d-flex position-a">
            <div className="details-popup-container position-a">
                <div className="popup-header d-flex">
                    <span className="popup-title">
                        {props.title && <span>{props.title} :- CategoryId : {product.categoryId} -:</span>}
                    </span>
                    <span className="popup-close" onClick={props.onClose}>
                        <i className="icon-cancel-circle"></i>
                    </span>
                </div>
                <div className="content d-flex">
                    <div className="column-left position-r">
                        <div className="single-images">
                            <img src={viewImage}/>
                        </div>
                        <div className="product-images d-flex position-a">
                            {images.map((path, k) => (
                                <div className="image d-flex" key={k} onClick={() => handleImage(path)}>
                                    <img src={imagePath + path}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="column-right position-r">
                        <div className="info-section">
                            <div className="product-name">{product.name}</div>
                            <div className="product-infos d-flex">
                                <div>
                                    <span className="price">৳{product.price}</span>
                                    {product.oldPrice && <del className="price old">৳{product.oldPrice}</del>}
                                </div>
                                <div>
                                    {props.saveBtn && <Button icon="bookmark"/>}
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
                                <span className="location">
                                    {product.sellerLocation}
                                    <i className="locket-icon icon-location"></i>
                                </span>
                            </div>
                            <div className="product-infos d-flex">
                                <span className="info-tittle">Condition : </span>
                                <span className={"condition " + product.productCondition}>{product.productCondition}</span>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{product.productDetails}</span>
                            </div>
                            
                            {/* Will be delete */}
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{product.productDetails}</span>
                            </div>
                            <div className="product-infos">
                                <span className="info-tittle">Details : </span>
                                <span className="infos">{product.productDetails}</span>
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
                name={product.name}
                onClose={props.onClose}
                onDelete={() => deleteProduct(props.id)}
                onClose={() => setProductDelete(false)}
            />}
            {ProductEdit && <ForEditProduct onClose={() => setProductEdit(false)}/>}
        </div>,
        document.body
        )
    )
}

export default ForProductDetails