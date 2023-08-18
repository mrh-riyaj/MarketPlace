import image from '../images/user.png'
import LinkButton from '../components/LinkButton'

const User = () => {
    return (
        <div className='user-wrapper d-flex'>
            <div className='user-image'>
                <img src={image} /> 
            </div>
            <div>
                <LinkButton text="riyaj_hossain" color="black"  />
                <div className='full-name'>Md Riyaj Hossain</div>
            </div>
            <div>
                <LinkButton text="Switch" />
            </div>
        </div>
    )
}

export default User