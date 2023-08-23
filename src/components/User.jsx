import image from '../images/user.png'

const User = () => {
    return (
        <div className='user-wrapper'>
            <div className='user-image'>
                <img src={image} /> 
            </div>
            <span className="user-name">User Name</span>
        </div>
    )
}

export default User