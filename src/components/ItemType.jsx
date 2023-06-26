const ItemType = (props) => {
    return (
        <div className="list-type position-r">{props.text}
            <i className={'item-type-icon position-a icon-' +
                (props.icon ? props.icon : 'home')}
            ></i>
        </div>
    )
}

export default ItemType