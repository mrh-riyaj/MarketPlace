const Input = (props) => {
    return (
        <>
            {props.input &&
                <>
                    {props.label &&
                        <span className="label">{props.label}
                            {props.required && <i className="required">*</i>}
                        </span>
                    }
                    <input
                        type={props.type}
                        name={props.name}
                        className={"input-body " + (props.class)}
                        onChange={props.onChange}
                        placeholder={props.placeholder}
                    />
                </>
            }
            {props.textarea &&
                <>
                    {props.label &&
                        <span className="label">{props.label}
                            {props.required && <i className="required">*</i>}
                        </span>
                    }
                    <textarea
                        name={props.name}
                        onChange={props.onChange}
                        className="input-body textarea"
                    />
                </>
            }
            {props.imageSelector &&
                <>
                    {props.label &&
                        <span className="label">{props.label}
                            {props.required && <i className="required">*</i>}
                        </span>
                    }
                    <input
                        type={props.type} name={props.name} className="input-body" onChange={props.onChange}
                    />
                </>
            }
        </>
    )
}

export default Input