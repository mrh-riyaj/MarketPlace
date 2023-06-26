import User from "../components/User"

const Header = () => {
    return(
        <div className="header-body d-flex">
            <span className="clicked-menu">Facebook</span>
            <div className="heading">
                <h1>Project For Practice </h1>
            </div>
            <div>
                <User />
            </div>
        </div>
    )
}

export default Header