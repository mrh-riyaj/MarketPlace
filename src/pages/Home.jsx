import { useEffect, useState } from "react"
import NewPost from "../components/NewPost"
import image from "../images/demo_product.jpg"
import { getAllProducts } from "../services/product"

const Home = () => {
    // let sellerName = "RIYAJ_HOSSAIN"
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
                            sellerLocation={item.sellerLocation}
                            // sellerName={sellerName}
                        
                            // product detail section
                            productCondition={item.productCondition}
                            productDetails={item.productDetails}
                            productImage={image}
                         />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Home