import { useState } from "react"
import image from "../images/user.png"
import LinkButton from "../components/LinkButton"
import MenuItem from "../components/MenuItem"
import Icon from "../components/Icon"
import MiddlePopUp from "./common/MiddlePopUp"

const NewPost = (props) => {
    const [middleMenuPopUp, setMiddleMenuPopUp] = useState(false)

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
                <Icon icon="list2" onClick={() => setMiddleMenuPopUp(true)} />
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
            {middleMenuPopUp && <MiddlePopUp
                title="Search"
                MiddleMenuPopUp
                content={
                    <div>
                        <MenuItem text="Report" color="red" />
                        <MenuItem text="UnFollow" color="red" />
                        <MenuItem text="Add to favorites"/>
                        <MenuItem text="Go to post" />
                        <MenuItem text="Share to..." />
                        <MenuItem text="Copy link" />
                        <MenuItem text="Embed" />
                        <MenuItem text="About this account" />
                        <MenuItem text="Remove" color="red" />
                    </div>
                }
                onClose={() => setMiddleMenuPopUp(false)}
            />}
        </section>
    )
}

export default NewPost