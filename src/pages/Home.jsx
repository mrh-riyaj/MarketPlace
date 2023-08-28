// import DemoProducts from "../demoData/DemoProducts";
import { useEffect, useState } from "react"
import NewPost from "../components/NewPost"
import image from "../images/demo_product.jpg"
import { getAllProducts } from "../services/product"

const Home = () => {
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
                        <NewPost kye={k}
                            name={item.name}
                            price={item.price}
                            location={item.location}
                            oldPrice={item.oldPrice}
                        
                            // product detail section
                            condition={item.condition}
                            description={item.description}
                            productImage={image}
                            id={item.id}
                         />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Home