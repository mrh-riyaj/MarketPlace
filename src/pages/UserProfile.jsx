import ForEditProfile from "../components/popUps/ForEditProfile"
import LinkButton from "../components/LinkButton"
import P_Imag from "../images/demo_product.jpg"
import OwnPost from "../components/OwnPost"
import image from "../images/User.jpg"
import { useState } from "react"

const UserProfile = () => {
    // For User
    const [products, setProducts] = useState([1,2,3,4,5,6,7,8,9,10,11,12])
    const removeItem = (key) => {
        const newProducts = [...products]
        const deletedProduct = newProducts.splice(key, 1)
        setProducts(newProducts)

        if(deletedProduct[0] >= 0) {
            alert(deletedProduct[0] + " Deleted item")
        }
        // console.log(deletedProduct[0])
    }


    let userImage = image;
    let gender = "Male";
    let posts = products.length + " Posts";
    let userName = "riyaj_hossain007";
    let fullName = "Md Riyaj Hossain";
    let email = "a.mrh.riyaj@gmail.com";
    let birth = "10 / 05 / 2000";
    let address = "Shuvadda west para puraton coloni dhaka";
    let bio = "My name is riyja hossain i live in dhaka keranigong shuvadda school dhaka coligrat school";
    
    // For Product
    let id = 1;
    let price = "100";
    let oldPrice = "150";
    let name = "Demo product";
    let ProductImage = P_Imag;
    let sellerLocation = "Dhaka";
    let sellerName = "Demo Name";
    let productDetails = "Demo Name ProductDetails";
    let productCondition = "New";
    let categoryId = 1;

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
                    <span className="label">Gender :</span>
                    <span className="mobile">{gender}</span>
                </div>
                <div className="infos"> 
                    <span className="label">Date of birth :</span>
                    <span className="mobile">{birth}</span>
                </div>
                <div className="infos"> 
                    <span className="label">Mobile/Email :</span>
                    <span className="email">{email}</span>
                </div>
                <div className="infos"> 
                    <span className="label">Current address :</span>
                    <span className="mobile">{address}</span>
                </div>
                <div className="infos">
                    <span className="label">Bio :</span>
                    <span className="bio">{bio}</span>
                </div>
            </div>
            <div className="profile-right-panel d-flex">
                {products.map((item, k) => (
                    <OwnPost
                        kye={k}
                        id={id}
                        name={name}
                        price={price}
                        oldPrice={oldPrice}
                        productImage={ProductImage}
                        sellerLocation={sellerLocation}
                        
                        // For product details
                        sellerName={sellerName}
                        sellerImage={userImage}
                        categoryId={categoryId}
                        onDelete={() => removeItem(k)}
                        productDetails={productDetails}
                        productCondition={productCondition}
                        
                    />
                ))}
            </div>
            {editProfile && <ForEditProfile
                onClose={() => setEditProfile(false)}
            />}
        </section>
    )
}

export default UserProfile