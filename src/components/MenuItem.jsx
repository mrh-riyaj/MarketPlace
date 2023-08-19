import {Link} from 'react-router-dom'

const MenuItem = (props) => {
    return (
        <Link to={props.path} onClick={props.onClick} className="menu_item d-flex">
            <i className={'icon icon-' +
                (props.icon ? props.icon : 'home')}
            ></i>
            <span>{props.text}</span>
        </Link>
    )
}

export default MenuItem