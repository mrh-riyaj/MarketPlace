import {Link} from 'react-router-dom'

const MenuItem = (props) => {
    return (
        <Link to={props.path} onClick={props.onClick} className="menu_item d-flex">
            {props.icon && 
                <i className={'icon icon-' + props.icon}></i>
            }
            <span>{props.text}</span>
        </Link>
    )
}

export default MenuItem