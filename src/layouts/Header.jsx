import User from "../components/User"

const Header = () => {
    return(
        <section>
            <div className="header-body">
                <div>Clicked item</div>
                <div className="heading">
                    <h1>Project For Practice </h1>
                </div>
                <div>
                    <User />
                </div>
            </div>
        </section>
    )
}

export default Header