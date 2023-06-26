import image from '../images/user.png'

const User = () => {
    return (
        <div className='d-flex'>
            <h3 className='name'>Riyaj Hossain</h3>
            <div className='user-image'>
                <img src={image} /> 
            </div>
        </div>
    )
}

export default User