const Toggle = (props) => {
    return (
        <div className="toggle-switch">
            <input className="switch" type="checkbox" id={props.forId} />
            <label className="toggle-body position-r" htmlFor={props.forId}></label>
        </div>
    )
}

export default Toggle