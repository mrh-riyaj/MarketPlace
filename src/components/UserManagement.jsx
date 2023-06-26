import image from '../images/user.png'
import Button from './Button'
const UserManagement = () => {
    return (
        <div className="clm name-image bg-white border-r">
            <div className='img-position'>
                <img src={image} />
            </div>
            <h3 className='user-name'>User Name</h3>
            <span className='user-id'>21-01-08-18-088</span>
            <div className='buttons'>
                <span className='btn-wrapper'>
                    <Button text='Text' type='purple' icon=''/>
                </span>
                <span className='btn-wrapper'>
                    <Button text='Edit' type='sky-blue' icon='pencil' />
                </span>
            </div>
        </div>
    )
}

export default UserManagement