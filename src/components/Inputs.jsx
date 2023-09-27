const Inputs = (props) => {
    return (
        <>
            {props.input &&
                <>
                    {props.label &&
                        <span className="label">{props.label}
                            {props.required && <i className="required">*</i>}
                        </span>
                    }
                    <div className="input-wrapper">
                        {props.textLeft && <span className={"input-icon"}>{props.textLeft}</span>}
                        {props.iconLeft && <i className={"input-icon icon-" + props.iconLeft}></i>}
                        <input
                            type={props.type ? props.type : "text"}
                            name={props.name}
                            className={
                                (props.class) + " input-body " + (props.type ? props.type : "")
                            }
                            onChange={props.onChange}
                            placeholder={props.placeholder}
                            multiple={props.multiple}
                            />
                        {props.iconRight && <i className={"input-icon icon-" + props.iconRight}></i>}
                        {props.textRight && <span className={"input-icon"}>{props.textRight}</span>}
                    </div>
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
        </>
    )
}

export default Inputs