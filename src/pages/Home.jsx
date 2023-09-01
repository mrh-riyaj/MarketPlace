import { useEffect, useState } from "react"
import NewPost from "../components/NewPost"
import ProductImage from "../images/demo_product.jpg"
import SellerImage from "../images/User.jpg"
import { getAllProducts } from "../services/product"

const Home = () => {
    let sellerName = "RIYAJ_HOSSAIN"
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
                        <NewPost
                            key={k}
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            oldPrice={item.oldPrice}
                            productImage={ProductImage}
                            sellerLocation={item.sellerLocation}
                            
                            // product details section
                            sellerName={sellerName}
                            sellerImage={sellerImage}
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