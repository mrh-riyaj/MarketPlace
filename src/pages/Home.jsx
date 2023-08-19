import img from '../images/dashboard.png'
import Header from "../components/Header"
import LinkButton from "../components/LinkButton"
import Suggested from "../components/Suggested"
import NewPost from "../components/NewPost"
import User from "../components/User"

const Home = () => {
    return(
        <section className="main-body d-flex">
            <div className="post-section">
                <Header />
                {[1,2,3,4,5].map((k="number") => (
                    <div key={k}>
                        <NewPost />
                    </div>
                ))}
            </div>
            <div className="suggested-section">
                <User />
                <div className="suggest-tittle d-flex">
                    <div className="tittle">Suggested for you</div>
                    <LinkButton text="See All" color="black"/>
                </div>
                <div className="suggest-others">
                    {[1,2,3,4,5,6,7,8,9].map((k="number") => (
                        <div key={k}>
                            <Suggested />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Home