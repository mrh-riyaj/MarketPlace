import image from "../images/User.jpg"
import LinkButton from "../components/LinkButton"

const UserProfile = () => {
    let posts = 0 + " Posts";
    let userName = "riyaj_hossain007";
    let fullName = "Md Riyaj Hossain";
    let userImage = image;
    return (
        <section className="profile-section d-flex">
            <div className="profile-left-panel">
                <div className="profile-header d-flex">
                    <div className="user-image-box">
                        <img src={userImage} />
                    </div>
                    <span className="userName">{userName}</span>
                    <span className="fullName">{fullName}</span>
                </div>
                <div className="profile-edit d-flex">
                    <span className="infos">{posts}</span>
                    <LinkButton text="Edit profile" />
                </div>
            </div>
            <div className="profile-right-panel">
                {[1,2,3,4,5].map((k="number") => (
                    <div key={k}>
                        <div>Demo</div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default UserProfile