import Stories from "./Stories"

const Header = () => {
    return(
        <div className="header-body d-flex">
            {[1,2,3,4,5,6,7,8].map((k="number") => (
                <div key={k}>
                    <Stories />
                </div>
            ))}
        </div>
    )
}

export default Header