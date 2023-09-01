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
            {/* {props.select &&
                <>
                    {props.label &&
                        <span className="label">{props.label}
                            {props.required && <i className="required">*</i>}
                        </span>
                    }
                    <select
                        name={props.name} className="input-body" onChange={props.onChange}
                    >
                        <option value=""></option>
                    </select>
                    <input
                        type={props.type}
                    />
                </>
            } */}
        </>
    )
}

export default Input