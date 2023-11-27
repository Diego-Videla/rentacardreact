import React, { useContext }  from "react";
import {  BgDiv, ButtonConteiner, LinksContainer, NavbarContainer } from "./styles";
import img from './img/img-logo-empresa.png';
import imgcarrito from './img/img-carrito.jpg';
import { NavLink } from "react-router-dom";
import { BurguerButton } from "../BurguerButton/BurguerButton";
import { MenuContext } from "../contexto/Menu";

export const Navbar=()=>{
    const menuValue= useContext(MenuContext)
    return(
        <NavbarContainer>
            <div>
                <img src= {img} alt="Logo Empresa" />
            </div>
            <LinksContainer className= {`links ${menuValue.menu ? 'active' : '' }`} >
                < NavLink onClick={menuValue.handleClick} to='/' > Nosotros</NavLink>
                < NavLink onClick={menuValue.handleClick}  to='/products'  >Productos</NavLink>
                < NavLink onClick={menuValue.handleClick}  to='/contact' >Contacto</NavLink>
            </LinksContainer>
            <ButtonConteiner className="burguer">
                <BurguerButton onClick={()=>menuValue.handleClick}  />
            </ButtonConteiner>
            <BgDiv   className={` initial ${menuValue.menu ? 'active' : '' } `} >

            </BgDiv>
            <img src= {imgcarrito} alt="" />
        </NavbarContainer>
    )
}
