import image from "../images/User.jpg"
import LinkButton from "../components/LinkButton"
import ForEditProfile from "../components/popUps/ForEditProfile";
import { useState } from "react";

const UserProfile = () => {
    // For User
    let postItems = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    let userImage = image;
    let posts = postItems.length + " Posts";
    let userName = "riyaj_hossain007";
    let fullName = "Md Riyaj Hossain";
    let email = "a.mrh.riyaj@gmail.com";
    let mobile = "01930445289";
    let bio = "My name is riyja hossain i live in dhaka keranigong shuvadda school dhaka coligrat school";
    
    // For Product
    // let name = "Demo product";
    // let price = "100";
    // let oldPrice = "150";
    // let sellerLocation = "Dhaka";
    // let productCondition = "New";
    // let productDetails = "Nothing to say";
    const [editProfile, setEditProfile] = useState(false)

    return (
        <section className="profile-section d-flex">
            <div className="profile-left-panel">
                <div className="profile-header d-flex">
                    <div className="user-image-box">
                        <img src={userImage} />
                    </div>
                    <strong className="userName">{userName}</strong>
                    <div className="fullName">{fullName}</div>
                </div>
                <div className="profile-edit d-flex">
                    <strong>{posts}</strong>
                    <LinkButton text="Edit profile" onClick={() => setEditProfile(true)} />
                </div>
                <div className="infos"> 
                    <span className="label">Email :</span>
                    <span className="email">{email}</span>
                </div>
                <div className="infos"> 
                    <span className="label">Mobile :</span>
                    <span className="mobile">{mobile}</span>
                </div>
                <div className="infos">
                    <span className="label">Bio :</span>
                    <span className="bio">{bio}</span>
                </div>
            </div>
            <div className="profile-right-panel">
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
            {editProfile && <ForEditProfile
                onClose={() => setEditProfile(false)}
            />}
        </section>
    )
}

export default UserProfile