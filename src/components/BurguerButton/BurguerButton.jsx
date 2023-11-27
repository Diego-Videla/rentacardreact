import React, { useContext } from "react";
import { Burguer } from "./styles";
import { MenuContext } from "../contexto/Menu";

export const BurguerButton=()=>{
    const menuValue= useContext(MenuContext)
    return(
        <Burguer>
            <div onClick={menuValue.handleClick}  className= {`nav-icon1 ${menuValue.menu ? 'open' : ' '}`} >
                <span></span>
                <span></span> 
                <span></span>
            </div>
        </Burguer>
    )
}

