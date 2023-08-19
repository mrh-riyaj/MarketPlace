import {Link} from "react-router-dom"

const Icon = (props) => {
    return (
        <Link className={"icon-wrapper " + (props.class)} to={props.path} onClick={props.onClick}>
            <i className={"icon-" + (props.icon ? props.icon : 'home')}></i>
        </Link>
    )
}

export default Icon