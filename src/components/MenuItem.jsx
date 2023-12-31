import {Link} from 'react-router-dom'

const MenuItem = (props) => {
    return (
        <Link
            name={props.mane}
            to={props.path}
            onClick={props.onClick}
            className="menu_item d-flex position-r"
        >
            {props.img &&
                <div className="menu-img">
                    <img src={props.img}/>
                </div>
            }
            {!props.img && props.icon && 
                <i className={'icon icon-' + props.icon}></i>
            }
            <span className={"item-text " + props.color}>{props.text}</span>
            {props.notification && 
                <i className="notification position-a icon-bell"></i>
            }
        </Link>
    )
}

export default MenuItem