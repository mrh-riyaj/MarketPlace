import { Link } from "react-router-dom";
import NewPost from "../components/NewPost"
import image from "../images/user.png"

const Home = () => {
    let postItem = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    let price = 100 + " BDT";
    let oldPrice = 150 + " BDT";
    let name = "It's demo";
    let location = "Dhaka";
    let productImage = image;
    let condition = "New";

    let userImage = image;

    return(
        <section className="main-body d-flex">
            <div className="post-section position-r">
                <div className="home-header d-flex">
                    <span className="home-tittle">Market place</span>
                    <Link className="user-image" to={"/user-profile"}>
                        <img src={userImage} />
                    </Link>
                </div>
                <div className="posts d-flex">
                    {postItem.map((k="number") => (
                        <NewPost kye={k}
                            price={price}
                            oldPrice={oldPrice}
                            name={name}
                            location={location}
                            productImage={productImage}
                            condition={condition}
                         />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Home