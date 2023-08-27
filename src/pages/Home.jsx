// import DemoProducts from "../demoData/DemoProducts";
import NewPost from "../components/NewPost"
import image from "../images/demo_product.jpg"

const Home = () => {
    // console.log(demoProducts)
    let postItem = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    let price = 100 + " BDT";
    let oldPrice = 150 + " BDT";
    let name = "It's demo";
    let location = "Bangladesh Dhaka";
    let productImage = image;

    // product detail section
    let condition = "New";
    let description ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum...."

    return(
        <section className="main-body d-flex">
            <div className="post-section">
                <div className="posts d-flex">
                    {postItem.map((k="number") => (
                        <NewPost kye={k}
                            name={name}
                            price={price}
                            location={location}
                            oldPrice={oldPrice}

                            // product detail section
                            condition={condition}
                            description={description}
                            productImage={productImage}
                         />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Home