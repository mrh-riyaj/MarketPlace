import image from "../images/User.jpg"
import LinkButton from "../components/LinkButton"
import NewPost from "../components/NewPost";

const UserProfile = () => {
    // For User
    let postItems = [1,2,3,4,5]
    let userImage = image;
    let posts = postItems.length + " Posts";
    let userName = "riyaj_hossain007";
    let fullName = "Md Riyaj Hossain";
    let email = "a.mrh.riyaj@gmail.com";
    let mobile = "01930445289";
    let bio = "Nothing to say";
    
    // For Product
    // let name = "Demo product";
    // let price = "100";
    // let oldPrice = "150";
    // let sellerLocation = "Dhaka";
    // let productCondition = "New";
    // let productDetails = "Nothing to say";

    return (
        <section className="profile-section d-flex">
            <div className="profile-left-panel">
                <div className="profile-header d-flex">
                    <div className="user-image-box">
                        <img src={userImage} />
                    </div>
                </div>
                <div className="profile-edit d-flex">
                    <span className="infos">{posts}</span>
                    <LinkButton text="Edit profile" />
                </div>
                <h4 className="userName">{userName}</h4>
                <div className="fullName">{fullName}</div>
                <div className="email">Email : {email}</div>
                <div className="mobile">Mobile : {mobile}</div>
                <div className="bio">Bio : {bio}</div>
            </div>

            <div className="profile-right-panel d-flex">
                {postItems.map((item, k) => (
                    <div kye={k}>Demo</div>
                    // <NewPost 
                    //     key={k}
                    //     name={name}
                    //     price={price}
                    //     oldPrice={oldPrice}
                    //     sellerLocation={sellerLocation}
                    //     // sellerName={sellerName}
                    
                    //     // product detail section
                    //     productCondition={productCondition}
                    //     productDetails={productDetails}
                    //     productImage={image}
                    // />
                ))}
            </div>
        </section>
    )
}

export default UserProfile