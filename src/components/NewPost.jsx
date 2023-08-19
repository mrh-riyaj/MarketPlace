import image from "../images/user.png"
import LinkButton from "../components/LinkButton"
import Icon from "../components/Icon"

const NewPost = (props) => {
    return (
        <section className="new-posts">
            <div className="post-header d-flex">
                <div className="d-flex">
                    <div className='user-image'>
                        <img src={image} />
                    </div>
                    <div className="" style={{margin: "auto 0"}}>
                        <LinkButton text="Username" color="black" />
                        <span className="post-time position-r">Now</span>
                        <LinkButton text="Follow" />
                        <div className="post-status">Post Status</div>
                    </div>
                </div>
                <Icon icon="menu" />
            </div>
            <div className="post-image">
                <img src={image}/>
            </div>
            <div className="d-flex comment-section">
                <div className="d-flex">
                    <Icon icon="heart" />
                    <Icon icon="bubble2" class="comment" />
                </div>
                <Icon icon="bookmark" />
            </div>
            <div>
                <LinkButton text={50 + " Likes"} color="black" />
            </div>
            <div>
                <LinkButton text={"View all " + 50 + " comments"} color="black" />
            </div>
        </section>
    )
}

export default NewPost