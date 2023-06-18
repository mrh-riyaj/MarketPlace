import image from '../images/user.png'

const User = () => {
    return (
        <div className='user-wrapper'>
            <div>
                <h3 className='user-name'>Riyaj Hossain</h3>
                <span className='user-id'>21-01-08-18-088</span>
            </div>
            <div className='user-image'>
                <img src={image} /> 
            </div>
        </div>
    )
}

export default User