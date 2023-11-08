import React from "react";
import { LinksContainer, NavbarContainer } from "./styles";
import img from './img-logo-empresa.png';
import imgcarrito from './img-carrito.jpg';


export const Navbar=()=>{
    return(
        <NavbarContainer>
            <div>
                <img src= {img} alt="Logo Empresa" />
            </div>
            <LinksContainer>
                <a href="">Productos</a>
                <a href="">Iniciar Session</a>
                <img src= {imgcarrito} alt="" />
            </LinksContainer>
        </NavbarContainer>
    )
}