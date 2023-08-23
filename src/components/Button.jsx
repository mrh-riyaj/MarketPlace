import {Link} from "react-router-dom"

const Button = (props) => {
    return (
        <Link className={"button-wrapper "} to={props.path} onClick={props.onClick}>
            {props.icon && <i className={"icon-" + (props.icon ? props.icon : 'home')}></i>}
            {props.iconLeft && <i className={"icon-" + props.iconLeft}></i>}
            <span className="btn-text">{props.text}</span>
            {props.iconRight && <i className={"icon-" + (props.iconRight ? props.iconRight : 'home')}></i>}
        </Link>
    )
}

export default Button