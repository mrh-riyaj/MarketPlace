const Button = (props) => {
    return (
        <span className={'button ' + (props.type)}>
            <i className={'btn-icon icon-' +
                (props.icon ? props.icon : 'home')}
                ></i>
            {props.text}
        </span>
    )
}

export default Button