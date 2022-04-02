import React from 'react'
import { FormInput, Label } from './styled';

const Input = ({label, type, name, placeholder, value, handleChange}) => {



    return (
       <>
            <Label htmlFor={name}> {label} </Label>
            <FormInput type={type} id={name} name={name} value={value} placeholder={placeholder} onChange={handleChange} />
       </>
    )
}

export default Input;