import { useState } from "react"
import MiddlePopUp from "./common/MiddlePopUp"

const NewPost = (props) => {
    const [middleMenuPopUp, setMiddleMenuPopUp] = useState(false)

    return (
        <section className="new-posts position-r">
            <div onClick={() => setMiddleMenuPopUp(true)}>
                <div className="post-image">
                    <img src={props.image}/>
                </div>
                <div className="info-section">
                    <span className="price">{props.price} BDT</span>
                    <del className="price old">{props.oldPrice} BDT</del>
                    <span className={"status position-a " + props.status}>{props.status}</span>
                    <div className="product-name">{props.name}</div>
                    <div className="location">{props.location}</div>
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