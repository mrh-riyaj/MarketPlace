import { useState } from "react"
import image from "../images/user.png"
import LinkButton from "../components/LinkButton"
import Button from "../components/Button"
import MiddlePopUp from "./common/MiddlePopUp"

const NewPost = (props) => {
    const [middleMenuPopUp, setMiddleMenuPopUp] = useState(false)

    return (
        <section className="new-posts">
            <div className="post-header d-flex">
                <div className='user-image'>
                    <img src={image} />
                </div>
                <div>
                    <h4 className="user-name">Username</h4> 
                    <span className="post-status">Category</span>
                </div>
                <Button text="Demo" icon="heart"/>
            </div>
            <div className="product-content">
                <div className="post-image" onClick={() => setMiddleMenuPopUp(true)}>
                    <img src={image}/>
                </div>
                <div className="d-flex product-infos">
                    <div>
                        <span>Price</span>
                        <span>Old Price</span>
                    </div>
                    <LinkButton text="Message" />
                </div>
            </div>

            {middleMenuPopUp && <MiddlePopUp
                title="Product details"
                MiddleMenuPopUp
                content={
                    <div>Product details</div>
                }
                onClose={() => setMiddleMenuPopUp(false)}
            />}
        </section>
    )
}

export default NewPost