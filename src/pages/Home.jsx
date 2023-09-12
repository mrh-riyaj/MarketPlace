import { useEffect, useState } from "react"
import NewProduct from "../components/NewProduct"
import ProductImage from "../images/demo_product.jpg"
import SellerImage from "../images/User.jpg"
import { getAllProducts } from "../services/product"

const Home = () => {
    let sellerName = "Riyaj hossain"
    let sellerImage= SellerImage
    const [products, setProducts] = useState([])
    useEffect(() => {
        getAllProducts()
        .then(data => setProducts(data))
    }, [])
    
    return(
        <section className="main-body d-flex">
            <div className="post-section">
                <div className="posts d-flex">
                    {products.map((item, k) => (
                        <NewProduct
                            key={k}
                            id={item.id}
                            sendBtn saveBtn
                            name={item.name}
                            price={item.price}
                            title="Product details"
                            oldPrice={item.oldPrice}
                            productImage={ProductImage}
                            sellerLocation={item.sellerLocation}
                            
                            // For product details
                            onClick={() => {alert("Will go seller profile")}}
                            sellerName={sellerName}
                            sellerImage={sellerImage}
                            categoryId={item.categoryId}
                            productDetails={item.productDetails}
                            productCondition={item.productCondition}
                         />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Home