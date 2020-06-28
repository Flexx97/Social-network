import React from 'react'


const FormControl = ({input, meta, child, ...props}) => {
    return (
        <div>
            <div>
                {props.children}
            </div>
            {meta.touched && ((meta.error && <span>{meta.error}</span>) || (meta.warning &&
                <span>{meta.warning}</span>))}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <div>
            <FormControl{...props}><textarea {...input} {...restProps} /></FormControl>
        </div>
    )
}