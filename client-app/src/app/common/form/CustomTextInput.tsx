import { useField } from 'formik';
import React from 'react'
import { Form } from 'semantic-ui-react';
import Label from 'semantic-ui-react/dist/commonjs/elements/Label';

interface Props{
    placeholder: string;
    name: string;
    label?: string;
    type?:string;
}

export default function CustomTextInput(props: Props){
    const[field, meta] = useField(props.name);

    return (
        <Form.Field error={meta.touched && !!meta.error}>
            
            <label>{props.label}</label>
            <input {...field} {...props} />
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null}

        </Form.Field>
    )
}