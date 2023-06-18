import icon from '../images/menu.png'

const ItemType = (props) => {
    return (
        <div className="list-type">{props.text}
            <img className='item-type-logo' src={icon} />
        </div>
    )
}

export default ItemType