import {Link} from 'react-router-dom'

const LinkButton = (props) => {
    return (
        <Link
            className={"button " + (props.color ? props.color : "common") }
            to={props.path}
            onClick={props.onClick}
        >
            {props.text}
        </Link>
    )
}

export default LinkButton