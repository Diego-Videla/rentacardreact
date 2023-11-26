import React from "react";
import { Burguer } from "./styles";
import { Menu } from "../contexto/Menu";

export const BurguerButton=()=>{
    return(
        <Burguer>
            <div  onClick={Menu.Provider.handleClick} className= {`nav-icon1 ${Menu.Provider.estado ? 'open' : ''}` } >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </Burguer>
    )
}

