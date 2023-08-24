import image from "../images/user.png"
import LinkButton from "../components/LinkButton"

const UserProfile = () => {
    let posts = 0 + " Posts";
    let userName = "riyaj_hossain007";
    let fullName = "Md Riyaj Hossain";
    return (
        <section className="d-flex">
            <div className="profile-left-panel">
                <div className="profile-header d-flex">
                    <div className="user-image-box">
                        <img src={image} />
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