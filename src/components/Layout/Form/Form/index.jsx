import React from 'react'
import { FormComponent } from './styled';


const Form = ({onSubmit, children}) => {


    return (
        <FormComponent onSubmit={onSubmit}>
            {children}
        </FormComponent>
    )
}

export default Form;