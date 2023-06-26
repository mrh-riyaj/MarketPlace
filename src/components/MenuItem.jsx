const MenuItem = (props) => {
    return (
        <div className="menu_item position-r">
            <i className={'icon position-a icon-' +
                (props.icon ? props.icon : 'home')}
            ></i>
            <span>{props.text}</span>
        </div>
    )
}

export default MenuItem