import NewPost from "../components/NewPost"
import Header from "../components/Header"
import image from "../images/user.png"

const Home = () => {
    let postItem = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

    return(
        <section className="main-body d-flex">
            <div className="post-section position-r">
                <Header />
                <div className="posts d-flex">
                    {postItem.map((k="number") => (
                        <NewPost kye={k}
                            price={100}
                            oldPrice={100}
                            name={"It's demo"}
                            location={"Dhaka"}
                            image={image}
                            status={"used"}
                         />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Home