import { useEffect, useState } from "react"
import SellerImage from "../images/User.jpg"
import ProductList from "../components/ProductList"
import { getAllProducts } from "../services/products"

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
                        <ProductList
                            key={k}
                            sendBtn
                            saveBtn
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            title="Product details"
                            oldPrice={item.oldPrice}
                            productImage={item.productImage}
                            sellerLocation={item.sellerLocation}
                            
                            // For product details
                            sellerName={sellerName}
                            sellerImage={sellerImage}
                            categoryId={item.categoryId}
                            productDetails={item.productDetails}
                            productCondition={item.productCondition}
                            onClick={() => {alert("Will go seller profile")}}
                         />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Home