import React from 'react'
import { Label } from '../Input/styled';
import { FormTextArea } from './styled';

const TextArea = ({label, name, value, placeholder, handleChange}) => {


    return (
        <>
            <Label htmlFor={name}> {label} </Label>
            <FormTextArea rows="5" id={name} name={name} value={value} placeholder={placeholder} onChange={handleChange} />
        </>
    )
}

export default TextArea;