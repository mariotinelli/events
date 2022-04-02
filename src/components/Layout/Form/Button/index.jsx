import React from 'react'
import { ButtonComponent } from './styled';

const Button = ({type, btnText}) => {


    return (
        <ButtonComponent type={type}> {btnText} </ButtonComponent>
    )
}

export default Button;