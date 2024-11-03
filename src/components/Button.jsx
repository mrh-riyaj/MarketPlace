import {Link} from "react-router-dom"

const Button = (props) => {
    return (
        <Link
            className={props.class + " button-wrapper " + props.type}
            to={props.path} onClick={props.onClick}
        >
            {!props.text && props.icon && <i className={"btn-icon icon-" + props.icon}></i>}
            {props.text &&
                <span>
                    {props.iconLeft && <i className={"btn-icon icon-" + props.iconLeft}></i>}
                    <strong className="btn-text">{props.text}</strong>
                    {props.iconRight && <i className={"btn-icon icon-" + props.iconRight}></i>}
                </span>
            }
        </Link>
    )
}

export default Button
