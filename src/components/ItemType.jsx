// import icon from '../images/menu.png'

const ItemType = (props) => {
    return (
        <div className="list-type">{props.text}
            <i className={'item-type-logo icon-' + (props.icon ? props.icon : 'home')}></i>
        </div>
    )
}

export default ItemType