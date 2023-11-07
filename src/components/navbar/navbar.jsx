import React from "react";
import { LinksContainer, NavbarContainer } from "./styles";


export const Navbar=()=>{
    return(
        <NavbarContainer>
            <div>
                <img src="./src/assets/img-logo-empresa.png" alt="Logo Empresa" />
            </div>
            <LinksContainer>
                <a href="">Productos</a>
                <a href="">Iniciar Session</a>
                <img src="./src/assets/img-carrito.jpg" alt="" />
            </LinksContainer>
        </NavbarContainer>
    )
}