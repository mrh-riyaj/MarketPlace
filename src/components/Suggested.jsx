import image from '../images/user.png'
import LinkButton from '../components/LinkButton'

const Suggested = () => {
    return (
        <div className='d-flex sug-user-wrapper'>
            <div className='sug-user-image'>
                <img src={image} />
            </div>
            <div>
                <LinkButton text="riyaj_hossain" color="black"  />
                <div className='sug-full-name'>Md Riyaj Hossain</div>
            </div>
            <LinkButton text="Follow" color="common" />
        </div>
    )
}

export default Suggested