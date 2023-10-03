const Switches = (props) => {
    return (
        <>
        {props.toggle && 
            <span className="toggle">
                <span className="switch-body d-flex">
                    <input onChange={props.onChange} className="switch" type="checkbox" id={props.forId} />
                    <label className="toggle-body position-r" htmlFor={props.forId}></label>
                    {props.label && <label className="switch-label" htmlFor={props.forId}>{props.label}</label>}
                </span>
            </span>
        }
        {props.checkbox && 
            <span className="checkbox">
                <span className="switch-body d-flex">
                    <input onChange={props.onChange} className="check position-r" type="checkbox" id={props.forId} />
                    {props.label && <label className="switch-label" htmlFor={props.forId}>{props.label}</label>}
                </span>
            </span>
        }
        </>
    )
}

export default Switches