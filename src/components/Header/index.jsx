import React from 'react'
import { Button, HeaderComponent, Input, LinkLogo, Logo, Navbar, Search } from './styled';
import { NavLink } from 'react-router-dom'
import logo from '../../../public/images/Tinelli Eventos.png'

import { IoSearchOutline } from "react-icons/io5";

const Header = () => {


  return (  
      <HeaderComponent>

        <LinkLogo href='/'>
            <Logo src={logo} />
        </LinkLogo>

        <Search>
            <Input type="text" placeholder='Busque um evento'/>
            <Button type='submit' > <IoSearchOutline/> </Button>
        </Search>

        <Navbar>
            <NavLink to="/" className="navlink"> Eventos </NavLink>
            <NavLink to="/create_event" className="navlink"> Criar Evento </NavLink>
            <NavLink to="/my_events" className="navlink"> Meus Eventos </NavLink>
            <NavLink to="/login" className="navlink"> Login </NavLink>
            <NavLink to="/register" className="navlink"> Registro </NavLink>
        </Navbar>

      </HeaderComponent>
  )

}

export default Header;