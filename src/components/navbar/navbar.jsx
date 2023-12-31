import React, { useContext }  from "react";
import {  BgDiv, ButtonConteiner, Items, LinksContainer, NavbarContainer } from "./styles";
import img from './img/img-logo-empresa.png';
import imgcarrito from './img/img-carrito.jpg';
import { NavLink } from "react-router-dom";
import { BurguerButton } from "../BurguerButton/BurguerButton";
import { MenuContext } from "../contexto/Menu";
import { CarritoContext } from "../contexto/Carrito";
export const Navbar=()=>{
    const menuValue= useContext(MenuContext)
    const {cantItems}= useContext(CarritoContext);
    const cantidad= cantItems();
    return(
        <NavbarContainer>
            <div>
                <img src= {img} alt="Logo Empresa" />
            </div>
            <LinksContainer className= {`links ${menuValue.menu ? 'active' : '' }`} >
                < NavLink onClick={menuValue.closemenu} to='/' > Nosotros</NavLink>
                < NavLink onClick={menuValue.closemenu}  to='/products'  >Productos</NavLink>
                < NavLink onClick={menuValue.closemenu}  to='/contact' >Contacto</NavLink>
            </LinksContainer>
            <ButtonConteiner className="burguer">
                <BurguerButton onClick={()=>menuValue.handleClick}  />
            </ButtonConteiner>
            <BgDiv   className={` initial ${menuValue.menu ? 'active' : '' } `} >

            </BgDiv>
            <NavLink to='/carrito' >
            <div>
             <img src= {imgcarrito} alt="" />
             <Items>
             <p>{cantidad} </p>
             </Items>
             </div>  
            </NavLink>
        </NavbarContainer>
    )
}
