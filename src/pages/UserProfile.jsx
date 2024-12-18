import image from "../images/User.jpg"
import { useEffect, useState } from "react"
import LinkButton from "../components/LinkButton"
import ProductList from "../components/ProductList"
import { getAllProducts } from "../services/products"
import ForEditProfile from "../components/popUps/ForEditProfile"
import { getProductState, setProductState } from "../globalState"

const UserProfile = (props) => {
    const [products, setProducts] = useState([])
    const [editProfile, setEditProfile] = useState(false)
    useEffect(() => {
        getAllProducts()
        .then(data => {
            setProducts(data)
        })
    }, [])
    setProductState('proList', {products, setProducts})
    
    
    // For User
    
    let gender = "Male";
    // let userImage = image;
    let birth = "10 / 05 / 2000";
    let userName = "riyaj_hossain007";
    let fullName = "Md Riyaj Hossain";
    let email = "a.mrh.riyaj@gmail.com";
    let posts = products.length + " Posts";
    let address = "Shuvadda west para puraton coloni dhaka";
    let bio = "My name is riyja hossain i live in dhaka keranigong shuvadda";
    
    // For Product
    let sellerImage = image;
    let sellerName = "Riyaj hossain"
    // let ProductImage = productImage;
    return (
        <section className="profile-section d-flex">
            <div className="profile-left-panel">
                <div className="profile-header d-flex">
                    <div className="user-image-box">
                        <img src={sellerImage} />
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
                    <ProductList
                        key={k}
                        id={item.id}
                        editBtn={true}
                        name={item.name}
                        price={item.price}
                        class="own-product"
                        title="Edit product"
                        oldPrice={item.oldPrice}
                        productImage={item.productImage}
                        sellerLocation={item.sellerLocation}
                        
                        // For product details
                        sellerName={sellerName}
                        sellerImage={sellerImage}
                        categoryId={item.categoryId}
                        productDetails={item.productDetails}
                        productCondition={item.productCondition}
                        
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