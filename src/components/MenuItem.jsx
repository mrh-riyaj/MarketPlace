import icon from '../images/menu.png';

const MenuItem = (props) => {
    return (
        <div className="menu_item">
            <img className='icon' src={icon} />
            <span>{props.text}</span>
        </div>
    )
}

export default MenuItem