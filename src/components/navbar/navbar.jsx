import React from "react";
import { LinksContainer, NavbarContainer } from "./styles";
import img from './img/img-logo-empresa.png';
import imgcarrito from './img/img-carrito.jpg';
import { NavLink } from "react-router-dom";


export const Navbar=()=>{
    return(
        <NavbarContainer>
            <div>
                <img src= {img} alt="Logo Empresa" />
            </div>
            <LinksContainer>
                <NavLink to='/' >Nosotros</NavLink>
                <NavLink to='/products' >Productos</NavLink>
                <NavLink to='/contact' >Contacto</NavLink>
                <img src= {imgcarrito} alt="" />
            </LinksContainer>
        </NavbarContainer>
    )
}