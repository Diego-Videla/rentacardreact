import React  from "react";
import { Menu } from "../contexto/Menu";
import {  ButtonConteiner, LinksContainer, NavbarContainer } from "./styles";
import img from './img/img-logo-empresa.png';
import imgcarrito from './img/img-carrito.jpg';
import { NavLink } from "react-router-dom";
import { BurguerButton } from "../BurguerButton/BurguerButton";


export const Navbar=()=>{
    return(
        <NavbarContainer>
            <div>
                <img src= {img} alt="Logo Empresa" />
            </div>
            <LinksContainer className= {` links ${Menu.Provider.estado ? 'active': ''} `} >
                < NavLink  to='/' > Nosotros</NavLink>
                < NavLink to='/products' >Productos</NavLink>
                < NavLink to='/contact' >Contacto</NavLink>
            </LinksContainer>
            <ButtonConteiner className="burguer">
                <BurguerButton/>
            </ButtonConteiner>
            <img src= {imgcarrito} alt="" />
        </NavbarContainer>
    )
}
