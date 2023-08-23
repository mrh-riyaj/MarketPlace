import {Link} from "react-router-dom"

const Button = (props) => {
    return (
        <Link className={"button-wrapper " + props.type} to={props.path} onClick={props.onClick}>
            {props.icon && <i className={"icon-" + (props.icon ? props.icon : 'home')}></i>}
            {props.text &&
                <span>
                    {props.iconLeft && <i className={"icon-" + props.iconLeft}></i>}
                    <span className="btn-text">{props.text}</span>
                    {props.iconRight && <i className={"icon-" + props.iconRight}></i>}
                </span>
            }
        </Link>
    )
}

export default Button