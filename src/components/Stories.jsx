import image from "../images/user.png"

const Stories = () => {
    return(
        <button className="story-wrapper">
            <div className="img-box">
                <img src={image}/>
            </div>
            <div className="username">UserName</div>
        </button>
    )
}

export default Stories