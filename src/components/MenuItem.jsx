const MenuItem = (props) => {
    return (
        <div className="menu_item">
            <i className={'icon icon-' + (props.icon ? props.icon : 'home')}></i>
            <span>{props.text}</span>
        </div>
    )
}

export default MenuItem